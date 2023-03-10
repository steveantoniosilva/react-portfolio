import '../../css-components/PomodoroApp.css';
import hiphop from '../../assets/pomodoro-assets/hiphop.mp3';
import endShortBreak from '../../assets/pomodoro-assets/endShortBreak.mp3';
import longBreak from '../../assets/pomodoro-assets/longBreak.mp3';
import buttonClick from '../../assets/pomodoro-assets/buttonClick.mp3';
import PomodoroButton from './PomodoroButton';
import React, { useState, useEffect } from 'react';
import darkbackground from '../../assets/pomodoro-assets/darkBackground.avif';
import lightBackground from '../../assets/pomodoro-assets/lightBackground.avif';

export default function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

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

  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const toggleStyle = {
    color: darkMode ? 'antiquewhite' : 'navajowhite',
    transform: darkMode ? 'rotate(180deg)' : '',
  };

  const divStyle = {
    backgroundColor: darkMode ? 'darkgray' : 'var(--sb7)',
    backgroundImage: darkMode
      ? `url(${darkbackground})`
      : `url(${lightBackground})`,
  };

  const timerStyle = {
    color: darkMode ? 'tan' : 'navajowhite',
    opacity: darkMode ? '0.25' : '1',
  };

  return (
    <div
      style={divStyle}
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
      <div className='pomodoro-content-container'>
        <div className='pomodoro-heading'>
          {count % 2 !== 0 ? '' : <h1>Take a Break</h1>}
        </div>
        <div className='pomodoro-timer'>
          <h1 style={timerStyle}>
            {timerMinutes}:{timerSeconds}
          </h1>
        </div>
        <PomodoroButton
          handleIsActiveClick={handleIsActiveClick}
          isActive={isActive}
        />
      </div>
    </div>
  );
}
