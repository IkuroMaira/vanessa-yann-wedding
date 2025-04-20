import React from "react";
import styles from "./Timer.module.css"

function Timer() {

    return (
        <>
            <div className={styles.timerContainer}>
                <span className={styles.timer}>Chargement...</span>
            </div>
        </>
    )
}

export default Timer