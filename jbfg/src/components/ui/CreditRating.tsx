import styles from 'styles/css/creditRating.module.css';
import {text} from 'services/heroService';
import Image from 'next/image';

function CreditRating() {
    return (
        <div className={styles.creditRating}>
            <h2>{text.creditRating.title}</h2>
            <nav>
                <ul>
                    {Object.values(text.creditRating.evaluation).map((item, index) => (
                        <li key={item[index] + index}>
                            <Image src="/images/aa.png" alt="aa" width={83} height={83} />
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default CreditRating;