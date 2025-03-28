import React from "react";
import { useState } from "react";
import { memo } from "react";
import { useEffect } from "react";
import PageMovieList from "../page_movie_list/page_movie_list";
import SubNav from "../sub_nav/sub_nav";
import styles from "./page_movie.module.css";

function PageMovie({ tmdb, handleModal, handleAdd }) {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [sfMovies, setSfMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [genre, setGenre] = useState("액션");

  useEffect(() => {
    tmdb
      .popular("movie", "&with_genres=28") // 액션
      .then((result) => {
        setActionMovies(result);
      });
    tmdb
      .popular("movie", "&with_genres=35") // 코미디
      .then((result) => {
        setComedyMovies(result);
      });
    tmdb
      .popular("movie", "&with_genres=878") // SF
      .then((result) => {
        setSfMovies(result);
      });
    tmdb
      .popular("movie", "&with_genres=16") // 애니메이션
      .then((result) => {
        setAnimationMovies(result);
      });
    tmdb
      .popular("movie", "&with_genres=27") // 호러
      .then((result) => {
        setHorrorMovies(result);
      });
    return console.log("page movie");
  }, [tmdb]);

  const handleGenreChange = (type) => {
    setGenre(type);
  };

  const seletectedGenre = () => {
    switch (genre) {
      case "액션":
        return actionMovies;
      case "코미디":
        return comedyMovies;
      case "SF":
        return sfMovies;
      case "애니메이션":
        return animationMovies;
      case "호러":
        return horrorMovies;
      default:
        return;
    }
  };

  return (
    <section
      className={styles.wrap}
      style={{
        background: "url('images/page_movie_bg.jpg') center center/cover fixed",
      }}
    >
      <div className={styles.movie}>
        <SubNav handleGenreChange={handleGenreChange} />
        <h1 className={styles.title}>{genre}</h1>
        <PageMovieList
          list={seletectedGenre()}
          handleModal={handleModal}
          handleAdd={handleAdd}
        />
      </div>
    </section>
  );
}

export default memo(PageMovie);
