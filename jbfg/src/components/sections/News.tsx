import styles from 'styles/css/news.module.css';
import {text} from 'services/newsService';
import NewsComp from '@ui/NewsComp';

function News() {
    return (
        <section className={styles.section}>
            <div>
                <div>
                    <div className={styles.left}>
                        <h2>{text.title}</h2>
                        <p>{text.content}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <NewsComp tidings={text.tidings.first} />
                            <NewsComp tidings={text.tidings.two} />
                        </div>
                        <div>
                            <NewsComp tidings={text.tidings.three} />
                            <NewsComp tidings={text.tidings.four} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;