import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

function Timer({ minutes = 3, seconds = 0 }) {
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

  const minutesDisplay = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0');
  const secondsDisplay = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="ComponentBox">
      <h1>{<div>{`${minutesDisplay}:${secondsDisplay}`}</div>}</h1>
      <div>
        <button variant="primary" onClick={startTimer}>시작</button>
        <text>    </text>
        <button variant="danger" onClick={stopTimer}>정지</button>
        <text>    </text>
        <button variant="info" onClick={resetTimer}>초기화</button>
      </div>
    </div>
  );
}

export default Timer;
