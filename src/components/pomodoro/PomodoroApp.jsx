import '../../css-components/PomodoroApp.css';
import hiphop from '../../assets/pomodoro-assets/hiphop.mp3';
import endShortBreak from '../../assets/pomodoro-assets/endShortBreak.mp3';
import longBreak from '../../assets/pomodoro-assets/longBreak.mp3';
import buttonClick from '../../assets/pomodoro-assets/buttonClick.mp3';
import PomodoroButton from './PomodoroButton';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(1);
  const [darkMode, setDarkMode] = useState(true);

  const handleIsActiveClick = () => {
    setIsActive(!isActive);
    playSoundEffect(buttonClick);
  };

  const darkModeToggle = () => {
    setDarkMode(prevState => !prevState);
  };

  const playSoundEffect = sound => {
    new Audio(sound).play();
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setCount(prevCount => prevCount + 1);
            setIsActive(!isActive);
            if (count === 7 || count === 15 || count === 22 || count === 30) {
              playSoundEffect(longBreak);
              let minutes = 20;
              let seconds = 0;
              setSeconds(seconds);
              setMinutes(minutes);
            } else if (count % 2 !== 0) {
              playSoundEffect(hiphop);
              let minutes = 5;
              let seconds = 0;
              setSeconds(seconds);
              setMinutes(minutes);
            } else {
              playSoundEffect(endShortBreak);
              let minutes = 5;
              let seconds = 0;
              setSeconds(seconds);
              setMinutes(minutes);
            }
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds, minutes, isActive, count]);

  const timerSeconds =
    seconds < 10 ? `0${seconds.toString()}` : seconds.toString();
  const timerMinutes =
    minutes < 10 ? `0${minutes.toString()}` : minutes.toString();

  const toggleStyle = {
    color: darkMode ? 'ivory' : '#111',
    transform: darkMode ? 'rotate(180deg)' : '',
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#333' : 'ivory',
      }}
      className='PomodoroApp'>
      <div
        onClick={darkModeToggle}
        className='pomodoro-toggle'>
        <i
          style={toggleStyle}
          className={
            darkMode ? 'fa-solid fa-toggle-off' : 'fa-solid fa-toggle-off'
          }></i>
      </div>
      <div className='pomodoro-heading'>
        {count % 2 !== 0 ? '' : <h1>Start Break</h1>}
      </div>
      <div>
        <PomodoroButton
          handleIsActiveClick={handleIsActiveClick}
          isActive={isActive}
        />
        <div>
          <p className='pomodoro-timer'>
            <span>{timerMinutes[0]}</span>
            <span>{timerMinutes[1]}</span>:<span>{timerSeconds[0]}</span>
            <span>{timerSeconds[1]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
