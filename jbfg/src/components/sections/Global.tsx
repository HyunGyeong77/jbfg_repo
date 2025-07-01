"use client";

import styles from 'styles/css/global.module.css';
import {text} from 'services/globalService';
import GlobalComp from '@ui/GlobalComp';
import Image from 'next/image';
import {useRef, useEffect} from 'react';
import {animObserver} from 'lib/utils/animObserver';

function Global() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const sectionRef_cur = sectionRef.current as HTMLElement;
        animObserver(sectionRef_cur, styles.anim, 0.3);
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.bg}>
                <div>
                    <Image src="/icons/earth-o.svg" alt="earth-o" width={30} height={30} />
                    <div>
                        <Image src="/icons/nations.svg" alt="nations" width={30} height={30} />
                    </div>
                </div>
            </div>
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
                        <div>
                            <div className={styles.left}>
                                <GlobalComp country={text.branch.cambodia} />
                                <GlobalComp country={text.branch.myanmar} />
                            </div>
                            <div className={styles.right}>
                                <GlobalComp country={text.branch.vietnam} />
                                <GlobalComp country={text.branch.korea} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Global;