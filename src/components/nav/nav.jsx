import React from "react";
import styles from "./nav.module.css";
import { Search } from "react-bootstrap-icons";

const Nav = (props) => (
  <nav className={styles.navWrap}>
    <div className={styles.nav}>
      <img
        className={styles.logo}
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="logo"
      />
      <ul className={styles.menu}>
        <li>홈</li>
        <li>영화</li>
        <li>TV 시리즈</li>
        <li>My List</li>
        <li>
          <button className={styles.search}>
            <Search />
          </button>
        </li>
        <li>
          <button className={styles.login}>로그인</button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
