import React from "react";
import styles from "./trending_movie_item.module.css";
import { StarFill, Heart, Plus, Play } from "react-bootstrap-icons";

const TrendingMovieItem = ({ movie }) => {
  const title = movie.title === undefined ? movie.name : movie.title;
  const release_date =
    movie.release_date === undefined
      ? movie.first_air_date
      : movie.release_date;

  return (
    <li className={styles.movie}>
      <div className={styles.imgBox}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt="poster"
        />
        <div className={styles.caption}>
          <div className={styles.circle}>
            <p className={styles.plus}>
              <Plus size={35} />
            </p>
          </div>
          <h2 className={styles.addMyList}>내 리스트에 추가.</h2>
          <p className={styles.posterTitle}>{title}</p>
          <p className={styles.releaseDate}>개봉일: {release_date}</p>
          {/* <p className={styles.overview}>{movie.overview}</p> */}
        </div>
      </div>
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
          <Plus size={20} /> 내 리스트
        </button>
        <button className={styles.watchTrailer}>
          <Play size={20} />
          예고편 보기
        </button>
      </div>
    </li>
  );
};

export default TrendingMovieItem;
