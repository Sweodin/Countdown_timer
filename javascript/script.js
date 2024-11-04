let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

let myTimer;
let myHours = 1;
let myMinutes = 0;
let mySeconds = 0;

stopBtn.disabled = true;
resetBtn.disabled = true;

 /*----- Function to update display with leading zeros -----*/

function updateDisplay() {
  hours.innerHTML = String(myHours).padStart(2, "0");
  minutes.innerHTML = String(myMinutes).padStart(2, "0");
  seconds.innerHTML = String(mySeconds).padStart(2, "0");
}

 /*----- Initialize display to 1 hour -----*/

updateDisplay();

 /*----- Start counting down -----*/
 
startBtn.addEventListener("click", function () {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;

  myTimer = setInterval(function () {
    if (myHours === 0 && myMinutes === 0 && mySeconds === 0) {
      clearInterval(myTimer);
      startBtn.disabled = false;
      stopBtn.disabled = true;
      return;
    }

    if (mySeconds === 0) {
      if (myMinutes === 0) {
        myHours--;
        myMinutes = 59;
        mySeconds = 59;
      } else {
        myMinutes--;
        mySeconds = 59;
      }
    } else {
      mySeconds--;
    }

    updateDisplay();
  }, 1000);
});

 /*----- Stop counting down -----*/

stopBtn.addEventListener("click", function () {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(myTimer);
});

 /*----- Reset timer to 1 hour -----*/

resetBtn.addEventListener("click", function () {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;

  clearInterval(myTimer);
  myHours = 1;
  myMinutes = 0;
  mySeconds = 0;
  updateDisplay();
});
