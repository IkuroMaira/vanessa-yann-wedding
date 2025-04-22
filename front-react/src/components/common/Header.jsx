import React from "react";
import styles from "./Header.module.css";
import Timer from "../utils/Timer.jsx";
import SetupLanguage from "../utils/SetupLanguage.jsx";
import image from '../../assets/icons/icon-header-lavender.png'

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerContent}>
                        <div className={styles.timer}>
                            <Timer />
                        </div>

                        <img src={image} alt="lavender-icon" className={styles.icon}/>

                        <div className={styles.langSwitch}>
                            <SetupLanguage />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}