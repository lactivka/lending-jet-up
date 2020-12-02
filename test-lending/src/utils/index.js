const HOURS_MAX = 23;
const MINUTES_MAX = 59;
const SECONDS_MAX = 59;

const decreaseDays = (timer, updateTimer) => {
  updateTimer(timer => [timer[0] - 1, HOURS_MAX, MINUTES_MAX, SECONDS_MAX]);
}

const decreaseHours = (timer, updateTimer) => {
  if(timer[1] === 0) decreaseDays(timer, updateTimer);
  else updateTimer(timer => [timer[0], timer[1] - 1, MINUTES_MAX, SECONDS_MAX]);
}

const decreaseMinutes = (timer, updateTimer) => {
  if(timer[2] === 0) decreaseHours(timer, updateTimer);
  else updateTimer(timer => [timer[0], timer[1], timer[2] - 1, SECONDS_MAX]);
}

const decreaseTimer = (timer, updateTimer) => {
  if(timer[3] === 0) decreaseMinutes(timer, updateTimer);
  else updateTimer(timer => [timer[0], timer[1], timer[2], timer[3] - 1]);

}

export { decreaseTimer }
