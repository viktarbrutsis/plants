
console.log('1. Вёрстка валидная +10 \n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48 \n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20 ');
const burger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeBtn = document.querySelector('.menu__close'),
      links = document.querySelectorAll('.modal-link');

burger.addEventListener('click', () => {
    openModal();
});
closeBtn.addEventListener('click', () => {
    closeModal();
});
links.forEach(item => {
    item.addEventListener('click', closeModal);
});

menu.addEventListener('click', (e) => {
    if(e.target === menu) {
        closeModal();
    }
});
// document.addEventListener('click', () => {
//     if (menu.classList.contains('active')) {
//         closeModal();
//     }
// });
function openModal() {
    menu.classList.add('active');
}
function closeModal() {
    menu.classList.remove('active');
}