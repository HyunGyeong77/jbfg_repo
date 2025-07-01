"use client";

import styles from 'styles/css/footer.module.css';
import {text} from 'services/footerService';
import Image from 'next/image';
import {useState} from 'react';

function Footer() {
    const [iconIsHover, setIconIsHover] = useState(Array(text.siteIcon.length).fill(false));
    const [arrowIsHover, setArrowIsHover] = useState(false);

    const iconMouseIsEnter = (index: number, bool: boolean) => (e: React.MouseEvent) => {
        e.preventDefault();

        setIconIsHover((prev) => {
            const newArr = [...prev];
            newArr[index] = bool;
            return newArr;
        });
    }

    const arrowMouseIsEnter = (bool: boolean) => (e: React.MouseEvent) => {
        e.preventDefault();
        setArrowIsHover(bool);
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <a href="#">
                    <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
                </a>
                <div>
                    <div>
                        <span>{text.tel}</span>
                        <span>{text.intro}</span>
                    </div>
                    <div>
                        <div className={styles.siteIcon}>
                            {text.siteIcon.map((item, index) => (
                                <a href="#" key={item + index} onMouseEnter={iconMouseIsEnter(index, true)} onMouseLeave={iconMouseIsEnter(index, false)}>
                                    {!iconIsHover[index] ? 
                                        <Image src={item} alt={item} width={30} height={30} /> :
                                        <Image src={text.siteHover[index]} alt={text.siteHover[index]} width={30} height={30} />
                                    }
                                </a>
                            ))}
                        </div>
                        <div className={styles.menu}>
                            {text.menu.map((item, index) => (
                                <div key={item + index}>
                                    <a href="#">{item}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <a href="#"><p>Family site</p></a>
                <a href="#" onMouseEnter={arrowMouseIsEnter(true)} onMouseLeave={arrowMouseIsEnter(false)}>
                    BACK TO TOP
                    {!arrowIsHover ?
                        <Image src="/icons/arrow_top.svg" alt="arrow_top" width={30} height={30} /> :
                        <Image src="/icons/arrow_top_hover.svg" alt="arrow_top_hover" width={30} height={30} />
                    }
                </a>
            </div>
        </footer>
    );
}

export default Footer;