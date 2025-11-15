// CountdownTimer.jsx
import React from "react";
import styles from "./CountdownTimer.module.css";

const CountdownTimer = ({ timerLable, timerValue }) => {
  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timerLabel}>
        <span className={styles.dot} />
        {timerLable}
      </div>

      <div className={styles.timerValue}>{timerValue}</div>
    </div>
  );
};

export default CountdownTimer;
