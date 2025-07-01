"use client";

import styles from 'styles/css/esgComp.module.css';
import ClickBtnIcon from '@common/buttons/ClickBtnIcon';
import {esgServiceProps} from 'types/esgServiceProps';
import {text} from 'services/esgService';
import Image from 'next/image';
import {useState} from 'react';

function EsgComp({ textType, img }: esgServiceProps) {
    const [dlIsHover, setDlIsHover] = useState(false);
    const [arrowIsHover, setArrowIsHover] = useState(false);

    const dlMouseIsEnter = (bool: boolean) => (e: React.MouseEvent) => {
        e.preventDefault();
        setDlIsHover(bool);
    }

    const arrowMouseIsEnter = (bool: boolean) => (e: React.MouseEvent) => {
        e.preventDefault();
        setArrowIsHover(bool);
    }

    return (
        <div className={styles.esgComp}>
            <div>
                <h2>{textType.title}</h2>
                <div>
                    {textType.title.includes(text.report.title) ?
                        <a href="#" onMouseEnter={dlMouseIsEnter(true)} onMouseLeave={dlMouseIsEnter(false)}>
                            <span>{textType.content[0]}</span>
                            {!dlIsHover ?
                                <ClickBtnIcon src="/images/download.png" alt="download" /> :
                                <ClickBtnIcon src="/images/download_hover.png" alt="download_hover" />
                            }
                        </a> :
                        <p>{textType.content[0]}<br />{textType.content[1]}</p>
                    }
                </div>
            </div>
            <div>
                <a href="#" onMouseEnter={arrowMouseIsEnter(true)} onMouseLeave={arrowMouseIsEnter(false)}>
                    {!arrowIsHover ?
                        <ClickBtnIcon src="/images/arrow.png" alt="arrow" /> :
                        <ClickBtnIcon src="/images/arrow_hover.png" alt="arrow_hover" />
                    }
                </a>
                <Image src={img} alt={img} width={125} height={125} />
            </div>
        </div>
    );
}

export default EsgComp;