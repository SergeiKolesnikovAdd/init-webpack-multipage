import isTouchDevice from 'is-touch-device';

export const worksHeight = () => {
  const isTouchable = isTouchDevice();
  const responsiveHeightBlocks = getResponsiveHeightBlocks();
  let windowHeight = document.documentElement.clientHeight;
  if (isTouchable) setActiveAllBlocks();

  window.addEventListener('resize', () => {
    windowHeight = document.documentElement.clientHeight;
    setHeightOfBlocks();
    if (isTouchable) setActiveAllBlocks();
  });

  function setHeightOfBlocks() {
    responsiveHeightBlocks.forEach(item => {
      setHeightOfBlock(item, windowHeight);
    });
  }

  function setActiveAllBlocks() {
    responsiveHeightBlocks.forEach(item => {
      item.mainBlock.style.height = '100vh';
    });
  }

  function setHeightOfBlock(block, windowHeight) {
    const posY = block.mainBlock.getBoundingClientRect().top - windowHeight;

    if (block.innerText) {
      const percent = 100 + (posY / windowHeight) * 100;

      if (percent < 50) {
        block.mainBlock.classList.add('responsive-height_active');
      } else {
        block.mainBlock.classList.remove('responsive-height_active');
      }
    }

    if (!isTouchable) block.mainBlock.style.height = -posY * 1 + 2 + 'px';
  }

  function getResponsiveHeightBlocks() {
    const responsiveHeightBlocks =
      document.querySelectorAll('.responsive-height');

    const _responsiveHeightObjs = [];

    responsiveHeightBlocks.forEach(item => {
      _responsiveHeightObjs.push({
        mainBlock: item,
        innerText:
          item.querySelector('.work-item__text-inner') ||
          item.querySelector('.work-item__text-opacity')
      });
    });

    return _responsiveHeightObjs;
  }

  setHeightOfBlocks();

  return setHeightOfBlocks;
};
