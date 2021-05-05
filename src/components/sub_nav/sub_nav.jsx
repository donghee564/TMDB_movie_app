import React from "react";
import { useState } from "react";
import styles from "./sub_nav.module.css";

const SubNav = ({ handleGenreChange }) => {
  const [clicked, setClicked] = useState("1");

  const handleClick = (e) => {
    handleGenreChange(e.target.innerText);
    setClicked(e.target.id);
  };

  return (
    <nav className={styles.nav}>
      <h1 className={styles.pageTitle}>인기 영화</h1>
      <ul className={styles.menus}>
        <li className={styles.menu}>
          <p
            className={clicked === 1 ? styles.selected : null}
            id="1"
            onClick={handleClick}
          >
            액션
          </p>
        </li>
        <li className={styles.menu}>
          <p
            className={clicked === 2 ? styles.selected : null}
            id="2"
            onClick={handleClick}
          >
            코미디
          </p>
        </li>
        <li className={styles.menu}>
          <p
            className={clicked === 3 ? styles.selected : null}
            id="3"
            onClick={handleClick}
          >
            SF
          </p>
        </li>
        <li className={styles.menu}>
          <p
            className={clicked === 4 ? styles.selected : null}
            id="4"
            onClick={handleClick}
          >
            애니메이션
          </p>
        </li>
        <li className={styles.menu}>
          <p
            className={clicked === 5 ? styles.selected : null}
            id="5"
            onClick={handleClick}
          >
            호러
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default SubNav;
