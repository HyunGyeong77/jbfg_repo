import styles from 'styles/css/report.module.css';
import {text} from 'services/heroService';
import {useState} from 'react';
import {iconClassChange} from 'lib/utils/iconHover';
import ClickBtnIcon from '@common/buttons/ClickBtnIcon';
import Image from 'next/image';

function Report() {
    const [isArrow, setIsArrow] = useState(false);

    const arrowIsHover = (bool: boolean) => (e: React.MouseEvent) => {
        iconClassChange(e, bool);
        setIsArrow(bool);
    }

    return (
        <div className={styles.report}>
            <div>
                <Image src="/images/bg-donut.png" alt="bg-donut" width={353} height={193} priority={true} />
            </div>
            <h2>{text.report.title}</h2>
            <div>
                <p>{text.report.content}</p>
            </div>
            <a href="#" onMouseEnter={arrowIsHover(true)} onMouseLeave={arrowIsHover(false)}>
                {!isArrow ? 
                    <ClickBtnIcon src="/images/arrow.png" alt="arrow" /> :
                    <ClickBtnIcon src="/images/arrow_hover.png" alt="arrow_hover" />
                }
            </a>
        </div>
    );
}

export default Report;