export function initLanguageSwitch() {
    const langLink = document.querySelector('.lang-switch');
    if (!langLink) return;

    langLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Ici votre logique pour changer de langue
        console.log('Changement de langue');
    });
}