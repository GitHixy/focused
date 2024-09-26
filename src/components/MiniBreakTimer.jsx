import React from 'react';
import styles from '../styles/MiniBreakTimer.module.css';

const MiniBreakTimer = ({ breakTime }) => {
  const minutes = Math.floor(breakTime);
  const seconds = Math.floor((breakTime % 1) * 60);

  return (
    <div className={styles.miniTimer}>
      <h3>Break Time Selected: {minutes}:{seconds < 10 ? '0' : ''}{seconds} Minutes</h3>
    </div>
  );
};

export default MiniBreakTimer;
