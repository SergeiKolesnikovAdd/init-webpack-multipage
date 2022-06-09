import "./index.hbs";
import './index.scss';
/* import common js */
import "@/common";


import { worksHeight } from '../../js/components/works-height';
import { deviantCircle } from '../../js/utils/ring-animation';
import { header } from '../../js/utils/header';
import { linkWrapper } from '../../js/utils/link-wrapper';
import { themeController } from '../../js/components/theme-controller';
import { ourProfiles } from '../../js/utils/our-profiles';
import { initBurgerMenu } from '../../js/components/burger-menu';
import { checkTouchDevice } from '../../js/utils/adaptive';
// import { initClock } from '../../js/utils/clock';
import { initScrollbar } from '../../js/components/scrollbars';
import { initVHSize } from '../../js/components/vh-size';

window.addEventListener('DOMContentLoaded', () => {
  const changeColorOfHeader = header();
  const setHeightOfWorksBlock = worksHeight();
  const themeSeparator = document.querySelector('.about-first-section');
  const themeSetter = themeController(themeSeparator);
  const setRotateX = deviantCircle();

  checkTouchDevice();
  linkWrapper();
  // initClock();
  ourProfiles();
  initBurgerMenu();
  initVHSize();

  function scrollEvent() {
    themeSetter();
    changeColorOfHeader();
    setHeightOfWorksBlock();
    setRotateX();
  }

  initScrollbar(scrollEvent);
});