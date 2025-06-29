import styles from 'styles/css/performance.module.css';
import {text} from 'services/heroService';
import {useState} from 'react';
import {iconClassChange} from '@utils/iconHover';
import ClickBtnIcon from '@common/buttons/ClickBtnIcon';


function Performance() {
    const [isDownload, setIsDownload] = useState(Array(text.performance.data.length).fill(false));

    const downloadIsHover = (bool: boolean, index: number) => (e: React.MouseEvent) => {
        iconClassChange(e, bool);

        setIsDownload((prev) => {
            const newData = [...prev];
            newData[index] = bool;

            return newData;
        })
    }

    return (
        <div className={styles.performance}>   {/* 경영실적 */}
            <h2>{text.performance.title}</h2>
            <div>
                <p>{text.performance.content}</p>
            </div>
            <nav>
                <ul>
                    {text.performance.data.map((item, index) => (
                        <li key={item + index}>
                            <a href="#" onMouseEnter={downloadIsHover(true, index)} onMouseLeave={downloadIsHover(false, index)}>
                                <p>{item}</p>
                                {!isDownload[index] ?
                                    <ClickBtnIcon src="/images/download.png" alt="donwload" /> :
                                    <ClickBtnIcon src="/images/download_hover.png" alt="download_hover" />
                                }
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Performance;