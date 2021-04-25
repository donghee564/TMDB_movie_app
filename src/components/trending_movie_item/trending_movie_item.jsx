import React from "react";
import styles from "./trending_movie_item.module.css";
import { StarFill, Heart, Plus, Play } from "react-bootstrap-icons";

const TrendingMovieItem = ({ movie }) => {
  const title = movie.title === undefined ? movie.name : movie.title;

  return (
    <li className={styles.movie}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt="poster"
      />
      <div className={styles.textBox}>
        <div className={styles.rate}>
          <p>
            <StarFill size={14} color="gold" />
            <span className={styles.numbers}>{movie.vote_average}</span>
          </p>
          <p>
            <Heart size={14} />
            <span className={styles.numbers}>{movie.vote_count}</span>
          </p>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <button className={styles.myList}>
          <Plus /> 내 리스트
        </button>
        <button className={styles.watchTrailer}>
          <Play />
          예고편 보기
        </button>
      </div>
    </li>
  );
};

export default TrendingMovieItem;
