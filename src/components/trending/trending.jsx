import React from "react";
import TimeWindow from "../time-window/time-window";
import styles from "./trending.module.css";
import MovieList from "../movie_list/movie_list";

function Trending({ list }) {
  return (
    <section className={styles.trendingMovies}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>트랜딩 영화</h1>
        <TimeWindow />
      </div>
      <MovieList movies={list} />
    </section>
  );
}

export default Trending;
