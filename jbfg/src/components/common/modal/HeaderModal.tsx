"use client";

import 'styles/globals.css';
import styles from 'styles/css/headerModal.module.css';
import {text} from 'services/headerService';
import Image from 'next/image';
import {useRef, useState, useEffect} from 'react';
import {scrollAtom} from 'lib/store/scroll';
import {useAtom} from 'jotai';

export function HeaderModal() {
    const modalRef = useRef<HTMLDivElement>(null);
    const txtKey = Object.keys(text);
    const [scroll, setScroll] = useAtom(scrollAtom);
    const scrollRef = useRef(scroll);
    const [isMobileSize, setIsMobileSize] = useState(false);
    const [m_menuSelectNum, setM_menuSelectNum] = useState(0);
    const [m_menuSelect, setM_menuSelect] = useState(text[txtKey[m_menuSelectNum]]);
    const mobileSize = 1024;

    useEffect(() => {
        const modalRef_cur = modalRef.current as HTMLDivElement;

        const handleResize = () => {
            const {innerWidth} = window;
            const html = document.querySelector("html") as HTMLHtmlElement;
            const body = document.querySelector("body") as HTMLBodyElement;

            if(scrollRef.current && innerWidth > mobileSize) {
                html.style.overflowY = "auto";
                modalRef_cur.style.maxHeight = `${modalRef_cur.scrollHeight}px`;
                body.style.height = `${modalRef_cur.scrollHeight - 10}px`;
                setIsMobileSize(false);
            } else if(scrollRef.current && innerWidth <= mobileSize) {
                html.style.overflowY = "hidden";
                window.scrollTo(0, 0);
                modalRef_cur.style.maxHeight = `${modalRef_cur.scrollHeight}px`;
                body.style.height = `${modalRef_cur.scrollHeight - 10}px`;
                setIsMobileSize(true);
            }
        }

        if(modalRef_cur.offsetHeight === 0) {
            modalRef_cur.classList.add(styles.empty);
        }
 
        handleResize();

        window.addEventListener("resize", handleResize);

        return (() => {
            window.addEventListener("resize", handleResize);
        })
    }, []);

    useEffect(() => {
        const {innerWidth} = window;

        if(innerWidth > mobileSize) {
            setIsMobileSize(false);
        } else if(innerWidth < mobileSize) {
            setIsMobileSize(true);
        }
        scrollRef.current = scroll;
    }, [scroll]);

    const close_onClick = (e: React.MouseEvent) => {
        e.preventDefault();

        const modalRef_cur = modalRef.current as HTMLDivElement;
        const modal_header = modalRef_cur.firstChild as HTMLDivElement;
        const html = document.querySelector("html") as HTMLHtmlElement;
        const body = document.querySelector("body") as HTMLBodyElement;


        if(window.innerWidth <= mobileSize) {
            modalRef_cur.classList.add(styles.empty);
        }

        html.style.overflowY = "auto";
        body.style.height = "auto";
        modalRef_cur.style.maxHeight = "0";

        setTimeout(() => {
            modal_header.style.position = "unset";
        }, 600);

        setScroll(false);
    }

    const mobileTitle_onClick = (index: number) => (e: React.MouseEvent) => {
        e.preventDefault();

        setM_menuSelectNum(index);
        setM_menuSelect(text[txtKey[index]]);
    }

    const mobileMenu_onClick = (e: React.MouseEvent) => {
        const img = e.currentTarget.querySelector("img") as HTMLImageElement;
        const aTag = e.currentTarget as HTMLAnchorElement; 
        const target = e.target as EventTarget;
        const section = modalRef.current?.lastChild as HTMLDivElement;

        if(!img || target instanceof HTMLSpanElement) {
            window.location.href = aTag.href;
            return;
        } else {
            aTag.classList.toggle(styles.active);
            section.style.setProperty("--after-height", `${section.scrollHeight}px`);
        }
    }

    return (
        <div id="headerModal" className={styles.headerModal} ref={modalRef}>
            <div className={styles.header}>
                {!isMobileSize ? 
                    <a href="#">
                        <Image src="/icons/logo_hover.svg" alt="modal_logo" width={160} height={30} priority={true} />
                    </a>
                    :
                    <div>
                        <Image src="/icons/sitemap.svg" alt="sitemap" width={30} height={30} />
                        <div>
                            <a href="#">KO</a>
                            <a href="#">EN</a>
                        </div>
                    </div>
                }
                <a href="#" onClick={close_onClick}>닫기</a>
            </div>
            <div className={styles.section}>
                {!isMobileSize ? 
                    <div>
                        <nav>
                            {Object.values(text).map((item, itemIndex) => ( 
                                <ul key={item.title + itemIndex} className={styles.wrap}>
                                    <li><h2>{item.title}</h2></li>
                                    <div>
                                        {Object.values(item.menu).map((menu, menuIndex) => (
                                            <ul key={menu + menuIndex} className={styles.menuWrap}>
                                                <li><a href="#">{menu}</a></li>
                                                {Object.values(item.subMenu[menuIndex]).map((subMenu, subMenuIndex) => (
                                                    <ul key={subMenu + subMenuIndex} className={styles.subMenuWrap}>
                                                        <li><a href="#">{subMenu}</a></li>
                                                    </ul>
                                                ))}
                                            </ul>
                                        ))}
                                    </div>
                                </ul>
                            ))}
                        </nav>
                    </div>
                    :
                    <div>
                        <nav>
                            <ul>
                                {Object.values(text).map((item, index) => (
                                    <li key={item.title + index}>
                                        <a href="#" onClick={mobileTitle_onClick(index)}
                                            style={{color: index === m_menuSelectNum ? "#0A31A8" : "#666666"}}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <nav>
                            {m_menuSelect.menu.map((menu, menuIndex) => {
                                const subMenuArr = m_menuSelect.subMenu[menuIndex];

                                return (
                                    <ul key={menu + menuIndex}>
                                        <li>
                                            <a href="#" onClick={mobileMenu_onClick}>
                                                <span>{menu}</span>
                                                {subMenuArr.length !== 0 ?
                                                    <Image src="/icons/chevron-d.svg" alt="chevron-d" width={30} height={30} />
                                                    : null
                                                }
                                            </a>
                                            {subMenuArr.length !== 0 ? 
                                                <ul>
                                                    {subMenuArr.map((subMenu, subMenuIndex) => (
                                                        <li key={subMenu + subMenuIndex}>
                                                            <a href="#">{subMenu}</a>
                                                        </li>
                                                    ))}
                                                </ul> : null
                                            }
                                        </li>
                                    </ul>
                                );
                            })}
                        </nav>
                    </div>
                }
            </div>
        </div>
    );
}