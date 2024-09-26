import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, startBreak, pauseTimer, resetTimer, completeSession, tick, setDuration, setBreakDuration } from '../redux/timerSlice';
import styles from '../styles/Timer.module.css';
import notification from '../assets/sounds/notification.mp3'
import MiniBreakTimer from './MiniBreakTimer.jsx';

const Timer = () => {
  const dispatch = useDispatch();
  const { remainingTime, isActive, isPaused, isBreak, duration, breakDuration  } = useSelector(state => state.timer);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [sessionDuration, setSessionDuration] = useState(duration / 60);
  const [breakTime, setBreakTime] = useState(breakDuration / 60);
  const [appliedBreakTime, setAppliedBreakTime] = useState(breakTime);
  const [toastMessage, setToastMessage] = useState(''); 
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isActive && !isPaused) {
      timer = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    if (remainingTime <= 0) {
      clearInterval(timer);
      if (!isBreak) {
        dispatch(startBreak());
        dispatch(completeSession());
        playSound();
        showToastMessage("Session Completed, Take a Break!");
      } else {
        dispatch(resetTimer());
        dispatch(startTimer());
        playSound();
        showToastMessage("Break Finished! Back to Focus!");
      }
    }

    return () => clearInterval(timer);
  }, [isActive, isPaused, remainingTime, isBreak, dispatch]);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 5000); 
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const handleSetSessionDuration = () => {
    const newDurationInSeconds = sessionDuration * 60;
    dispatch(setDuration(newDurationInSeconds));
  };

  const handleSetBreakDuration = () => {
    const newBreakDurationInSeconds = breakTime * 60;
    dispatch(setBreakDuration(newBreakDurationInSeconds));
    setAppliedBreakTime(breakTime);
  };
  
  const playSound = () => {
    const audio = new Audio(notification);
    audio.volume = 0.3;
    audio.play();
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={styles.container}>
      <div className={styles.themeToggleContainer}>
        <label className={styles.themeSwitch}>
          <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
          <span className={styles.slider}></span>
        </label>
      </div>

      <h1 className={styles.timer}>
        {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? '0' : ''}{remainingTime % 60}
      </h1>
      <MiniBreakTimer breakTime={appliedBreakTime} />
      <div className={styles.buttons}>
        <button onClick={() => dispatch(startTimer())} className={styles.start}>Start</button>
        <button onClick={() => dispatch(pauseTimer())} className={styles.pause}>Pause</button>
        <button onClick={() => dispatch(resetTimer())} className={styles.reset}>Reset</button>
      </div>

<div className={styles.inputContainer}>
      <div className={styles.inputGroup}>
        <label>
          <span>Set Duration:  </span>
          <input
            type="range"
            value={sessionDuration}
            onChange={(e) => setSessionDuration(e.target.value)}
            min="1"
            max="120"
            
          />
          <span>{sessionDuration} Minutes </span>
        </label>
        <button onClick={handleSetSessionDuration} className={styles.applyButton}>Apply</button>
      </div>

      <div className={styles.inputGroup}>
        <label>
        <span>Set Break:  </span>
          <input
            type="range"
            value={breakTime}
            onChange={(e) => setBreakTime(e.target.value)}
            min="1"
            max="30"
          />
          <span>{breakTime} Minutes </span>
        </label>
        <button onClick={handleSetBreakDuration} className={styles.applyButton}>Apply</button>
      </div>

      </div>

      {showToast && (
        <div className={styles.toast}>
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default Timer;


