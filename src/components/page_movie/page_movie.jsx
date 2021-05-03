import React from "react";
import { useState } from "react";
import { memo } from "react";
import { useEffect } from "react";
import MovieList from "../movie_list/movie_list";
import styles from "./page_movie.module.css";

function PageMovie({ tmdb, handleModal }) {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [sfMovies, setSfMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);

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
    tmdb
      .popular("movie", "&with_genres=27") //
      .then((result) => {
        setHorrorMovies(result);
      });
    console.log("rendering page movie");
  }, [tmdb]);

  return (
    <section
      className={styles.wrap}
      style={{
        background: "url('images/page_movie_bg.jpg') center center/cover fixed",
      }}
    >
      <div className={styles.movie}>
        <h1 className={styles.pageTitle}>장르별 인기영화</h1>
        <h1 className={styles.title}>액션</h1>
        <MovieList movies={actionMovies} handleModal={handleModal} />
        <div className={styles.bgLayer}>
          <h1 className={styles.title}>코미디</h1>
          <MovieList movies={comedyMovies} handleModal={handleModal} />
        </div>
        <h1 className={styles.title}>SF</h1>
        <MovieList movies={sfMovies} handleModal={handleModal} />
        <h1 className={styles.title}>애니메이션</h1>
        <MovieList movies={animationMovies} handleModal={handleModal} />
        <h1 className={styles.title}>호러</h1>
        <MovieList movies={horrorMovies} handleModal={handleModal} />
      </div>
    </section>
  );
}

export default memo(PageMovie);
