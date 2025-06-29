import styles from 'styles/css/family.module.css';
import {text} from 'services/familyService';
import Image from 'next/image';

function Family() {
    return (
        <section className={styles.section}>
            <div>
                <div className={styles.top}>
                    <h2>{text.title}</h2>
                    <p>{text.content[0]}<br />{text.content[1]}</p>
                </div>
                <nav className={styles.bottom}>
                    {Object.values(text.company).map((item, index) => (
                        <ul key={item.title + index}>
                            <a href="#">
                                <li><Image src={item.img} alt={item.img} width={30} height={30} /></li>
                                <li><span>{item.type}</span></li>
                                <li><h3>{item.title}</h3></li>
                                <li><p>{item.content[0]}<br />{item.content[1]}</p></li>
                                <li><Image src="/icons/arrow_right.svg" alt="arrow_right" width={30} height={30} /></li>
                            </a>
                        </ul>
                    ))}
                </nav>
            </div>
        </section>
    );
}

export default Family;