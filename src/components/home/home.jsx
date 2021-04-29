import { useCallback, useEffect, useState } from "react";
import styles from "./home.module.css";
import Trailer from "../trailer/trailer";
import Trending from "../trending/trending";
import Popular from "../popular/popular";

function Home({ tmdb }) {
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
  }, [tmdb, timeMovie, timeTV, type]);

  const handleMovieTimeChange = useCallback(
    (event) => {
      setTimeMovie(event.target.value);
      tmdb
        .trending("movie", timeMovie) //
        .then((result) => {
          setTrendingMovies(result);
        });
    },
    [tmdb, timeMovie]
  );

  const handleTvTimeChange = useCallback(
    (event) => {
      setTimeTV(event.target.value);
      tmdb
        .trending("tv", timeTV) //
        .then((result) => {
          setTrendingTVShows(result);
        });
    },
    [tmdb, timeTV]
  );

  const handleMediaChange = useCallback(
    (event) => {
      setType(event.target.value);
      tmdb
        .popular(type) //
        .then((result) => {
          setPopularList(result);
        });
    },
    [tmdb, type]
  );

  return (
    <div className={styles.home}>
      {/* <Nav /> */}
      <Popular
        list={popularList}
        type={type}
        handleMediaChange={handleMediaChange}
      />
      <Trending
        list={trendingMovies}
        title="영화"
        label="1"
        time={timeMovie}
        handleTimeChange={handleMovieTimeChange}
      />
      <Trailer />
      <Trending
        list={trendingTVShows}
        title="TV 시리즈"
        label="2"
        time={timeTV}
        handleTimeChange={handleTvTimeChange}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
