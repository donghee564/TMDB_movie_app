import React, { useEffect, useRef, useState } from "react";
import TrendingMovieItem from "../trending_movie_item/trending_movie_item";
import styles from "./trending_movie_list.module.css";
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";

const TrendingMovieList = ({ movies }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef();
  const slide_length = 3;
  const slide_width = 1300;

  const nextSlide = () => {
    slideIndex >= slide_length
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    slideIndex <= 0
      ? setSlideIndex(slide_length)
      : setSlideIndex(slideIndex - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = `all 0.5s`;
    slideRef.current.style.transform = `translateX(${
      -slide_width * slideIndex
    }px)`;
  }, [slideIndex]);

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
        <ChevronCompactLeft onClick={prevSlide} size={35} />
      </button>
      <button className={styles.rightBtn}>
        <ChevronCompactRight onClick={nextSlide} size={35} />
      </button>
    </section>
  );
};

export default TrendingMovieList;
