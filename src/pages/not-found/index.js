import './index.scss';

import { linkWrapper } from '../../js/utils/link-wrapper';
import { initBurgerMenu } from '../../js/components/burger-menu';
import { checkTouchDevice } from '../../js/utils/adaptive';
import { initScrollbar } from '../../js/components/scrollbars';
import { initVHSize } from '../../js/components/vh-size';

window.addEventListener('DOMContentLoaded', () => {
  checkTouchDevice();
  initBurgerMenu();
  linkWrapper();
  initVHSize();

  initScrollbar();
});
