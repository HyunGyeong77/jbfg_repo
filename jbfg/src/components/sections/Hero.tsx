"use client";

import styles from 'styles/css/hero.module.css';
import CreditRating from '@ui/CreditRating';
import Report from '@ui/Report';
import IR from '@ui/Ir';
import Performance from '@ui/Performance';
import StockPriceInfo from '@ui/StockPriceInfo';
import {text} from 'services/heroService';

export function Hero() {

    return (
        <section className={styles.section}>
            <div>
                <video width="100%" autoPlay loop muted>
                    <source src="/jbfg/videos/kv.mp4" type="video/mp4" />
                </video>
            </div>
            <div>
                <div>
                    <div className={styles.left}>
                        <div>
                            {text.intro.map((item, index) => (
                                <h1 key={item + index}>{item}</h1>
                            ))}
                        </div>
                        <div>
                            <div></div>
                            <button></button>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <CreditRating />
                            <IR />
                            <Report />
                        </div>
                        <div>
                            <Performance />
                            <StockPriceInfo />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}