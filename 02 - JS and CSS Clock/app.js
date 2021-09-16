const secsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hrsHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const secs = now.getSeconds();
  const secsDegrees = ((secs / 60) * 360) + 90;
  secsHand.style.transform = `rotate(${secsDegrees}deg)`;

  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hrs = now.getHours()
  const hrsDegrees = ((hrs / 12) * 360) + 90;
  hrsHand.style.transform = `rotate(${hrsDegrees}deg)`;

}
setInterval(setDate, 1000);
