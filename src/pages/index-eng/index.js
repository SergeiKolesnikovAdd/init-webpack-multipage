import "./index.hbs";
import "./index.scss";
/* import common js */
import "@/common";
/* import partials and lib */

/* Your JS Code goes here */
import { worksHeight } from '../../js/components/works-height';
import { deviantCircle } from '../../js/utils/ring-animation';
import { header } from '../../js/utils/header';
import { linkWrapper } from '../../js/utils/link-wrapper';
import { preloader } from '../../js/components/preloader';
import { initBurgerMenu } from '../../js/components/burger-menu';
import { checkTouchDevice } from '../../js/utils/adaptive';
import { initClock } from '../../js/utils/clock';
import { initScrollbar } from '../../js/components/scrollbars';
import { initVHSize } from '../../js/components/vh-size';

preloader();

window.addEventListener('DOMContentLoaded', () => {
  const changeColorOfHeader = header();
  const setHeightOfWorksBlock = worksHeight();
  const setRotateX = deviantCircle();

  // initClock();
  checkTouchDevice();
  linkWrapper();
  initBurgerMenu();
  initVHSize();

  function scrollEvent() {
    changeColorOfHeader();
    setHeightOfWorksBlock();
    setRotateX();
  }

  initScrollbar(scrollEvent);
});
