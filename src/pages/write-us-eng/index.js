import "./index.hbs";
import "./index.scss";

import { linkWrapper } from '../../js/utils/link-wrapper';
import { initBurgerMenu } from '../../js/components/burger-menu';
import { initScrollbar } from '../../js/components/scrollbars';
import { initVHSize } from '../../js/components/vh-size';



window.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  linkWrapper();
  initVHSize();

  initScrollbar();
});
