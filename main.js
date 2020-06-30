const playBtn = document.getElementById('playButton');
const pauseBtn = document.getElementById('pauseButton');
const resetBtn = document.getElementById('resetButton');
const spanTime = document.querySelector('span.time');

let cents = 0;
let secs = 0;
let mins = 0;
let interval;

// Start STOPWATCH interval
const startInterval = () => {
   cents++;
   if (cents >= 100) {
      cents = 0;
      secs++;
   }
   if (secs >= 60) {
      secs = 0;
      mins++;
   }
   // Text content of the display, and check if mins, secs and cents have always 2 digits
   spanTime.textContent = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}:${cents < 10 ? '0' + cents : cents}`;
}

// Start button function
const startTime = () => {
   playBtn.classList.add('hidden');
   pauseBtn.classList.remove('hidden');
   interval = setInterval(startInterval, 10);
}

// Pause button function
const pauseTime = () => {
   playBtn.classList.remove('hidden');
   pauseBtn.classList.add('hidden');
   clearInterval(interval);
}

// Reset button function
const resetTime = () => {
   clearInterval(interval);
   spanTime.textContent = '00:00:00';
   playBtn.classList.remove('hidden');
   pauseBtn.classList.add('hidden');
   cents = 0;
   secs = 0;
   mins = 0;
}

playBtn.addEventListener('click', startTime);
pauseBtn.addEventListener('click', pauseTime);
resetBtn.addEventListener('click', resetTime);