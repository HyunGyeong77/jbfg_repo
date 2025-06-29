import styles from 'styles/css/notice.module.css';
import {text} from 'services/noticeService';

function Notice() {
    return (
        <section className={styles.section}>
            <img src="/jbfg/images/bg-notice.jpg" />
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
                                    <img src="/jbfg/icons/arrow_right.svg" />
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