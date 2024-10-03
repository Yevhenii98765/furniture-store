const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
const mobileModal = document.querySelector('.mobile-modal-menu');
const mobileMenu = document.querySelector('.mobile-menu-list');
const mobileMenuItems = document.querySelector('.mobile-menu-item');
const mobileLink = document.querySelector('.mobile-modal-link');
const svgIcon = document.querySelector('.svg-burger use'); // Элемент <use> внутри SVG

openModalBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
  mobileModal.classList.toggle('is-hidden');

  toggleMenuIcon(); // Меняем иконку
  closeModalBtn.addEventListener('click', onClosedModal);
  mobileMenu.addEventListener('click', onMobileItemsClick);
  mobileLink.addEventListener('click', onCloseLink);
}

function onClosedModal() {
  mobileModal.classList.toggle('is-hidden');

  toggleMenuIcon(); // Меняем иконку
  closeModalBtn.removeEventListener('click', onClosedModal);
}

function onMobileItemsClick() {
  mobileModal.classList.toggle('is-hidden');

  toggleMenuIcon(); // Меняем иконку
  mobileMenu.removeEventListener('click', onMobileItemsClick);
}

function onCloseLink() {
  mobileModal.classList.toggle('is-hidden');

  toggleMenuIcon(); // Меняем иконку
  mobileLink.removeEventListener('click', onCloseLink);
}

// Функция для смены иконки
function toggleMenuIcon() {
  if (mobileModal.classList.contains('is-hidden')) {
    svgIcon.setAttribute('href', '../img/icons.svg#icon-menu'); // Иконка меню  /js-test-layout/assets/icons-BjYJDn2L.svg#icon-menu // ../img/icons.svg#icon-menu
    //https://yevhenii98765.github.io/js-test-layout/assets/icons-BjYJDn2L.svg#icon-menu
  } else {
    svgIcon.setAttribute('href', '../img/icons.svg#icon-cross'); // Иконка закрытия /js-test-layout/assets/icons-BjYJDn2L.svg#icon-cross  // ../img/icons.svg#icon-cross
    //https://yevhenii98765.github.io/js-test-layout/assets/icons-BjYJDn2L.svg#icon-cross
  }
}
