import isTouchDevice from 'is-touch-device';

function ourProfiles() {
  const isTouchable = isTouchDevice();
  const _ourProfilesMainWrapper = document.querySelectorAll(
    '.our-profiles__item'
  );

  let ourProfilesWidth =
    _ourProfilesMainWrapper[0].getBoundingClientRect().width - 40;

  window.addEventListener(
    'resize',
    () =>
      (ourProfilesWidth =
        _ourProfilesMainWrapper[0].getBoundingClientRect().width - 40)
  );

  !isTouchable && _ourProfilesMainWrapper.forEach(item => initItem(item));

  function initItem(item) {
    const _ourProfilesImgWrapper = item.querySelector(
      '.our-profiles__photo-wrapper'
    );
    const photo = item.querySelector('.our-profiles__photo');

    item.addEventListener('mousemove', e => {
      const photoRect = photo.getBoundingClientRect();
      const photoRightOfMouse = photoRect.width < ourProfilesWidth - e.pageX;

      if (photoRightOfMouse) {
        setPositionOfBlock(_ourProfilesImgWrapper, e, 'right');
      } else {
        setPositionOfBlock(_ourProfilesImgWrapper, e, 'left');
      }
      _ourProfilesImgWrapper.classList.add(
        'our-profiles__photo-wrapper_active'
      );
    });

    item.addEventListener('mouseout', () => {
      _ourProfilesImgWrapper.classList.remove(
        'our-profiles__photo-wrapper_active'
      );
    });
  }

  function setPositionOfBlock(block, event, direction = 'right') {
    const translateX =
      direction === 'right'
        ? `calc(${event.pageX + 20}px`
        : `calc(${event.pageX - 20}px - 100%`;

    block.style.transform = `translate(${translateX}), calc(${
      event.offsetY - 20
    }px - 100%))`;
  }
}

export { ourProfiles };
