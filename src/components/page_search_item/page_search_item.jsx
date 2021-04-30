import React, { memo } from "react";
import styles from "./page_search_item.module.css";
import { StarFill, HeartFill, PersonFill } from "react-bootstrap-icons";

function PageSearchItem({ item }) {
  const poster = () => {
    if (item.media_type === "person") {
      return `https://image.tmdb.org/t/p/w300/${item.profile_path}`;
    }
    return item.poster_path === null
      ? "./images/default_poster.jpg"
      : `https://image.tmdb.org/t/p/w300/${item.poster_path}`;
  };

  const title = item.title === undefined ? item.name : item.title;
  const release_date =
    item.release_date === undefined ? item.first_air_date : item.release_date;

  // const overview = time.media_type === "person" ? item.known_for

  return (
    <div className={styles.searchedItem}>
      <img className={styles.poster} src={poster()} alt="poster" />
      <div className={styles.textBox}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>
          {release_date}
          <span className={styles.media}>{item.media_type}</span>
        </p>
        <ul className={styles.rates}>
          <li className={styles.rate}>
            <StarFill color="gold" /> <span> {item.vote_average}</span>
          </li>
          <li className={styles.rate}>
            <HeartFill size={12} color="#e93c3c" />
            <span> {item.vote_count}</span>
          </li>
          <li className={styles.rate}>
            <PersonFill /> <span> {Math.round(item.popularity)}</span>
          </li>
        </ul>
        <p className={styles.overview}>{item.overview}</p>
      </div>
    </div>
  );
}

export default memo(PageSearchItem);
