let time = 25 * 60;
let timerInterval;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("minutes").innerText = 
    String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = 
    String(seconds).padStart(2, '0');
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  time = 25 * 60;
  updateDisplay();
}

function setTime(minutes) {
  pauseTimer();
  time = minutes * 60;
  updateDisplay();
}

updateDisplay();
