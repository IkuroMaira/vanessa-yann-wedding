import { translations } from '../datas/translations.js';

let currentLang = 'fr';

export function initLanguageSwitch() {
    const langLink = document.querySelector('.lang-switch');
    // console.log(langLink);
    if (!langLink) return;

    updateButtonText(langLink);

    langLink.addEventListener('click', (e) => {
        e.preventDefault();

        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        // console.log('La langue par défaut', currentLang);

        updateButtonText(langLink);
        updateTextPage(currentLang);
    });
}

function updateButtonText(button) {
    const targetLang = currentLang === 'fr' ? `${translations.en[0].buttonText}` : `${translations.fr[0].buttonText}`;
    button.textContent = `${targetLang}`;
    // console.log(targetLang);
}

function updateTextPage(language) {
    if (language === 'fr') {
        // console.log("On change la langue en français !", language);
        // console.log(translations.fr[0].buttonText);

        document.getElementById('save').textContent = translations.fr[0].title.save;
        document.getElementById('the').textContent = translations.fr[0].title.the;
        document.getElementById('date').textContent = translations.fr[0].title.date;
        document.getElementById('line1').textContent = translations.fr[0].weddingInfo.line1;
        document.getElementById('line2').textContent = translations.fr[0].weddingInfo.line2;
    } else if (language === 'en') {

    }
}