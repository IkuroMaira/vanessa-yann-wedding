import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Timer from "../utils/Timer.jsx";
import SetupLanguage from "../utils/SetupLanguage.jsx";
import Navigation from "./Navigation.jsx";
import image from '../../assets/icons/icon-header-lavender.png';
import { Events } from "react-scroll";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        Events.scrollEvent.register('begin', () => {});
        Events.scrollEvent.register('end', () => {});
        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <div className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
            <div className={styles.headerContainer}>
                <div className={styles.iconContainer}>
                    <img src={image} alt="lavender-icon" className={styles.icon}/>
                </div>

                <div className={styles.headerContent}>
                    <div className={styles.leftSection}>
                        <Timer />
                    </div>

                    <div className={styles.centerPlaceholder}></div>

                    <div className={styles.rightSection}>
                        <Navigation />
                        <div className={styles.langSwitch}>
                            <SetupLanguage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}