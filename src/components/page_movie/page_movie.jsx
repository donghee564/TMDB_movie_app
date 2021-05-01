import React from "react";
import { useState } from "react";
import { memo } from "react";
import { useEffect } from "react";
import MovieList from "../movie_list/movie_list";
import styles from "./page_movie.module.css";

function PageMovie({ tmdb }) {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [sfMovies, setSfMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);

  useEffect(() => {
    tmdb
      .popular("movie", "&with_genres=28") //
      .then((result) => {
        setActionMovies(result);
      });
    tmdb
      .popular("movie", "&with_genres=35") //
      .then((result) => {
        setComedyMovies(result);
      });
    tmdb
      .popular("movie", "&with_genres=878") //
      .then((result) => {
        setSfMovies(result);
      });
    tmdb
      .popular("movie", "&with_genres=16") //
      .then((result) => {
        setAnimationMovies(result);
      });
    console.log("redering page moive");
  }, []);

  return (
    <div className={styles.movie}>
      <h1 className={styles.title}>액션</h1>
      <MovieList movies={actionMovies} />
      <h1 className={styles.title}>코미디</h1>
      <MovieList movies={comedyMovies} />
      <h1 className={styles.title}>SF</h1>
      <MovieList movies={sfMovies} />
      <h1 className={styles.title}>애니메이션</h1>
      <MovieList movies={animationMovies} />
    </div>
  );
}

export default memo(PageMovie);
