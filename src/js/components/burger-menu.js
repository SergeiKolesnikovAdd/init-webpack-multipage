import { switchToWhite, switchToBlack } from '../utils/header';

export const initBurgerMenu = () => {
  const burgerBtns = document.querySelectorAll('.burger-btn');
  const burgerMenu = document.querySelector('.burger-menu');
  let isMenuOpen = false;

  burgerBtns.forEach(item => item.addEventListener('click', burgerBtnHandler));

  function burgerBtnHandler() {
    isMenuOpen ? closeMenu() : openMenu();
  }

  function openMenu() {
    burgerBtns.forEach(item => item.classList.add('burger-btn_active'));
    burgerMenu.classList.add('burger-menu_active');
    isMenuOpen = true;
  }

  function closeMenu() {
    burgerBtns.forEach(item => item.classList.remove('burger-btn_active'));
    burgerMenu.classList.remove('burger-menu_active');
    setTimeout(() => (isMenuOpen = false), 600);
  }
};
