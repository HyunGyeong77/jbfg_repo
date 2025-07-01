"use client";

import styles from 'styles/css/notice.module.css';
import {text} from 'services/noticeService';
import Image from 'next/image';
import {useRef, useEffect, useState} from 'react';
import {animObserver} from 'lib/utils/animObserver';

function Notice() {
    const [arrowsIsHover, setArrowsIsHover] = useState(Array(Object.keys(text.info).length).fill(false));
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const sectionRef_cur = sectionRef.current as HTMLElement;
        animObserver(sectionRef_cur, styles.anim, 0.6);
    }, []);

    const arrowMouseIsEnter = (index: number, bool: boolean) => (e: React.MouseEvent) => {
        e.preventDefault();

        setArrowsIsHover((prev) => {
            const newArr = [...prev];
            newArr[index] = bool;
            return newArr;
        })
    }

    return (
        <section ref={sectionRef} className={styles.section}>
            <Image src="/images/bg-notice.jpg" alt="bg-notice" width={30} height={30} />
            <div className={styles.content}>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <div>
                            <h2>{text.title}</h2>
                        </div>
                        <div>
                            <div>
                                <p>{text.content[0]}</p>
                            </div>
                            <div>
                                <p>{text.content[1]}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        {Object.values(text.info).map((item, index) => (
                            <a href="#" key={item.title + index} onMouseEnter={arrowMouseIsEnter(index, true)} onMouseLeave={arrowMouseIsEnter(index, false)}>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                                <div>
                                    {!arrowsIsHover[index] ? 
                                        <Image src="/icons/arrow_right.svg" alt="arrow_right" width={30} height={30} /> :
                                        <Image src="/icons/arrow_right_hover.svg" alt="arrow_right_hover" width={30} height={30} />
                                    }
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