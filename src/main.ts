import "./sass/main.scss";

// type num = number;

const secondHand = document.querySelector<HTMLElement>(".second-hand");
const minsHand = document.querySelector<HTMLElement>(".min-hand");
const hourHand = document.querySelector<HTMLElement>(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand!.style.transform = `rotate(${secondsDegrees}deg)`;
  //rotate(X degrees)

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand!.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand!.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
//This invokes the setDate() every 1000 milliseconds.
