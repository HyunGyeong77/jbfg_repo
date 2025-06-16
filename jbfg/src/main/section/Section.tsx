import styles from 'main/style.module.css';
import {videos} from 'constants/videos';
import {texts} from 'main/texts';
import {images} from 'constants/images';
import {useState, useEffect} from 'react';

const txt = texts.section;

export function Section() {
    return (
        <div className={styles.section}>
            <First_sec />
        </div>
    );
}

export function First_sec() {
    const {first} = txt;
    const [isDownload, setIsDownload] = useState(Array(first.performance.data.length).fill(false));
    const [isArrow, setIsArrow] = useState(false);
    const [infoColor, setInfoColor] = useState(Array(3).fill(false));

    useEffect(() => {
        const ref_result = first.info.content.ref;
        const others = first.info.content.other;

        setInfoColor(prev => {
            const newArr = [...prev];
            newArr[0] = ref_result.result[1].includes("▲") ? true : false;
            return newArr;
        });

        Object.values(others).forEach((item, index) => {
            setInfoColor(prev => {
                const newArr = [...prev];
                newArr[index + 1] = item.result.includes("▲") ? true : false;
                return newArr;
            })
        })
    }, []);

    const arrowIsHover = (bool: boolean) => (e: React.MouseEvent) => {
        e.preventDefault();
        setIsArrow(bool);
    }

    const downloadIsHover = (bool: boolean, index: number) => (e: React.MouseEvent) => {
        e.preventDefault();

        setIsDownload((prev) => {
            const newData = [...prev];
            newData[index] = bool;

            return newData;
        })
    }

    return(
        <section className={styles.first}>
            <div>
                <video width="100%" autoPlay loop muted>
                    <source src={videos.main} type="video/mp4" />
                </video>
            </div>
            <div>
                <div>
                    <div className={styles.left}>
                        {first.intro.map((item, index) => (
                            <h1 key={item + index}>{item}</h1>
                        ))}
                    </div>
                    <div className={styles.right}>
                        <div>
                            <div className={styles.creditRating}>   {/* 신용등급 */}
                                <h2>{first.creditRating.title}</h2>
                                <nav>
                                    <ul>
                                        {Object.values(first.creditRating.evaluation).map((item, index) => (
                                            <li key={item[index] + index}>
                                                <img src={images.aa} />
                                                <p>{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className={styles.ir}>   {/* IR활동 */}
                                <h2>{first.ir.title}</h2>
                                <nav>
                                    <ul>
                                        {Object.values(first.ir.history).map((item, index) => (
                                            <li key={item[index] + index}>
                                                <a href="#">
                                                    <p>{item[0]}</p>
                                                    <p>{item[1]}</p>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className={styles.report}>   {/* 통합연차보고서 */}
                                <h2>{first.report.title}</h2>
                                <div>
                                    <p>{first.report.content[0]}</p>
                                    <p>{first.report.content[1]}</p>
                                </div>
                                <a href="#" onMouseEnter={arrowIsHover(true)} onMouseLeave={arrowIsHover(false)}>
                                    <img src={!isArrow ? images.arrow : images.arrow_hover}
                                        style={{background: !isArrow ? "#ffffff4d" : "white"}} />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className={styles.performance}>   {/* 경영실적 */}
                                <h2>{first.performance.title}</h2>
                                <div>
                                    <p>{first.performance.content[0]}</p>
                                    <p>{first.performance.content[1]}</p>
                                </div>
                                <nav>
                                    <ul>
                                        {first.performance.data.map((item, index) => (
                                            <li key={item + index}>
                                                <a href="#" onMouseEnter={downloadIsHover(true, index)} onMouseLeave={downloadIsHover(false, index)}>
                                                    <p>{item}</p>
                                                    <img src={!isDownload[index] ? images.download : images.download_hover}
                                                        style={{background: !isDownload[index] ? "#ffffff4d" : "white"}} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className={styles.info}>   {/* 주가정보 */}
                                <h2>{first.info.title}</h2>
                                <div>
                                    <p>{first.info.content.ref.company}</p>
                                    <div>
                                        <strong>{first.info.content.ref.price[0]}</strong>
                                        <small>{first.info.content.ref.price[1]}</small>
                                    </div>
                                    <div style={{color: infoColor[0] ? "red" : "blue"}}>
                                        <span>{first.info.content.ref.result[0]}</span>
                                        <span>{first.info.content.ref.result[1]}</span>
                                    </div>
                                </div>
                                <nav>
                                    {Object.values(first.info.content.other).map((item, index) => (
                                        <ul key={item.company + index}>
                                            <li>
                                                <p>{item.company}</p>
                                                <div>
                                                    <p>{item.price}</p>
                                                    <p style={{color: infoColor[index + 1] ? "red" : "blue"}}>{item.result}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}