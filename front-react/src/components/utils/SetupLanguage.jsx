import {translations} from "../../datas/languages/translations.js";
import styles from './SetupLanguage.module.css';
import {useLanguage} from "../../contexts/LanguageContext.jsx";

export default function SetupLanguage() {
    const {language, toggleLanguage} = useLanguage();

    const switchToEn = translations.en[0].buttonText;
    const switchToFr = translations.fr[0].buttonText;

    const buttonText = language === 'fr' ? switchToFr : switchToEn;

    return (
        <>
            <button onClick={toggleLanguage} className={styles.langSwitch}>
                {buttonText}
            </button>
        </>
    )
}