import React, { useState } from "react";
import styles from "./time-window.module.css";

function TimeWindow() {
  const [selected, setSelected] = useState({ active: false });

  const handleClick = () => {
    console.log("wefwef");
    const currState = selected.active;
    setSelected({ active: !currState });
  };

  return (
    <div className={styles.timeSelect}>
      <div
        onClick={handleClick}
        className={`${styles.time} ${
          selected === true ? styles.selected : null
        }`}
      >
        <span
          className={`${styles.text} ${
            selected === true ? styles.selected : null
          }`}
        >
          오늘
        </span>
      </div>
      <div onClick={handleClick} className={`${styles.time}`}>
        <span className={`${styles.text}`}>이번주</span>
      </div>
    </div>
  );
}

export default TimeWindow;
