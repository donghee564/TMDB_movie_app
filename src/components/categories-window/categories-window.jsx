import React, { memo } from "react";
import styles from "./categories.module.css";

function CategoriesWindow({ type, handleMediaChange }) {
  return (
    <div className={styles.typeSelect}>
      <div className={styles.time}>
        <label htmlFor="tv">
          <input
            className={styles.input}
            type="radio"
            name="type"
            id="tv"
            value="tv"
            checked={type === "tv"}
            onChange={handleMediaChange}
          />
          <p className={styles.checkMark}>
            <span className={styles.text}>TV</span>
          </p>
        </label>
      </div>
      <div className={styles.time}>
        <label htmlFor="movie">
          <input
            className={styles.input}
            type="radio"
            name="type"
            id="movie"
            value="movie"
            checked={type === "movie"}
            onChange={handleMediaChange}
          />
          <p className={styles.checkMark}>
            <span className={styles.text}>영화</span>
          </p>
        </label>
      </div>
    </div>
  );
}

export default memo(CategoriesWindow);
