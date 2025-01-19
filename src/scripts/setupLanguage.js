import { languages } from '../datas/language.js';

// Vous pouvez accéder aux thèmes en français
const translateFR = languages.fr;
console.log(translateFR);

// Ou aux thèmes en anglais
const translateEN = languages.en;
// console.log(translateEN);

console.log(translateFR[0].title.save);

export function initLanguageSwitch(languages) {
    const langLink = document.querySelector('.lang-switch');
    if (!langLink) return;

    langLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Ici votre logique pour changer de langue
        console.log('Changement de langue');
    });
}