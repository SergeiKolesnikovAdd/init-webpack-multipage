const _header = document.querySelector('.header');
const _overflowWrapperBlack = _header.querySelector(
  '.header__overflow-wrapper_black'
);
const _overflowWrapperWhite = _header.querySelector(
  '.header__overflow-wrapper_white'
);
const _changeColorBlocks = document.querySelectorAll('[data-header-color]');
let headerHeight;

export const header = () => {
  function initSizesOfHeader() {
    headerHeight = setHeaderHeight(_header);
    _overflowWrapperBlack.style.maxHeight = headerHeight + 'px';
    _overflowWrapperWhite.style.maxHeight = headerHeight + 'px';
  }

  function changeColor() {
    let currentBlock = false;
    let nextBlock = false;
    let i = 0;

    while (i < _changeColorBlocks.length) {
      const itemRect = _changeColorBlocks[i].getBoundingClientRect();

      if (itemRect.bottom > 0 && itemRect.top < 0) {
        currentBlock = {
          top: itemRect.top,
          bottom: itemRect.bottom,
          color: _changeColorBlocks[i].dataset.headerColor
        };
      }

      if (itemRect.top > 0) {
        nextBlock = {
          top: itemRect.top,
          bottom: itemRect.bottom,
          color: _changeColorBlocks[i].dataset.headerColor
        };
      }

      if (currentBlock && nextBlock) {
        break;
      }

      i++;
    }

    if (currentBlock.color === 'black' && nextBlock.color !== 'black') {
      switchToWhite(currentBlock.bottom);
    } else if (currentBlock.color === 'white' && nextBlock.color !== 'white') {
      switchToBlack(currentBlock.bottom);
    } else if (currentBlock.color === 'white' && nextBlock.color === 'white') {
      switchToBlack(headerHeight);
    } else if (currentBlock.color === 'black' && nextBlock.color === 'black') {
      switchToWhite(headerHeight);
    }
  }

  initSizesOfHeader();

  window.addEventListener('resize', () => {
    initSizesOfHeader();
    changeColor();
  });

  return changeColor;
};

function setHeaderHeight(_header) {
  const _overflowInner = _header.querySelector('.header__overflow-inner');
  const headerHeight = _overflowInner.getBoundingClientRect().height;

  return headerHeight;
}

function switchToWhite(offset) {
  _overflowWrapperBlack.classList.add('header__overflow-wrapper_top');
  _overflowWrapperBlack.classList.remove('header__overflow-wrapper_bottom');

  _overflowWrapperWhite.classList.add('header__overflow-wrapper_bottom');
  _overflowWrapperWhite.classList.remove('header__overflow-wrapper_top');

  _overflowWrapperWhite.style.height =
    headerHeight - offset > 0 ? headerHeight - offset + 'px' : 0;
  _overflowWrapperBlack.style.height = offset + 'px';

  if (headerHeight - offset < 0) {
    _header.dataset.currentColor = 'black';
  }
}

function switchToBlack(offset) {
  _overflowWrapperWhite.classList.add('header__overflow-wrapper_top');
  _overflowWrapperWhite.classList.remove('header__overflow-wrapper_bottom');

  _overflowWrapperBlack.classList.add('header__overflow-wrapper_bottom');
  _overflowWrapperBlack.classList.remove('header__overflow-wrapper_top');

  _overflowWrapperBlack.style.height =
    headerHeight - offset > 0 ? headerHeight - offset + 'px' : 0;
  _overflowWrapperWhite.style.height = offset + 'px';
  if (headerHeight - offset < 0) {
    _header.dataset.currentColor = 'white';
  }
}
