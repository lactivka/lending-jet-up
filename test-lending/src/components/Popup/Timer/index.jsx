import { useEffect, useState } from 'react';
import { popup } from '../../../constants/content';
import { decreaseTimer } from '../../../utils';
import '../index.scss';

const INTERVAL = 1000;

function Timer() {
  const [timer, setTimer] = useState([
    popup.time.daysNumber, popup.time.hoursNumber,
    popup.time.minutesNumber, popup.time.secondsNumber]);

  useEffect(() => {
    const startTimer = setInterval(() => {
      decreaseTimer(timer, setTimer);
    }, INTERVAL);
    if(timer.every(el => el === 0)) clearInterval(startTimer);
    return () => clearInterval(startTimer);
  }, [timer] )

  return (
    <div className="time-block ">
    <div className="time-part days">
      <div className="time-number">{timer[0].toString().length < 2 ? '0' + timer[0] : timer[0]}</div>
      <div className="time-text">{popup.time.days}</div>
    </div>
    <div className="time-divider">{popup.time.divider}</div>
    <div className="time-part hours">
      <div className="time-number">{timer[1].toString().length < 2 ? '0' + timer[1] : timer[1]}</div>
      <div className="time-text">{popup.time.hours}</div>
    </div>
    <div className="time-divider">{popup.time.divider}</div>
    <div className="time-part minutes">
      <div className="time-number">{timer[2].toString().length < 2 ? '0' + timer[2] : timer[2]}</div>
      <div className="time-text">{popup.time.minutes}</div>
    </div>
    <div className="time-divider">{popup.time.divider}</div>
    <div className="time-part seconds">
      <div className="time-number">{timer[3].toString().length < 2 ? '0' + timer[3] : timer[3]}</div>
      <div className="time-text">{popup.time.seconds}</div>
    </div>
  </div>
  )
}

export default Timer;
