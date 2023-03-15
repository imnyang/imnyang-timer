import React, { useState, useEffect } from 'react';
import './App.css'
function Timer() {
  const [minutes, setMinutes] = useState(0);
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
    <div>
      <div>
        <label htmlFor="minutes-input">분:</label>
        <input
          id="minutes-input"
          type="number"
          value={minutes}
          onChange={handleMinutesChange}
        />
      </div>
      <div>
        <label htmlFor="seconds-input">초:</label>
        <input
          id="seconds-input"
          type="number"
          value={seconds}
          onChange={handleSecondsChange}
        />
      </div>
      <div className="ComponentBox">
        <div><h1>{`${minutesDisplay}:${secondsDisplay}`}</h1></div>
        <div>
          <button onClick={startTimer}>시작</button>
          <button onClick={stopTimer}>정지</button>
          <button onClick={resetTimer}>초기화</button>
        </div>
      </div>
      
    </div>
  );
}

export default Timer;
