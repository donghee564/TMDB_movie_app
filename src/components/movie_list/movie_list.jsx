import React, { memo, useEffect, useRef, useState } from "react";
import MovieItem from "../movie_item/movie_item";
import styles from "./movie_list.module.css";
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";

const TrendingMovieList = ({ movies }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideLength, setSlideLength] = useState(0);
  const slideRef = useRef();
  const slide_width_ref = useRef();

  const nextSlide = () => {
    slideIndex >= slideLength - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    slideIndex <= 0
      ? setSlideIndex(slideLength - 1)
      : setSlideIndex(slideIndex - 1);
  };

  useEffect(() => {
    const slide_list_length = slideRef.current.offsetWidth;
    const slide_width = slide_width_ref.current.offsetWidth;
    const slide_length = Math.floor(slide_list_length / slide_width);
    setSlideLength(slide_length);
    slideRef.current.style.transition = `all 0.5s`;
    slideRef.current.style.transform = `translateX(${
      -slide_width * slideIndex
    }px)`;
  }, [slideIndex, slide_width_ref]);

  return (
    <div className={styles.movies}>
      <div ref={slide_width_ref} className={styles.moviesWrap}>
        <ul ref={slideRef} className={styles.movieList}>
          {movies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </ul>
      </div>
      <button className={styles.leftBtn} onClick={prevSlide}>
        <ChevronCompactLeft size={35} />
      </button>
      <button className={styles.rightBtn} onClick={nextSlide}>
        <ChevronCompactRight size={35} />
      </button>
    </div>
  );
};

export default memo(TrendingMovieList);
