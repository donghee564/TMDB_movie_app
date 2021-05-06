import React from "react";
import { memo } from "react";
import styles from "./page_my_list_item.module.css";

function PageMyListItem({ item, handleModal, handleDelete }) {
  const title = item.title === undefined ? item.name : item.title;
  const release_date =
    item.release_date === undefined ? item.first_air_date : item.release_date;

  return (
    <li className={styles.item}>
      <div className={styles.imgBox}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
          alt="poster"
        />
        <div className={styles.caption}>
          <p className={styles.posterTitle}>{title}</p>
          <p className={styles.releaseDate}>개봉일: {release_date}</p>
        </div>
      </div>
      <div className={styles.textBox}>
        <h1 className={styles.title}>{title}</h1>
        <ul className={styles.buttons}>
          <li onClick={() => handleModal(item)} className={styles.detail}>
            자세히 보기
          </li>
          <li onClick={() => handleDelete(item)} className={styles.delete}>
            지우기
          </li>
        </ul>
      </div>
    </li>
  );
}

export default memo(PageMyListItem);
