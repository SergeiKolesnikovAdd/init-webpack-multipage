import { isPhoneDisplayWidthFunction, noop } from '../utils/utils';

export const themeController = separator => {
  const photoWrapper = document.querySelector(
    '.about-first-section__photo-wrapper'
  );
  const photo = document.querySelectorAll('.about-first-section__photo');
  let photoWrapperClientRect = photoWrapper.getBoundingClientRect();
  let photoWrapperBottom = photoWrapperClientRect.bottom;
  let separatorClientRect = separator.getBoundingClientRect();
  let separatorBottom = separatorClientRect.bottom;
  let stepLength = (separatorBottom - photoWrapperBottom) / photo.length;
  let windowHeight = window.innerHeight;
  let isPhoneDisplayWidth = isPhoneDisplayWidthFunction();

  window.addEventListener('resize', () => {
    windowHeight = window.innerHeight;
    photoWrapperClientRect = photoWrapper.getBoundingClientRect();
    photoWrapperBottom = photoWrapperClientRect.bottom;
    separatorClientRect = separator.getBoundingClientRect();
    separatorBottom = separatorClientRect.bottom;
    stepLength = (separatorBottom - photoWrapperBottom) / photo.length;
    isPhoneDisplayWidth = isPhoneDisplayWidthFunction();
  });

  function scrollEvent(needChangePhoto = true) {
    const separatorClientRect = separator.getBoundingClientRect();
    const separatorBottom = separatorClientRect.bottom;
    const separatorHeight = separatorClientRect.height;

    if (separatorBottom - photoWrapperBottom <= 0) {
      document.body.classList = 'theme-red';

      if (needChangePhoto)
        photoWrapper.style.transform = `translateY(${
          separatorBottom - windowHeight
        })`;
    } else {
      document.body.classList = 'theme-white';

      if (needChangePhoto) {
        photoWrapper.style.transform = `translateY(${
          separatorHeight - separatorBottom
        }px)`;

        photo.forEach((item, index) => {
          if (separatorHeight - separatorBottom >= stepLength * index) {
            item.style.opacity = 1;
          } else {
            item.style.opacity = 0;
          }
        });
      }
    }
  }

  return () => (isPhoneDisplayWidth ? scrollEvent(false) : scrollEvent(true));
};
