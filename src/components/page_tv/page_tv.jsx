import React from "react";
import { useState } from "react";
import { memo } from "react";
import { useEffect } from "react";
import MovieList from "../movie_list/movie_list";
import styles from "./page_tv.module.css";

function PageTv({ tmdb, handleModal }) {
  const [actionTv, setActionTv] = useState([]);
  const [comedyTv, setComedyTv] = useState([]);
  const [sfTv, setSfTv] = useState([]);
  const [animationTv, setAnimationTv] = useState([]);

  useEffect(() => {
    tmdb
      .popular("tv", "&with_genres=10759") // 액션
      .then((result) => {
        setActionTv(result);
      });
    tmdb
      .popular("tv", "&with_genres=35") // 코미디
      .then((result) => {
        setComedyTv(result);
      });
    tmdb
      .popular("tv", "&with_genres=10765") // SF
      .then((result) => {
        setSfTv(result);
      });
    tmdb
      .popular("tv", "&with_genres=16") // 애니메이션
      .then((result) => {
        setAnimationTv(result);
      });
    return console.log("page TV");
  }, [tmdb]);

  return (
    <section
      className={styles.wrap}
      // style={{
      //   background: "url('images/black_pattern.jpg') center center/cover fixed",
      // }}
    >
      <div className={styles.movie}>
        <div className={styles.bgLayer}>
          <h1 className={styles.pageTitle}>장르별 인기 TV 시리즈</h1>
          <h1 className={styles.title}>액션</h1>
          <MovieList movies={actionTv} handleModal={handleModal} />
        </div>
        <h1 className={styles.title}>코미디</h1>
        <MovieList movies={comedyTv} handleModal={handleModal} />
        <div className={styles.bgLayer}>
          <h1 className={styles.title}>SF</h1>
          <MovieList movies={sfTv} handleModal={handleModal} />
        </div>
        <h1 className={styles.title}>애니메이션</h1>
        <MovieList movies={animationTv} handleModal={handleModal} />
      </div>
    </section>
  );
}

export default memo(PageTv);
