import React from "react";
import styles from './Polaroid.module.css';
import imgCouple from "../../assets/photos/couple-stare.jpg"

export default function Polaroid() {
    return (
        <div className={styles.polaroidContainer}>
            <div className={styles.polaroid}>
                <img src={imgCouple} alt="Photo des fiancés 1"/>
            </div>
        </div>
    )
}