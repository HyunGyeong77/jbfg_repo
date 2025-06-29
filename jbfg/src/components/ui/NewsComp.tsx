import styles from 'styles/css/newsComp.module.css';
import {NewsServiceProps} from 'types/newsServiceProps';

function NewsComp({ tidings }: NewsServiceProps) {
    return (
        <div className={styles.newsComp}>
            <a href="#">
                <div>
                    <img src={tidings.img} />
                </div>
                <p>{tidings.content}</p>
                <p>{tidings.date}</p>
            </a>
        </div>
    );
}

export default NewsComp;