import React from "react";
import {useLanguage} from "../../contexts/LanguageContext.jsx";
import { translations } from "../../datas/languages/translations";
import styles from "./InfoSection.module.css";


export default function InfoSection() {
    const { language } = useLanguage();

    return (
        <>
            <div className={styles.infoContainer}>
                <div className={styles.infoOverlay}>
                    <div className={styles.planningContainer}>
                        <h3 className={styles.titleProgramme}>{translations[language][0].info.titleProgramme}</h3>
                        <p className={styles.planning}>{translations[language][0].info.planningLine1}</p>
                        <p className={styles.planning}>{translations[language][0].info.planningLine2}</p>
                        <p className={styles.planning}>{translations[language][0].info.planningLine3}</p>
                        <p className={styles.planning}>{translations[language][0].info.planningLine4}</p>
                        <p className={styles.planning}>{translations[language][0].info.planningLine5}</p>
                        <p className={styles.planning}>{translations[language][0].info.planningLine6}</p>
                        <p className={styles.planning}>{translations[language][0].info.planningLine7}</p>
                        <p className={styles.planning}>{translations[language][0].info.planningLine8}</p>
                    </div>

                    <div className={styles.additionalInfo}>
                        <p className={styles.outfitParagraph}>{translations[language][0].info.merci}</p>
                        <p className={styles.brunchParagraph}>{translations[language][0].info.brunch}</p>
                        <p className={styles.contactParagraph}>{translations[language][0].info.contact}</p>
                    </div>
                </div>
            </div>
        </>
    );
}