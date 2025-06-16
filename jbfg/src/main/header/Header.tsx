import styles from 'main/style.module.css';
import {images} from 'constants/images';
import {Link} from 'react-router-dom';
import {texts} from 'main/texts';
import {useState, useRef} from 'react';

const txt = texts.header;

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
                <Link to="/" className={styles.logo}>
                    <img src={isMenu ? images.logo_black : images.logo}></img>
                </Link>
                <nav>
                    <ul>
                        {Object.values(txt).map((item, index) => (
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