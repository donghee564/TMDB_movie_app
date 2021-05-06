import React from "react";
import { useState } from "react";
import styles from "./sub_nav_tv.module.css";

const SubNavTv = ({ handleGenreChange }) => {
  const [clicked, setClicked] = useState("액션"); //선택된 장르 메뉴

  const handleClick = (e) => {
    handleGenreChange(e.target.innerText);
    setClicked(e.target.innerText);
  };

  return (
    <nav className={styles.nav}>
      <h1 className={styles.pageTitle}>인기 TV 시리즈</h1>
      <ul className={styles.menus}>
        <li className={styles.menu}>
          <p
            className={clicked === "액션" ? styles.selected : styles.base}
            onClick={handleClick}
          >
            액션
          </p>
        </li>
        <li className={styles.menu}>
          <p
            className={clicked === "코미디" ? styles.selected : styles.base}
            onClick={handleClick}
          >
            코미디
          </p>
        </li>
        <li className={styles.menu}>
          <p
            className={clicked === "SF" ? styles.selected : styles.base}
            onClick={handleClick}
          >
            SF
          </p>
        </li>
        <li className={styles.menu}>
          <p
            className={clicked === "애니메이션" ? styles.selected : styles.base}
            onClick={handleClick}
          >
            애니메이션
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavTv;
