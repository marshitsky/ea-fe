// Define the active elements on the page
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const deadline = new Date("July 24 2023 00:00:00");

const preloader = document.querySelector("#preloader");

// Calculations
const updateCounter = () => {
  const currentTime = new Date();
  const remainingTime = deadline - currentTime;

  //Conversions
  const daysLeft = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(remainingTime / 1000 / 60) % 60;
  const secondsLeft = Math.floor(remainingTime / 1000) % 60;

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
};

//Run the calculation every second
setInterval(updateCounter, 1000);

// Set preloader
setTimeout(function () {
  preloader.remove();
}, 1000);
