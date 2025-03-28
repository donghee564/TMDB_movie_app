import React from "react";
import styles from "./page_tv_list.module.css";
import MovieItem from "../movie_item/movie_item";
import { memo } from "react";

const PageTvList = ({ list, handleModal, handleAdd }) => {
  return (
    <section className={styles.wrap + " section_list"}>
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

export default memo(PageTvList);
