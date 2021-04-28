import React, { memo } from "react";
import styles from "./time-window.module.css";

function TimeWindow({ label, name, time, handleTimeChange }) {
  return (
    <div className={styles.timeSelect}>
      <div className={styles.time}>
        <label htmlFor={`day${label}`}>
          <input
            className={styles.input}
            type="radio"
            name={name}
            id={`day${label}`}
            value="day"
            checked={time === "day"}
            onChange={handleTimeChange}
          />
          <p className={styles.checkMark}>
            <span className={styles.text}>오늘</span>
          </p>
        </label>
      </div>
      <div className={styles.time}>
        <label htmlFor={`week${label}`}>
          <input
            className={styles.input}
            type="radio"
            name={name}
            id={`week${label}`}
            value="week"
            checked={time === "week"}
            onChange={handleTimeChange}
          />
          <p className={styles.checkMark}>
            <span className={styles.text}>이번 주</span>
          </p>
        </label>
      </div>
    </div>
  );
}

export default memo(TimeWindow);
