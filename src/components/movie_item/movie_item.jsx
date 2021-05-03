import React, { memo } from "react";
import styles from "./movie_item.module.css";
import { StarFill, Heart, Plus, Play } from "react-bootstrap-icons";

const MovieItem = ({ movie, handleModal }) => {
  const title = movie.title === undefined ? movie.name : movie.title;
  const release_date =
    movie.release_date === undefined
      ? movie.first_air_date
      : movie.release_date;

  const handleClick = () => {
    handleModal(movie);
  };

  return (
    <li className={styles.movie}>
      <div className={styles.imgBox}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
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
        <button onClick={handleClick} className={styles.watchTrailer}>
          <Play size={20} />
          자세히 보기
        </button>
      </div>
    </li>
  );
};

export default memo(MovieItem);
