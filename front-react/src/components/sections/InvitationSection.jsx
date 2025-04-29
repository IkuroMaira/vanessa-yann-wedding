import React from "react";
import {useLanguage} from "../../contexts/LanguageContext.jsx";
import { translations } from "../../datas/languages/translations";
import styles from "./InvitationSection.module.css";

export default function InvitationSection() {
    const { language } = useLanguage();

    return (
        <div className={styles.invitContainer}>
            {/*<h2 className={styles.sectionTitle}>{language === 'fr' ? 'Notre invitation' : 'Our invitation'}</h2>*/}
            <p className={styles.invitText}>
                {translations[language][0].invitationText.paragraph1}
            </p>
            <p className={styles.invitText}>
                {translations[language][0].invitationText.paragraph2}
            </p>
            <div className={styles.formReminderBox}>
                {translations[language][0].formReminder.text}
            </div>
        </div>
    );
}