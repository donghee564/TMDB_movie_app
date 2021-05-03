import React from "react";
import styles from "./item_detail_modal.module.css";

function ItemDetailModal({ item, handleCloseModal }) {
  const title = item.title === undefined ? item.name : item.title;
  const genres = item.genres && item.genres.map((item) => item.name).join(", ");
  const releaseDate =
    item.release_date === undefined
      ? "시작일: " + item.first_air_date
      : "개봉일: " + item.release_date;

  const runTime = item.runtime && item.runtime + "분";
  const episodeRunTime =
    item.episode_run_time && "episode runtime: " + item.episode_run_time + "분";
  const seasonNumber =
    item.number_of_seasons && "season: " + item.number_of_seasons;
  const episodeNumber =
    item.number_of_episodes && "number of episodes: " + item.number_of_episodes;

  return (
    <div className={styles.wrap}>
      <div className={styles.modal}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
          alt="poster"
        />
        <div className={styles.textBox}>
          <h1 className={styles.title}>{title}</h1>
          <ul className={styles.infos}>
            <li className={styles.info}>
              <p>{releaseDate}</p>
            </li>
            <li className={styles.info}>
              <p>{genres}</p>
            </li>
            <li className={styles.info}>
              <p>{runTime}</p>
            </li>
          </ul>
          <p className={styles.average}>평점 {item.vote_average}</p>
          <h2 className={styles.tagline}>{item.tagline}</h2>
          <ul className={styles.tvInfos}>
            <li className={styles.tvInfo}>{seasonNumber}</li>
            <li className={styles.tvInfo}>{episodeNumber}</li>
            <li className={styles.tvInfo}>{episodeRunTime}</li>
          </ul>
          <h3 className={styles.subTitle}>개요</h3>
          <p className={styles.overview}>{item.overview}</p>
          <button className={styles.button} onClick={handleCloseModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailModal;
