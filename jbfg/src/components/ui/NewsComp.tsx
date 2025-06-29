import styles from 'styles/css/newsComp.module.css';
import {NewsServiceProps} from 'types/newsServiceProps';
import Image from 'next/image';

function NewsComp({ tidings }: NewsServiceProps) {
    return (
        <div className={styles.newsComp}>
            <a href="#">
                <div>
                    <Image src={tidings.img} alt={tidings.img} width={30} height={30} unoptimized />
                </div>
                <p>{tidings.content}</p>
                <p>{tidings.date}</p>
            </a>
        </div>
    );
}

export default NewsComp;