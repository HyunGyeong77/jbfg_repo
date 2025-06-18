import styles from 'styles/css/info.module.css';
import {text} from 'services/heroService';
import {useState, useEffect} from 'react';

function StockPriceInfo() {
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

    return (
        <div className={styles.info}>
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
    );
}

export default StockPriceInfo;