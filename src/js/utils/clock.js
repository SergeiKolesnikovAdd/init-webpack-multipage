export const initClock = () => {
    const time = new Date(
      clock.year,
      clock.month,
      clock.day,
      clock.hour,
      clock.minute,
      clock.second
    );
    const clockBlocks = document.querySelectorAll('.clock');
  
    setInterval(() => {
      clockBlocks.forEach(clockBlock => {
        const hourBlock = clockBlock.querySelector('.clock__hour');
        const minuteBlock = clockBlock.querySelector('.clock__minute');
        const secondBlock = clockBlock.querySelector('.clock__second');
  
        hourBlock.innerText = getFormatedNumber(time.getHours());
        minuteBlock.innerText = getFormatedNumber(time.getMinutes());
        secondBlock.innerText = getFormatedNumber(time.getSeconds());
      });
  
      time.setSeconds(time.getSeconds() + 1);
    }, 1000);
  };
  
  function getFormatedNumber(number) {
    if (number >= 10) {
      return number;
    }
  
    return '0' + number;
  }
  