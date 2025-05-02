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
                        <h3 className={styles.titleProgramme}>Le programme</h3>
                        <p className={styles.planning}>15h00 : Rendez-vous à la mairie</p>
                        <p className={styles.planning}>15h40 : Départ pour le Pavillon d’Aurabelle</p>
                        <p className={styles.planning}>(environ 1h de route)</p>
                        <p className={styles.planning}>16h30 : Arrivée au Pavillon</p>
                        <p className={styles.planning}>17h30 : Cérémonie franco-indienne</p>
                        <p className={styles.planning}>20h00 : Début de la soirée</p>
                        <p className={styles.planning}>21h00 : Dîner</p>
                        <p className={styles.planning}>(Les enfants pourront être servis plus tôt)</p>
                    </div>

                    <div className={styles.additionalInfo}>
                        <p className={styles.outfitParagraph}>
                            Merci de prévoir deux tenues : une pour les cérémonies et une pour la soirée. Aucune couleur spécifique n'est demandée (sauf pour les témoins).
                        </p>

                        <p className={styles.brunchParagraph}>
                            Le brunch au pavillon d'Aurabelle tout comme le logement est compris et gratuit - (chambre de 6 personnes avec toilettes et salle de bain ).
                        </p>

                        <p className={styles.contactParagraph}>
                            Merci de nous contacter pour que nous puissions vous aider si vous n'êtes pas véhiculés ou pour toutes autres questions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}