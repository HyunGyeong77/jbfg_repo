import styles from 'styles/css/esgComp.module.css';
import ClickBtnIcon from '@common/buttons/ClickBtnIcon';
import {esgServiceProps} from 'types/esgServiceProps';
import {text} from 'services/esgService';

function EsgComp({ textType, img }: esgServiceProps) {
    return (
        <div className={styles.esgComp}>
            <div>
                <h2>{textType.title}</h2>
                <div>
                    {textType.title.includes(text.report.title) ?
                        <a href="#">
                            <span>{textType.content[0]}</span>
                            <ClickBtnIcon src="/images/download.png" alt="download" />
                        </a> :
                        <p>{textType.content[0]}<br />{textType.content[1]}</p>
                    }
                </div>
            </div>
            <div>
                <a href="#">
                    <ClickBtnIcon src="/images/arrow.png" alt="arrow" />
                </a>
                <img src={img} />
            </div>
        </div>
    );
}

export default EsgComp;