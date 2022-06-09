export const preloader = () => {
  const _preloader = document.querySelector(".preloader");
  const _preloaderBar = _preloader.querySelector(".preloader__bar");
  const _cursor = document.querySelector(".preloader__cursor");

  let windowWidth = document.documentElement.clientWidth;
  // TODO: dev
  let percent = 0.02;
  let cursorX = 0;
  let cursorY = 0;

  const removeEventOfCursor = initCursor(_cursor);

  const interval = setInterval(() => {
    percent *= 1.02;
    _preloaderBar.style.width = percent + "%";
    _cursor.innerText =
      (Math.round(percent) <= 100 ? Math.round(percent) : 100) + "%";
    setCursorColor(_cursor);

    if (percent > 100) {
      loaded();
      initPrintStroke();
      clearInterval(interval);
      setTimeout(ready, 3200);
      setTimeout(() => {
        removeEventOfCursor();
      }, 500);
    }
  }, 1);

  window.addEventListener("resize", () => {
    windowWidth = document.documentElement.clientWidth;
  });

  function initCursor(cursor) {
    document.addEventListener("mousemove", setCursorPositin);

    function setCursorPositin(e) {
      const offset = 20;  

      cursorX = e.clientX - offset;
      cursorY = e.clientY - offset;

      setCursorColor(cursor);

      cursor.style.display = "block";
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }

    return () => {
      document.removeEventListener("mousemove", setCursorPositin);
    };
  }

  function setCursorColor(cursor) {
    const separatorInPx = (percent * windowWidth) / 100;

    if (cursorX <= separatorInPx) {
      cursor.classList.add("preloader__cursor_white");
    } else {
      cursor.classList.remove("preloader__cursor_white");
    }
  }

  function loaded() {
    document.body.classList.add("loaded");
  }

  function ready() {
    document.body.classList.add("ready");
  }

  function initPrintStroke() {
    const _preloaderSVG = document.querySelectorAll(".preloader-stroke");

    _preloaderSVG.forEach((item) => {
      const timeout = +item.dataset.timeout;
      const duration = +item.dataset.duration;

      setTimeout(() => printStroke(item, duration), timeout);
    });
  }

  function printStroke(item, duration = 800) {
    const len = item.getTotalLength();
    const step = Math.round(len / 100);
    const timeout = duration / 100;

    let current = 0;

    const interval = setInterval(() => {
      current += step;
      item.style.strokeDasharray = current + " " + len;
      if (current > len) {
        clearInterval(interval);
      }
    }, timeout);
  }
};
