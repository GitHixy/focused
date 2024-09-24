import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Statistics.module.css'; 

const Statistics = () => {
  const { completedSessions, totalFocusTime } = useSelector(state => state.timer);

  return (
    <div className={styles.statistics}>
      <h2>-Stats-</h2>
      <p>Completed Sessions: <span>{completedSessions}</span></p>
      <p>Total Time In Focus: <span>{Math.floor(totalFocusTime / 60)} minutes</span></p>
    </div>
  );
};

export default Statistics;
