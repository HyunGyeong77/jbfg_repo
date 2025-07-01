"use client";

import styles from 'styles/css/esg.module.css';
import {text} from 'services/esgService';
import EsgComp from '@ui/EsgComp';
import Image from 'next/image';
import {useRef, useEffect} from 'react';
import {animObserver} from 'lib/utils/animObserver';

function Esg() {
    const sectionRef = useRef<HTMLElement>(null);
    
    useEffect(() => {
        const sectionRef_cur = sectionRef.current as HTMLElement;
        animObserver(sectionRef_cur, styles.anim, 0.3);
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.content}>
                <div className={styles.bg_icon}>
                    {Array(3).fill(null).map((_, index) => (
                        <Image key={index} src={`/icons/esg-bg-item${index + 1}.svg`} alt={`esg-bg-item${index + 1}`} width={1000} height={1000} />
                    ))}
                </div>
                <div className={styles.inner}>
                    <div>
                        <div className={styles.left}>
                            <div>
                                <h3>{text.title}</h3>
                            </div>
                            <div>
                                <div>
                                    <p>{text.intro[0]}</p>
                                </div>
                                <div>
                                    <p>{text.intro[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <div className={styles.left}>
                                    <EsgComp textType={text.report} img={"/images/esg-icon1.png"} />
                                    <EsgComp textType={text.evaluation} img={"/images/esg-icon2.png"} />
                                </div>
                                <div className={styles.right}>
                                    <EsgComp textType={text.initiative} img={"/images/esg-icon3.png"} />
                                    <EsgComp textType={text.contribution} img={"/images/esg-icon4.png"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Esg;