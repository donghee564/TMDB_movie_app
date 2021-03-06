import { useCallback, useEffect, useState } from "react";
import styles from "./home.module.css";
import Trailer from "../trailer/trailer";
import Trending from "../trending/trending";
import Popular from "../popular/popular";
import { memo } from "react/cjs/react.production.min";

function Home({ tmdb, handleModal, handleAdd }) {
  const [trendingMovies, setTrendingMovies] = useState([]); //영화리스트
  const [trendingTVShows, setTrendingTVShows] = useState([]); //TV시리즈 리스트
  const [popularList, setPopularList] = useState([]); //인기리스트
  const [type, setType] = useState("tv"); //인기리스트 미디어 선택
  const [timeMovie, setTimeMovie] = useState("day"); //영화 일간, 주간 시간선택
  const [timeTV, setTimeTV] = useState("day"); //TV시리즈 일간, 주간 시간선택

  useEffect(() => {
    tmdb
      .trending("movie", timeMovie) //
      .then((result) => {
        setTrendingMovies(result);
      });

    tmdb
      .trending("tv", timeTV) //
      .then((result) => {
        setTrendingTVShows(result);
      });

    tmdb
      .popular(type) //
      .then((result) => {
        setPopularList(result);
      });
    return console.log("main page");
  }, [tmdb, timeMovie, timeTV, type]);

  const handleMovieTimeChange = useCallback((event) => {
    setTimeMovie(event.target.value);
  }, []);

  const handleTvTimeChange = useCallback((event) => {
    setTimeTV(event.target.value);
  }, []);

  const handleMediaChange = useCallback((event) => {
    setType(event.target.value);
  }, []);

  return (
    <section
      className={styles.home}
      style={{
        background: "url('images/gvk.png') center center/cover fixed",
      }}
    >
      <div className={styles.bgLayer}>
        <Popular
          list={popularList}
          type={type}
          handleMediaChange={handleMediaChange}
          handleModal={handleModal}
          handleAdd={handleAdd}
        />
        <Trending
          list={trendingMovies}
          title="영화"
          label="1"
          time={timeMovie}
          handleTimeChange={handleMovieTimeChange}
          handleModal={handleModal}
          handleAdd={handleAdd}
        />
      </div>
      <Trailer />
      <div className={styles.bgLayer}>
        <Trending
          list={trendingTVShows}
          title="TV 시리즈"
          label="2"
          time={timeTV}
          handleTimeChange={handleTvTimeChange}
          handleModal={handleModal}
          handleAdd={handleAdd}
        />
      </div>
    </section>
  );
}

export default memo(Home);
