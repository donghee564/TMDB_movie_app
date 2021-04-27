import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Nav from "./components/nav/nav";
import Trending from "./components/trending/trending";

function App({ tmdb }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTVShows, setTrendingTVShows] = useState([]);

  useEffect(() => {
    tmdb
      .trending("movie") //
      .then((result) => {
        setTrendingMovies(result);
      });

    tmdb
      .trending("tv") //
      .then((result) => {
        setTrendingTVShows(result);
      });
  }, [tmdb]);

  return (
    <div className={styles.app}>
      <Nav />
      <Trending list={trendingMovies} />
      <Trending list={trendingTVShows} />
    </div>
  );
}

export default App;
