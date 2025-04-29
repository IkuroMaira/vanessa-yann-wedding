import React from "react";
import {useLanguage} from "../../contexts/LanguageContext.jsx";
import { translations } from "../../datas/languages/translations";
import styles from "./InfoSection.module.css";


export default function InfoSection() {
    const { language } = useLanguage();

    return (
        <>
            <div className={styles.infoContainer}>
                <div className={styles.infoOverlay}></div>
                <div className={styles.infoContainer}></div>
            </div>
        </>
    );
}