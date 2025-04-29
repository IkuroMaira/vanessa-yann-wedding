import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../datas/languages/translations";
import styles from "./WeddingMap.module.css";

export default function WeddingMap() {
    const { language } = useLanguage();

    return (
        <div className={styles.mapContainer}>
            <h2 className={styles.mapTitle}>
                {translations[language][0].mapSection?.title || "Lieux du mariage"}
            </h2>

            <div className={styles.mapsContainer}>
                <div className={styles.planningContainer}>
                    <h3 className={styles.locationTitle}>
                        Mairie de Bouc-Bel-Air
                        <span>{translations[language][0].mapSection?.ceremonyInfo || "Cérémonie civile"}</span>
                    </h3>
                    <p className={styles.planning}>
                        Le programme
                        15h00 : Rendez-vous à la mairie
                        15h40 : Départ pour le Pavillon d’Aurabelle
                        (environ 1h de route)
                        16h30 : Arrivée au Pavillon
                        17h30 : Cérémonie franco-indienne
                        20h00 : Début de la soirée
                        21h00 : Dîner
                        (Les enfants pourront être servis plus tôt)
                    </p>
                </div>

                <div className={styles.mapWrapper}>
                    <div className={styles.embedMap}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d184932.52086067433!2d5.47038299882699!3d43.594658879736286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x12c9934014e9e0d7%3A0x7544ba6afc8d59c4!2sMairie%20de%20Bouc%20Bel%20Air%2C%20Rue%20de%20l&#39;H%C3%B4tel%20de%20ville%2C%2013320%20Bouc-Bel-Air!3m2!1d43.4511872!2d5.4135767999999995!4m5!1s0x12cbd0e71899a5b7%3A0xf577158f94f951f4!2sLe%20Pavillon%20d&#39;Aurabelle%2C%2004800%20Gr%C3%A9oux-les-Bains!3m2!1d43.7385784!2d5.8629725!5e0!3m2!1sfr!2sfr!4v1745887939436!5m2!1sfr!2sfr"
                            width="800" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}