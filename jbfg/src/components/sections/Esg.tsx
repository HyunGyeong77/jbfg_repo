"use client";

import styles from 'styles/css/esg.module.css';
import {text} from 'services/esgService';
import EsgComp from '@ui/EsgComp';
import Image from 'next/image';

function Esg() {

    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.bg_icon}>
                    {Array(3).fill(null).map((_, index) => (
                        <Image key={index} src={`/icons/esg-bg-item${index + 1}.svg`} alt={`esg-bg-item${index + 1}`} width={1000} height={1000} />
                    ))}
                </div>
                <div className={styles.inner}>
                    <div>
                        <div className={styles.left}>
                            <h3>{text.title}</h3>
                            <div>
                                <p>{text.intro[0]}<br />{text.intro[1]}</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <div>
                                    <EsgComp textType={text.report} img={"/images/esg-icon1.png"} />
                                    <EsgComp textType={text.evaluation} img={"/images/esg-icon2.png"} />
                                </div>
                                <div>
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