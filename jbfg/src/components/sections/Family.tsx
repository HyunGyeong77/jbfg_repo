"use client";

import styles from 'styles/css/family.module.css';
import {text} from 'services/familyService';
import Image from 'next/image';
import {useRef, useEffect} from 'react';
import {animObserver} from 'lib/utils/animObserver';

function Family() {
    const topRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const topRef_cur = topRef.current as HTMLDivElement;
        const bottomRef_cur = bottomRef.current as HTMLElement;
        
        animObserver(topRef_cur, styles.anim, 0.1);
        animObserver(bottomRef_cur, styles.anim, 0.3);
    }, []);

    // const btm_onMouseDown = (e: React.MouseEvent) => {
    //     const bottomRef_cur = bottomRef.current as HTMLElement;

    //     console.log(bottomRef_cur.offsetLeft);
    //     console.log(e.pageX);
    // }

    return (
        <section className={styles.section}>
            <div>
                <div ref={topRef} className={styles.top}>
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
                <nav ref={bottomRef} className={styles.bottom}>
                    {Object.values(text.company).map((item, index) => (
                        <ul key={item.title + index}>
                            <a href="#" draggable="false">
                                <li><Image src={item.img} alt={item.img} width={30} height={30} draggable="false" /></li>
                                <li><span>{item.type}</span></li>
                                <li><h3>{item.title}</h3></li>
                                <li><p>{item.content[0]}<br />{item.content[1]}</p></li>
                                <li><Image src="/icons/arrow_right.svg" alt="arrow_right" width={30} height={30} draggable="false" /></li>
                            </a>
                        </ul>
                    ))}
                </nav>
            </div>
        </section>
    );
}

export default Family;