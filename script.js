setInterval(setClock, 1000);

/* ----- query selector => use square brackets for targetting attributes ---- */

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

/* ------------------------- logic for clock timing ------------------------- */

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  setRotation(hourHand, hourRatio);
  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// setClock();
