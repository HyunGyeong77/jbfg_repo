import styles from 'styles/css/ir.module.css';
import {text} from 'services/heroService';

function IR() {
    return (
        <div className={styles.ir}>
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
    );
}

export default IR;