import React, { useRef } from "react";
import styles from "./nav.module.css";
import { Search } from "react-bootstrap-icons";
import { Link, useHistory } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const searchRef = useRef();
  const history = useHistory();

  const handleOnClick = () => {
    onSearch(searchRef.current.value);
    searchRef.current.value = "";
    history.push("./search");
  };

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchRef.current.value);
      searchRef.current.value = "";
      history.push("./search");
    }
  };

  return (
    <nav className={styles.navWrap}>
      <div className={styles.nav}>
        <img
          className={styles.logo}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="logo"
        />
        <div className={styles.searchBox}>
          <input
            className={styles.input}
            ref={searchRef}
            type="search"
            placeholder="영화, TV 시리즈, 인물 검색"
            onKeyPress={handleOnKeyPress}
          />
          <button onClick={handleOnClick} className={styles.search}>
            <Search />
          </button>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link exact="true" to="/">
              홈
            </Link>
          </li>
          <li>
            <Link to="/movie">영화</Link>
          </li>
          <li>
            <Link to="/tv">TV 시리즈</Link>
          </li>
          <li>
            <Link to="/my_list">My List</Link>
          </li>
          <li>
            <button className={styles.login}>로그인</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
