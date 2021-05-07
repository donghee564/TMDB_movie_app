import React from "react";
import styles from "./page_movie_list.module.css";
import MovieItem from "../movie_item/movie_item";
import { memo } from "react";

const PageMovieList = ({ list, handleModal, handleAdd }) => {
  return (
    <section className={styles.wrap}>
      <ul className={styles.movies}>
        {list.map((item) => {
          return (
            <MovieItem
              movie={item}
              key={item.id}
              handleModal={handleModal}
              handleAdd={handleAdd}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default memo(PageMovieList);
