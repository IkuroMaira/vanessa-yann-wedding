import React from "react";
import styles from './AcknowledgmentSection.module.css'

export default function AcknowledgmentSection() {
    return (
        <div className={styles.acknowledgmentContainer}>
            <div className={styles.acknowledgmentParagraph}>
                Nous vous remercions de partager notre bonheur, que ce soit par votre présence ou à travers vos vœux chaleureux, en ce jour si important.
            </div>
        </div>
    )
}