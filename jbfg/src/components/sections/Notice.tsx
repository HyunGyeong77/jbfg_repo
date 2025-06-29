import styles from 'styles/css/notice.module.css';
import {text} from 'services/noticeService';
import Image from 'next/image';

function Notice() {
    return (
        <section className={styles.section}>
            <Image src="/images/bg-notice.jpg" alt="bg-notice" width={30} height={30} />
            <div className={styles.content}>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <h2>{text.title}</h2>
                        <p>{text.content[0]}<br />{text.content[1]}</p>
                    </div>
                    <div className={styles.right}>
                        {Object.values(text.info).map((item, index) => (
                            <a href="#" key={item.title + index}>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                                <div>
                                    <Image src="/icons/arrow_right.svg" alt="arrow_right" width={30} height={30} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Notice;