import React, {createContext, useContext, useEffect, useState} from "react";

export const LanguageContext = createContext({
    language: 'en',
    toggleLanguage: () => {}
});

export function useLanguage() { // le suffixe 'use' permet d'indiquer que c'est un hook
 return useContext(LanguageContext);
}

// Autre option
// function useLanguage() { // le suffixe 'use' permet d'indiquer que c'est un hook
//     const {language, toggleLanguage} = useLanguage(LanguageContext);
//     return {
//         isFr: language === 'fr',
//         isEn: language === 'en',
//         language,
//         toggleLanguage
//     }
// }

export function LanguageContextProvider ({children}) {
    const [language, setLanguage] = useState(localStorage.getItem('preferredLanguage') || 'fr');

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    }

    useEffect(() => {
        localStorage.setItem('preferredLanguage', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{
            language,
            toggleLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider