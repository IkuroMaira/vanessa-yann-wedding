import React, {useEffect, useState} from "react";
import styles from "./Timer.module.css"

function Timer() {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [message, setMessage] = useState('');
    const [isSpecialDay, setIsSpecialDay] = useState(false);

    const weddingDate = new Date("2025-07-26T00:00:00"); // Changer l'heure dès que je connais l'heure de la cérémonie

    useEffect(() => {
        function updateDisplay() {
            const now = new Date();
            const difference = weddingDate - now;

            const daysCalculated = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hoursCalculated = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            if (difference < 0) {
                setMessage("Merci d'avoir participé à cette célébration.");
                setIsSpecialDay(true);
                setDays(0);
                setHours(0);
            } else if (daysCalculated === 0 && hoursCalculated === 0) {
                setMessage("JOUR J !");
                setIsSpecialDay(true);
                setDays(0);
                setHours(0);
            } else if (daysCalculated === 1) {
                setMessage("Veille du mariage !");
                setIsSpecialDay(true);
                setDays(0);
                setHours(0);
            } else {
                setMessage('');
                setIsSpecialDay(false);
                setDays(daysCalculated);
                setHours(hoursCalculated);
            }
        }

        updateDisplay();
        setInterval(updateDisplay, 1000 * 60 *60);
    }, []);

    console.log("days ", days);
    console.log("hours ", hours);

    return (
        <>
            <div className={styles.timerContainer}>
                { days !== undefined ? (
                    isSpecialDay ? (
                        <div>{message}</div>
                    ) : (
                        <>
                            <div className={styles.countdownItem}>
                                <span className={styles.countdownNumber}>{days}</span>
                                <span className={styles.countdownLabel}>jours</span>
                            </div>
                            <div className={styles.countdownItem}>
                                <span className={styles.countdownNumber}>{hours}</span>
                                <span className={styles.countdownLabel}>heures</span>
                            </div>
                        </>
                    )
                ) : (
                    <span className={styles.timer}>Chargement...</span>
                )}
            </div>
        </>
    )
}

export default Timer