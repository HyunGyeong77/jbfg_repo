"use client";

import styles from 'styles/header.module.css';
import {useRef, useState} from 'react';
import {text} from 'services/headerService';

export function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const [isMenu, setIsMenu] = useState(false);

    const menuMouseIsEnter = (bool: boolean) => () => {
        const headerRef_cur = headerRef.current as HTMLElement;

        bool ? headerRef_cur.classList.add(styles.active) : headerRef_cur.classList.remove(styles.active);
        setIsMenu(bool);
    }

    return (
        <header className={styles.header} ref={headerRef}>
            <div>
                <a href="#" className={styles.logo}>
                    <img src={!isMenu ? "/icons/logo.svg" : "/icons/logo_hover.svg"}></img>
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
                        <li><a href="#">사이트맵</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}