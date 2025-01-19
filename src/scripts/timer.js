// export function initTimer() {
//     const weddingDate = new Date('2025-07-26T00:00:00');
//     const timerElement = document.getElementById('timer');
//
//     function updateDisplay() {
//         const now = new Date();
//         const difference = weddingDate - now;
//
//         if (!timerElement) return;
//
//         // Si la date est passée
//         if (difference < 0) {
//             timerElement.innerHTML = "Jour J passé !";
//             return;
//         }
//
//         // Calculs
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//
//         // Mise en forme du HTML avec les nombres et libellés
//         const content = `
//             <div class="countdown-item">
//                 <span class="countdown-number">${days}</span>
//                 <span class="countdown-label">jours</span>
//             </div>
//             <div class="countdown-item">
//                 <span class="countdown-number">${hours}</span>
//                 <span class="countdown-label">heures</span>
//             </div>
//         `;
//
//         // Affichage selon le nombre de jours
//         if (days === 0) {
//             if (hours === 0) {
//                 timerElement.innerHTML = "Jour J !";
//             } else {
//                 timerElement.innerHTML = content;
//             }
//         } else if (days === 1) {
//             timerElement.innerHTML = content;
//         } else {
//             timerElement.innerHTML = content;
//         }
//     }
//
//     // Mise à jour initiale
//     updateDisplay();
//
//     // Mise à jour toutes les heures
//     setInterval(updateDisplay, 1000 * 60 * 60);
// }