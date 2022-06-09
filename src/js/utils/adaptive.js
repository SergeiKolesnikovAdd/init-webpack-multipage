import isTouchDevice from 'is-touch-device';

function checkTouchDevice() {
  const isTouchable = isTouchDevice();
  const body = document.body;

  if (isTouchable) body.classList.add('is-touchable');
}

export { checkTouchDevice };
