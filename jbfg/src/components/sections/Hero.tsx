"use client";

import styles from 'styles/css/hero.module.css';
import CreditRating from '@ui/CreditRating';
import Report from '@ui/Report';
import IR from '@ui/Ir';
import Performance from '@ui/Performance';
import StockPriceInfo from '@ui/StockPriceInfo';
import {text} from 'services/heroService';
import {useRef, useState, useEffect} from 'react';
import Image from 'next/image';

function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressBtnRef = useRef<HTMLButtonElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [isPlay, setIsPlay] = useState(true);
    const [progressLoop, setProgressLoop] = useState(true);

    const isPlayComp = (bool: boolean) => {
        const videoRef_cur = videoRef.current as HTMLVideoElement;
        const progressBtnRef_cur = progressBtnRef.current as HTMLButtonElement;

        progressBtnRef_cur.classList[bool ? "remove" : "add"](styles.active);
        videoRef_cur[bool ? "play" : "pause"]();
        setProgressLoop(bool);
        setIsPlay(bool);
    }

    useEffect(() => {
        const leftRef_cur = leftRef.current as HTMLDivElement;
        const videoContainer = videoRef.current?.parentElement as HTMLDivElement;
        let scrollMove = window.innerWidth > 1024 ? 0.05 : 0.1;     // 스크롤 이동에 따른 video 이동 값
        let reSizeTimer: NodeJS.Timeout;
        let currentScroll = 0;

        const handleScroll = () => {
            const sectionRef_cur = sectionRef.current as HTMLElement;
            const videoRef_cur = videoRef.current as HTMLVideoElement;
            const scrollPosition = window.scrollY;
            const translateY = Math.min(200, Math.max(0, scrollPosition * scrollMove));   // 스크롤 이동에 따른 video의 최대 이동 값을 구하기 위한 변수 (0 ~ 200)
            const maxScroll = sectionRef_cur.offsetHeight as number;    // sectionRef의 현재 height 값
            const progress = Math.min(scrollPosition / maxScroll, 1);   // 스크롤 이동에 따른 section의 border-bottom-radius 값을 구하기 위한 변수
            const newRadius = 80 * progress;    // border-bottom-radius의 최대 값은 80

            sectionRef_cur.style.borderBottomLeftRadius = `${newRadius}px`;
            sectionRef_cur.style.borderBottomRightRadius = `${newRadius}px`;

            videoRef_cur.style.transform = `translate(0, ${translateY}%)`;

            if(window.innerWidth > 1024 && currentScroll < scrollPosition) {    // 스크롤 이동에 따른 left 반응
                leftRef_cur.classList.add(styles.move);
            } else if(window.innerWidth > 1024 && (currentScroll > scrollPosition && scrollPosition < 66)) {
                leftRef_cur.classList.remove(styles.move);
            }

            currentScroll = scrollPosition;
        }

        const reSizeHandler = () => {
            const {innerWidth} = window;

            clearTimeout(reSizeTimer);          

            reSizeTimer = setTimeout(() => {
                console.log(innerWidth);
                if(innerWidth < 1024) {
                    scrollMove = 0.10;
                } else {
                    scrollMove = 0.05;
                }
            }, 200);
        }

        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    isPlayComp(true);
                } else {
                    isPlayComp(false);
                }
            })
        }, {
            threshold: 0.79
        });

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", reSizeHandler);
        videoObserver.observe(videoContainer);

        return (() => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", reSizeHandler);
            clearTimeout(reSizeTimer);
            videoObserver.unobserve(videoContainer);
        })
    }, []);

    useEffect(() => {
        const videoRef_cur = videoRef.current as HTMLVideoElement;
        const progressBarRef_cur = progressBarRef.current as HTMLDivElement;

        if(!progressLoop) return;
    
        const repeat = () => {
            const currentTime = videoRef_cur.currentTime * 1000;
            const duration = videoRef_cur.duration * 1000;
            const progressWidth = 17.3;

            const progress = (currentTime / duration) * progressWidth;

            if(progress > progressWidth) {
                progressBarRef_cur.classList.add(styles.refresh);
                progressBarRef_cur.style.width = '0';

                setTimeout(() => {
                    progressBarRef_cur.classList.remove(styles.refresh);
                }, 20);
            }

            progressBarRef_cur.style.width = `${progress}rem`;

            if(currentTime <= duration) {
                requestAnimationFrame(repeat);
            }
        }

        repeat();
    }, [progressLoop]);

    const btnOnClick = () => {
        if(isPlay) {
            isPlayComp(false);
        } else {
            isPlayComp(true);
        }
    }

    return (
        <>
            <div className={styles.bg}></div>
            <section ref={sectionRef} className={styles.section}>
                <div className={styles.video}>
                    <video ref={videoRef} width="100%" autoPlay loop muted>
                        <source src="/jbfg/videos/kv.mp4" type="video/mp4" />
                    </video>
                </div>
                <div ref={contentRef} className={styles.content}>
                    <div className={styles.inner}>
                        <div>
                            <div ref={leftRef} className={styles.left}>
                                <div>
                                    {text.intro.map((item, index) => (
                                        <div key={item + index}>
                                            <h1>{item}</h1>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div>
                                        <div ref={progressBarRef}></div>
                                    </div>
                                    <button ref={progressBtnRef} onClick={btnOnClick}>
                                        <Image src={isPlay ? "/icons/pause.svg" : "/icons/play.svg"} alt={isPlay ? "pause" : "play"} width={30} height={30} />
                                    </button>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div>
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
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;