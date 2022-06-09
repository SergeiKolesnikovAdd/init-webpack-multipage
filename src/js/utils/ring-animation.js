import Splitting from 'splitting';
import isTouchDevice from 'is-touch-device';

export const deviantCircle = () => {
  const isTouchable = isTouchDevice();
  const _deviantCircle = document.querySelector(
    '.deviant-circle__main-wrapper'
  );

  let windowWidth = document.documentElement.clientWidth,
    windowHeight = document.documentElement.clientHeight,
    rotateX = 10,
    rotateZ = 0;

  Splitting({ by: 'chars', whitespace: true });

  function startRotateCircleFromMouse() {
    const _body = document.body;

    _body.addEventListener('mousemove', e => {
      rotateZ = ((e.x - windowWidth / 2) / windowWidth) * 80;
      setPositionOfCircle(_deviantCircle, rotateZ, rotateX);
    });
  }

  function startRotateCircleAnimation(count) {
    rotateZ = 15 * Math.sin(count / 1000);
    setPositionOfCircle(_deviantCircle, rotateZ, rotateX);
    requestAnimationFrame(startRotateCircleAnimation);
  }

  if (!isTouchable) {
    startRotateCircleFromMouse();
  } else {
    requestAnimationFrame(startRotateCircleAnimation);
  }

  window.addEventListener('resize', () => {
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;
  });

  return () => {
    rotateX =
      (-(_deviantCircle.getBoundingClientRect().top - windowHeight / 2 - 100) /
        windowHeight) *
      50;
    setPositionOfCircle(_deviantCircle, rotateZ, rotateX);
  };
};

function setPositionOfCircle(_deviantCircle, rotateZ, rotateX) {
  _deviantCircle.style.transform = `rotateZ(${rotateZ}deg) rotateX(${rotateX}deg)`;
}
