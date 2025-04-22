import React, {useEffect, useState} from "react";
import {useLanguage} from "../../contexts/LanguageContext.jsx";
import {translations} from "../../datas/languages/translations.js";
import styles from "./Timer.module.css"

export default function Timer() {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [message, setMessage] = useState('');
    const [isSpecialDay, setIsSpecialDay] = useState(false);

    const weddingDate = new Date("2025-07-26T15:00:00");

    const {language} = useLanguage();
    const timerText = translations[language][0].timer;

    useEffect(() => {
        function updateDisplay() {
            const now = new Date();
            const difference = weddingDate - now;

            const daysCalculated = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hoursCalculated = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            if (difference < 0) {
                setMessage(timerText.thanks);
                setIsSpecialDay(true);
                setDays(0);
                setHours(0);
            } else if (daysCalculated === 0 && hoursCalculated === 0) {
                setMessage(timerText.weddingDay);
                setIsSpecialDay(true);
                setDays(0);
                setHours(0);
            } else if (daysCalculated === 1) {
                setMessage(timerText.weddingEve);
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
                    <span className={styles.timer}>{timerText.loading}</span>
                )}
            </div>
        </>
    )
}