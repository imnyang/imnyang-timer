import React, { useState, useEffect } from 'react';
import './App.css';

function Timer() {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(minutes * 60 + seconds);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (timerRunning && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert("Time's up!");
    }

    return () => clearTimeout(timer);
  }, [timerRunning, timeLeft]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(minutes * 60 + seconds);
    setTimerRunning(false);
  };

  const handleMinutesChange = e => {
    setMinutes(parseInt(e.target.value));
  };

  const handleSecondsChange = e => {
    setSeconds(parseInt(e.target.value));
  };

  const minutesDisplay = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0');
  const secondsDisplay = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="ComponentBox">
      <div>
        <input
          id="minutes-input"
          type="number"
          value={minutes}
          class="inputField"
          onChange={handleMinutesChange}
        />
        <label htmlFor="seconds-input" class="text"> : </label>
        <input
          id="seconds-input"
          type="number"
          value={seconds}
          class="inputField"
          onChange={handleSecondsChange}
        />
      </div>
      <div className="ComponentBox">
        <div><h1>{`${minutesDisplay}:${secondsDisplay}`}</h1></div>
        <div>
        <button onClick={startTimer} class="w-btn w-btn-indigo">시작</button>
        <label>   </label>
        <button onClick={stopTimer} class="w-btn w-btn-indigo">정지</button>
        <label>   </label>
        <button onClick={resetTimer} class="w-btn w-btn-indigo">초기화</button>
        </div>
      </div>

    </div>
  );
}

export default Timer;
