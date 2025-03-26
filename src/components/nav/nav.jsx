import React, { useRef, useEffect } from "react";
import styles from "./nav.module.css";
import { Search } from "react-bootstrap-icons";
import { Link, useHistory, useLocation } from "react-router-dom";

const Nav = ({ onSearch, list }) => {
  const searchRef = useRef(); // 검색 입력 필드를 참조하기 위한 useRef 훅
  const history = useHistory(); // 페이지 이동을 위한 useHistory 훅
  const location = useLocation(); // 현재 경로를 확인하기 위한 useLocation 훅
  const count = list.length;

  // 검색 버튼 클릭 시 호출되는 함수
  const handleOnClick = () => {
    const searchValue = searchRef.current.value.trim();
    if (searchValue) {
      onSearch(searchValue); // 검색어를 onSearch 함수에 전달
      searchRef.current.value = ""; // 검색 입력 필드 초기화
      history.push("/search"); // 검색 결과 페이지로 이동
    } else {
      // 검색어가 없을 경우 사용자에게 알림
      searchRef.current.setAttribute("aria-invalid", "true");
    }
  };

  // 검색 입력 필드에서 Enter 키를 누를 때 호출되는 함수
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      const searchValue = searchRef.current.value.trim();
      if (searchValue) {
        onSearch(searchValue); // 검색어를 onSearch 함수에 전달
        searchRef.current.value = ""; // 검색 입력 필드 초기화
        history.push("/search"); // 검색 결과 페이지로 이동
      } else {
        // 검색어가 없을 경우 사용자에게 알림
        searchRef.current.setAttribute("aria-invalid", "true");
      }
    }
  };

  // 입력 시작하면 invalid 상태 제거
  const handleInputChange = () => {
    if (searchRef.current.hasAttribute("aria-invalid")) {
      searchRef.current.removeAttribute("aria-invalid");
    }
  };

  return (
    <>
      {/* 스킵 내비게이션 링크 추가 */}
      <a href="#main-content" className="sr-only sr-only-focusable skip-link">
        본문으로 건너뛰기
      </a>

      <nav
        className={styles.navWrap}
        role="navigation"
        aria-label="메인 내비게이션"
      >
        <div className={styles.nav}>
          <img
            className={styles.logo}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB 로고"
            width="154"
            height="20"
          />

          <div className={styles.searchBox} role="search">
            <label htmlFor="search-input" className="sr-only">
              영화, TV 시리즈, 인물 검색
            </label>
            <input
              id="search-input"
              className={styles.input}
              ref={searchRef}
              type="search"
              placeholder="영화, TV 시리즈, 인물 검색"
              onKeyDown={handleOnKeyDown}
              onChange={handleInputChange}
              aria-label="검색어 입력"
            />
            <button
              onClick={handleOnClick}
              className={styles.search}
              aria-label="검색"
              type="button"
            >
              <Search />
              <span className="sr-only">검색</span>
            </button>
          </div>

          <ul className={styles.menu}>
            <li className={styles.menuLink}>
              <Link
                to="/"
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                홈
              </Link>
            </li>
            <li className={styles.menuLink}>
              <Link
                to="/movie"
                aria-current={
                  location.pathname === "/movie" ? "page" : undefined
                }
              >
                영화
              </Link>
            </li>
            <li className={styles.menuLink}>
              <Link
                to="/tv"
                aria-current={location.pathname === "/tv" ? "page" : undefined}
              >
                TV 시리즈
              </Link>
            </li>
            <li className={styles.menuLink}>
              <Link
                to="/my_list"
                aria-current={
                  location.pathname === "/my_list" ? "page" : undefined
                }
              >
                My List
                <span className={styles.count} aria-label={`${count}개 항목`}>
                  {count}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
