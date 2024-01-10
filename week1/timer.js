let seconds = 0;
let minutes = 0;
let hours = 0;

function time() {
  seconds++;
  minutes = Math.floor(seconds / 60);
  hours = Math.floor(minutes / 60);

  console.log(`${hours}:${minutes % 60}:${seconds % 60}`);
}


function clock() {
  const currentDate = new Date();
  const currSec = currentDate.getSeconds();
  const currMins = currentDate.getMinutes();
  const currHours = currentDate.getHours();
  const currMilliseconds = currentDate.getMilliseconds()
  seconds = currSec;
  minutes = currMins;
  hours = currHours;
  millisecods = currMilliseconds

  
  console.log(`${hours}:${minutes}:${seconds}:${millisecods}`);
}
// clock functions 
setInterval(clock, 1000);
// // timer functions 
// setInterval(time, 1000);
