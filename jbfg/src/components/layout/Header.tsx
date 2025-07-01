"use client";

import styles from 'styles/css/header.module.css';
import modalStyles from 'styles/css/headerModal.module.css';
import {useRef, useState, useEffect} from 'react';
import {text} from 'services/headerService';
import Image from 'next/image';
import {scrollAtom} from 'lib/store/scroll';
import {useSetAtom} from 'jotai';

function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const [isMenu, setIsMenu] = useState(false);
    const setScroll = useSetAtom(scrollAtom);

    const scrollComp = (bool: boolean) => {
        const headerRef_cur = headerRef.current as HTMLElement;

        headerRef_cur.classList[bool ? "add" : "remove"](styles.white);
        

        if(!bool) {
            setTimeout(() => {
                headerRef_cur.style.transition = "background-color 0.3s";
            }, 50);
        } else {
            headerRef_cur.style.transition = "transform 0.3s";
        }
        setIsMenu(bool);
    }

    useEffect(() => {
        const headerRef_cur = headerRef.current as HTMLElement;
        let lastScrollY = window.scrollY;
        
        if(window.scrollY >= 250) {
            scrollComp(true);
        }

        const scrollHandler = () => {
            const {scrollY} = window;

            if(scrollY < 250) {
                if(headerRef_cur.className.includes(styles.active)) return;
                scrollComp(false);
            } else if(scrollY >= 250) {
                scrollComp(true);
            }

            if(scrollY >= 600 && scrollY > lastScrollY) {
                headerRef_cur.classList.remove(styles.open);
                headerRef_cur.classList.remove(styles.active);
                headerRef_cur.classList.add(styles.none);
            } else if(scrollY >= 600 && scrollY < lastScrollY) {
                headerRef_cur.classList.remove(styles.none);
                headerRef_cur.classList.add(styles.open);
            }

            lastScrollY = scrollY;
        }

        window.addEventListener("scroll", scrollHandler);

        return (() => {
            window.removeEventListener("scroll", scrollHandler);
        });
    }, []);

    const menuMouseIsEnter = (bool: boolean) => () => {
        const headerRef_cur = headerRef.current as HTMLElement;
        const main = document.getElementById("main") as HTMLElement;
        const {scrollY} = window;

        if(bool) {
            headerRef_cur.classList.add(styles.active);
            main.style.filter = "blur(10px) brightness(0.8)";
        } else {
            headerRef_cur.classList.remove(styles.active);
            main.style.filter = "unset";
        }

        if(scrollY < 250) {
            setIsMenu(bool);
            main.style.filter = "unset";

            if(!bool) {
                headerRef_cur.classList.remove(styles.white);
            }
        }
    }

    const sitemap_onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const modal = document.getElementById("headerModal") as HTMLDivElement;
        const modal_header = modal.firstChild as HTMLDivElement;
        const {innerWidth} = window;
        const html = document.querySelector("html") as HTMLHtmlElement;
        const body = document.querySelector("body") as HTMLBodyElement;
        
        setTimeout(() => {
            if(innerWidth < 1024) {
                modal.classList.remove(modalStyles.empty);
                html.style.overflowY = "hidden";
            }

            modal.style.maxHeight = `${modal.scrollHeight}px`;
            body.style.height = `${modal.scrollHeight - 200}px`;
            body.style.overflowY = "hidden";
            modal_header.style.position = "fixed";
            window.scrollTo(0, 0);
        }, 500);
        
        setScroll(true);
    }

    return (
        <header id="header" className={styles.header} ref={headerRef}>
            <div>
                <div>
                    <a href="#" className={styles.logo}>
                        <Image src={!isMenu ? "/icons/logo.svg" : "/icons/logo_hover.svg"} alt="logo icon" width={160} height={30} priority={true} />
                    </a>
                    <nav>
                        <ul>
                            {Object.values(text).map((item, index) => (
                                <li key={item.title + index} onMouseEnter={menuMouseIsEnter(true)} onMouseLeave={menuMouseIsEnter(false)}>
                                    <a href="#">{item.title}</a>
                                    <div>
                                        <ul>
                                            {Object.values(item.menu).map((menu, index) => (
                                                <li key={menu + index}>
                                                    <a href="#">{menu}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <li><a href="#">Family</a></li>
                            <li>
                                <a href="#">KO</a>
                                <a href="#">EN</a>
                            </li>
                            <li><a href="#" onClick={sitemap_onClick} /></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;