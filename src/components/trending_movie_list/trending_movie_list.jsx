import React, { useRef } from "react";
import TrendingMovieItem from "../trending_movie_item/trending_movie_item";
import styles from "./trending_movie_list.module.css";
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";

const TrendingMovieList = ({ movies }) => {
  const slideRef = useRef();

  const handleClick = () => {
    console.log("wefwe");
  };

  return (
    <section className={styles.movies}>
      <h1 className={styles.title}>트렌딩 영화</h1>
      <div className={styles.moviesWrap}>
        <ul ref={slideRef} className={styles.movieList}>
          {movies.map((movie) => (
            <TrendingMovieItem movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
      <button className={styles.leftBtn}>
        <ChevronCompactLeft size={35} />
      </button>
      <button className={styles.rightBtn}>
        <ChevronCompactRight onClick={handleClick} size={35} />
      </button>
    </section>
  );
};

export default TrendingMovieList;
