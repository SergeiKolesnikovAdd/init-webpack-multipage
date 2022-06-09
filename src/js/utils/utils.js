export const noop = () => {};

export const isPhoneDisplayWidthFunction = () =>
  window.matchMedia('(max-width: 600px)').matches;
