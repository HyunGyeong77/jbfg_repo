"use client";

import styles from 'styles/css/news.module.css';
import {text} from 'services/newsService';
import NewsComp from '@ui/NewsComp';
import {useRef, useEffect} from 'react';
import {animObserver} from 'lib/utils/animObserver';

function News() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const sectionRef_cur = sectionRef.current as HTMLElement;
        animObserver(sectionRef_cur, styles.anim, 0.3);
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div>
                <div>
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
                            <NewsComp tidings={text.tidings.first} />
                            <NewsComp tidings={text.tidings.two} />
                        </div>
                        <div>
                            <NewsComp tidings={text.tidings.three} />
                            <NewsComp tidings={text.tidings.four} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;