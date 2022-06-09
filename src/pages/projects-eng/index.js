import "./index.hbs";
import "./index.scss";

import { worksHeight } from '../../js/components/works-height';
import { deviantCircle } from '../../js/utils/ring-animation';
import { header } from '../../js/utils/header';
import { worksFilter } from '../../js/components/works-filter';
import { linkWrapper } from '../../js/utils/link-wrapper';
import { initBurgerMenu } from '../../js/components/burger-menu';
import { checkTouchDevice } from '../../js/utils/adaptive';
import { initScrollbar } from '../../js/components/scrollbars';
import { initVHSize } from '../../js/components/vh-size';

window.addEventListener('DOMContentLoaded', () => {
  const changeColorOfHeader = header();
  const setHeightOfWorksBlock = worksHeight();
  const setRotateX = deviantCircle();

  checkTouchDevice();
  initBurgerMenu();
  linkWrapper();
  initVHSize();
  worksFilter(setHeightOfWorksBlock);

  function scrollEvent() {
    changeColorOfHeader();
    setHeightOfWorksBlock();
    setRotateX();
  }

  initScrollbar(scrollEvent);
});
