import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import Trailer from "./components/trailer/trailer";
import Trending from "./components/trending/trending";

function App({ tmdb }) {
  const [trendingMovies, setTrendingMovies] = useState([]); //영화리스트
  const [trendingTVShows, setTrendingTVShows] = useState([]); //TV시리즈 리스트
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
  }, [tmdb, timeMovie, timeTV]);

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

  return (
    <div className={styles.app}>
      <Nav />
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
      <Footer />
    </div>
  );
}

export default App;
