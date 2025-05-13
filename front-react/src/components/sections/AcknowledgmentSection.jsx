import React from "react";
import styles from './AcknowledgmentSection.module.css'
import {useLanguage} from "../../contexts/LanguageContext.jsx";
import { translations } from "../../datas/languages/translations";

export default function AcknowledgmentSection() {
    const { language } = useLanguage();

    return (
        <div className={styles.acknowledgmentContainer}>
            <div className={styles.acknowledgmentParagraph}>
                {translations[language][0].thank}
            </div>
        </div>
    )
}