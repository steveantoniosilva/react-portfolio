import '../../css-components/PomodoroApp.css';
import hiphop from '../../assets/pomodoro-assets/hiphop.mp3';
import endShortBreak from '../../assets/pomodoro-assets/endShortBreak.mp3';
import longBreak from '../../assets/pomodoro-assets/longBreak.mp3';
import buttonClick from '../../assets/pomodoro-assets/buttonClick.mp3';
import PomodoroButton from './PomodoroButton';
import React, { useState, useEffect } from 'react';
import darkBackground from '../../assets/pomodoro-assets/darkBackground.avif';

export default function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(2);
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

  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const toggleStyle = {
    color: darkMode ? 'rgb(255, 222, 173)' : 'navajowhite',
    opacity: darkMode ? '.2' : '1',
    transform: darkMode ? 'rotate(180deg)' : '',
  };

  const divStyle = {
    backgroundImage: darkMode
      ? `url(${darkBackground})`
      : `url('https://images.unsplash.com/photo-1584582835835-c483999a7ae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')`,
  };

  const breakTime = {
    color: darkMode ? 'rgba(112, 82, 53)' : 'white',
  };

  const timerStyle = {
    color: darkMode ? 'navajowhite' : 'navajowhite',
    opacity: darkMode ? '.1' : '.3',
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
      <div>
        <div className='pomodoro-heading'>
          {count % 2 !== 0 ? '' : <h1 style={breakTime}>Take a Break</h1>}
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
