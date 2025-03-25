import React, { useRef } from "react";
import styles from "./nav.module.css";
import { Search } from "react-bootstrap-icons";
import { Link, useHistory } from "react-router-dom";

const Nav = ({ onSearch, list }) => {
  const searchRef = useRef(); // 검색 입력 필드를 참조하기 위한 useRef 훅
  const history = useHistory(); // 페이지 이동을 위한 useHistory 훅

  // 검색 버튼 클릭 시 호출되는 함수
  const handleOnClick = () => {
    onSearch(searchRef.current.value); // 검색어를 onSearch 함수에 전달
    searchRef.current.value = ""; // 검색 입력 필드 초기화
    history.push("/search"); // 검색 결과 페이지로 이동
  };

  // 검색 입력 필드에서 Enter 키를 누를 때 호출되는 함수
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(searchRef.current.value); // 검색어를 onSearch 함수에 전달
      searchRef.current.value = ""; // 검색 입력 필드 초기화
      history.push("/search"); // 검색 결과 페이지로 이동
    }
  };

  const count = list.length;

  return (
    <nav
      className={styles.navWrap}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.nav}>
        <img
          className={styles.logo}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="TMDB Logo"
        />
        <div className={styles.searchBox}>
          <input
            className={styles.input}
            ref={searchRef} // 검색 입력 필드를 참조
            type="search"
            placeholder="영화, TV 시리즈, 인물 검색"
            onKeyDown={handleOnKeyDown}
            aria-label="검색어 입력"
          />
          <button
            onClick={handleOnClick}
            className={styles.search}
            aria-label="검색"
          >
            <Search />
          </button>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuLink}>
            <Link exact="true" to="/" aria-label="홈">
              홈
            </Link>
          </li>
          <li className={styles.menuLink}>
            <Link to="/movie" aria-label="영화">
              영화
            </Link>
          </li>
          <li className={styles.menuLink}>
            <Link to="/tv" aria-label="TV 시리즈">
              TV 시리즈
            </Link>
          </li>
          <li className={styles.menuLink}>
            <Link to="/my_list" aria-label="My List">
              My List
            </Link>
            <span className={styles.count}>{count}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
