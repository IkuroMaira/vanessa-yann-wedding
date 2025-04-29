import React, {useState} from "react";
import { Link } from "react-scroll";
import styles from "./Navigation.module.css";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../datas/languages/translations.js";

export default function Navigation() {
    const { language } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navigation}>
            <button
                className={styles.burgerButton}
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ''}`}></div>
                <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ''}`}></div>
                <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ''}`}></div>
            </button>

            <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
                <li className={styles.navItem}>
                    <Link
                        to="hero-section"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass={styles.active}
                        onClick={closeMenu}
                    >
                        Save The Date
                    </Link>
                </li>

                <li className={styles.navItem}>
                    <Link
                        to="invit-section"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass={styles.active}
                        onClick={closeMenu}
                    >
                        Invitation
                    </Link>
                </li>

                <li className={styles.navItem}>
                    <Link
                        to="info-section"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass={styles.active}
                        onClick={closeMenu}
                    >
                        {language === 'fr' ? 'Info' : 'Infos'}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}