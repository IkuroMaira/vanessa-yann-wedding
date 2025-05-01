import React from "react";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import { translations } from "../../datas/languages/translations.js";
import styles from "./HeroSection.module.css";
import { Link } from "react-scroll";

export default function HeroSection() {
    const { language } = useLanguage();

    return (
        <div className={styles.heroContainer}>
            <div className={styles.overlay}></div>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <span className={styles.save}>{translations[language][0].title.save}</span>
                    <span className={styles.the}>{translations[language][0].title.the}</span>
                    <span className={styles.date}>{translations[language][0].title.date}</span>
                </div>

                <div className={styles.weddingInfo}>
                    <div className={styles.pourLeMariage}>{translations[language][0].weddingInfo.line1}</div>
                    <div className={styles.names}>
                        <p className={styles.paragraphWedding}>{translations[language][0].weddingInfo.line2.paragraphV}</p>
                        <p className={styles.paragraphWedding}>{translations[language][0].weddingInfo.line2.paragraphEt}</p>
                        <p className={styles.paragraphWedding}>{translations[language][0].weddingInfo.line2.paragraphY}</p>
                    </div>
                    <div className={styles.weddingDate}>{translations[language][0].weddingInfo.weddingDate}</div>
                    <div className={styles.location}>{translations[language][0].weddingInfo.location}</div>
                </div>

                <Link
                    to="invit-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.scrollIndicator}
                >
                    <span className={styles.scrollArrow}>↓</span>
                </Link>
            </div>
        </div>
    );
}