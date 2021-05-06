import React, { memo } from "react";
import styles from "./popular.module.css";
import MovieList from "../movie_list/movie_list";
import CategoriesWindow from "../categories-window/categories-window";

function Popular({ type, list, handleMediaChange, handleModal, handleAdd }) {
  return (
    <section className={styles.trendingMovies}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>What's Popular</h1>
        <CategoriesWindow type={type} handleMediaChange={handleMediaChange} />
      </div>
      <MovieList
        movies={list}
        handleModal={handleModal}
        handleAdd={handleAdd}
      />
    </section>
  );
}

export default memo(Popular);
