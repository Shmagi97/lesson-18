function timePlius0(time) {
  return time < 10 ? `0${time}` : time;
}

function getTimeInDate() {
  const mimdinareDro = new Date();
  const saati = timePlius0(mimdinareDro.getHours());
  const wuti = timePlius0(mimdinareDro.getMinutes());
  const wami = timePlius0(mimdinareDro.getSeconds());

  const clockCont2 = document.querySelector(".clock-cont2");

  clockCont2.innerHTML = `${saati}:${wuti}:${wami} `;
}

setInterval(getTimeInDate, 1000);

const slideImg = document.querySelectorAll("img");
const rightClick = document.querySelector(".click-right");
const leftClick = document.querySelector(".click-left");

let activeIndex = 0;

rightClick.addEventListener("click", () => {
  if (activeIndex >= 3) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }

  slideImg.forEach((element, index) => {
    if (activeIndex === index) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});

leftClick.addEventListener("click", () => {
  if (activeIndex <= 0) {
    activeIndex = 3;
  } else {
    activeIndex--;
  }

  slideImg.forEach((element, index) => {
    if (activeIndex === index) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});

let setIntervalId = null;

function setIntervalfn() {
  setIntervalId = setInterval(() => {
    if (activeIndex >= 3) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }

    slideImg.forEach((element, index) => {
      if (activeIndex === index) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }, 5000);
}

setIntervalfn();

leftClick.addEventListener("mouseenter", () => {
  clearInterval(setIntervalId);
});
rightClick.addEventListener("mouseenter", () => {
  clearInterval(setIntervalId);
});

leftClick.addEventListener("mouseleave", setIntervalfn);
rightClick.addEventListener("mouseleave", setIntervalfn);

function getTimeLeftUntilTomorrowHour(hour, minute) {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(hour, minute, 0, 0);

  const timeDifference = tomorrow - now;
  if (timeDifference < 0) {
    // If the specified time is earlier than the current time, add 24 hours
    tomorrow.setDate(tomorrow.getDate() + 1);
    timeDifference = tomorrow - now;
  }

  const millisecondsInMinute = 1000 * 60;
  const millisecondsInHour = millisecondsInMinute * 60;

  const hoursLeft = Math.floor(timeDifference / millisecondsInHour);
  const minutesLeft = Math.floor(
    (timeDifference % millisecondsInHour) / millisecondsInMinute
  );

  return { hours: hoursLeft, minutes: minutesLeft };
}

// Usage example: Calculate time left until 11:30 AM tomorrow
const desiredHour = 11;
const desiredMinute = 30;
const timeLeft = getTimeLeftUntilTomorrowHour(desiredHour, desiredMinute);
console.log(
  `Time left until ${desiredHour}:${desiredMinute}:`,
  timeLeft.hours,
  "hours and",
  timeLeft.minutes,
  "minutes"
);
