import { languages } from '../datas/language.js';

// Accés à la version en français
const translateFR = languages.fr;
console.log(translateFR);

// Accés à la version en anglais
const translateEN = languages.en;
// console.log(translateEN);

console.log(translateFR[0].title.save);

export function initLanguageSwitch(languages) {
    const langLink = document.querySelector('.lang-switch');
    if (!langLink) return;

    langLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Changement de langue');
    });
}