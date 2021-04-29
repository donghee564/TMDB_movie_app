import React, { memo } from "react";
import styles from "./page_search_item.module.css";

function PageSearchItem({ item }) {
  const poster =
    item.poster_path === null
      ? "./images/default_poster.jpg"
      : `https://image.tmdb.org/t/p/w300/${item.poster_path}`;
  const title = item.title === undefined ? item.name : item.title;
  const release_date =
    item.release_date === undefined ? item.first_air_date : item.release_date;

  return (
    <div
      className={styles.searchedItem}
      style={{
        background: `url(https://image.tmdb.org/t/p/w300/${item.backdrop_path}) no-repeat center center/cover`,
      }}
    >
      <div className={styles.bgLayer}>
        <img className={styles.poster} src={poster} alt={item.poster_path} />
        <div className={styles.textBox}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>{release_date}</p>
          <p className={styles.media}>{item.media_type}</p>
          <p className={styles.overview}>{item.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(PageSearchItem);
