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
