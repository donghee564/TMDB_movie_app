import React, { memo } from "react";
import TimeWindow from "../time-window/time-window";
import styles from "./trending.module.css";
import MovieList from "../movie_list/movie_list";

function Trending({ label, list, title, time, handleTimeChange, handleModal }) {
  return (
    <section className={styles.trendingMovies}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>트랜딩 {title}</h1>
        <TimeWindow
          name={title}
          time={time}
          handleTimeChange={handleTimeChange}
          label={label}
        />
      </div>
      <MovieList movies={list} handleModal={handleModal} />
    </section>
  );
}

export default memo(Trending);
