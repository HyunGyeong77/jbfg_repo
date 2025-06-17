"use client";

import styles from 'styles/hero.module.css';
import {text} from 'services/heroService';
import {useState, useEffect} from 'react';

export function Hero() {
    const [isDownload, setIsDownload] = useState(Array(text.performance.data.length).fill(false));
    const [isArrow, setIsArrow] = useState(false);
    const [infoColor, setInfoColor] = useState(Array(3).fill(false));

    useEffect(() => {
        const ref_result = text.info.content.ref;
        const others = text.info.content.other;

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

    return (
        <section className={styles.section}>
            <div>
                <video width="100%" autoPlay loop muted>
                    <source src="/videos/kv.mp4" type="video/mp4" />
                </video>
            </div>
            <div>
                <div>
                    <div className={styles.left}>
                        {text.intro.map((item, index) => (
                            <h1 key={item + index}>{item}</h1>
                        ))}
                    </div>
                    <div className={styles.right}>
                        <div>
                            <div className={styles.creditRating}>   {/* 신용등급 */}
                                <h2>{text.creditRating.title}</h2>
                                <nav>
                                    <ul>
                                        {Object.values(text.creditRating.evaluation).map((item, index) => (
                                            <li key={item[index] + index}>
                                                <img src="/images/aa.png" />
                                                <p>{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className={styles.ir}>   {/* IR활동 */}
                                <h2>{text.ir.title}</h2>
                                <nav>
                                    <ul>
                                        {Object.values(text.ir.history).map((item, index) => (
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
                                <h2>{text.report.title}</h2>
                                <div>
                                    <p>{text.report.content[0]}</p>
                                    <p>{text.report.content[1]}</p>
                                </div>
                                <a href="#" onMouseEnter={arrowIsHover(true)} onMouseLeave={arrowIsHover(false)}>
                                    <img src={!isArrow ? "/images/arrow.png" : "/images/arrow_hover.png"}
                                        style={{background: !isArrow ? "#ffffff4d" : "white"}} />
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className={styles.performance}>   {/* 경영실적 */}
                                <h2>{text.performance.title}</h2>
                                <div>
                                    <p>{text.performance.content[0]}</p>
                                    <p>{text.performance.content[1]}</p>
                                </div>
                                <nav>
                                    <ul>
                                        {text.performance.data.map((item, index) => (
                                            <li key={item + index}>
                                                <a href="#" onMouseEnter={downloadIsHover(true, index)} onMouseLeave={downloadIsHover(false, index)}>
                                                    <p>{item}</p>
                                                    <img src={!isDownload[index] ? "/images/download.png" : "/images/download_hover.png"}
                                                        style={{background: !isDownload[index] ? "#ffffff4d" : "white"}} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className={styles.info}>   {/* 주가정보 */}
                                <h2>{text.info.title}</h2>
                                <div>
                                    <p>{text.info.content.ref.company}</p>
                                    <div>
                                        <strong>{text.info.content.ref.price[0]}</strong>
                                        <small>{text.info.content.ref.price[1]}</small>
                                    </div>
                                    <div style={{color: infoColor[0] ? "red" : "blue"}}>
                                        <span>{text.info.content.ref.result[0]}</span>
                                        <span>{text.info.content.ref.result[1]}</span>
                                    </div>
                                </div>
                                <nav>
                                    {Object.values(text.info.content.other).map((item, index) => (
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