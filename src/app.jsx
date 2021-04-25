import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import TrendingMovieList from "./components/trending_movie_list/trending_movie_list";

function App({ tmdb }) {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    tmdb
      .trendingMovies() //
      .then((result) => {
        setTrendingMovies(result);
      });
  }, [tmdb]);

  return (
    <div className={styles.app}>
      <Nav />
      {/* <Header /> */}
      <TrendingMovieList movies={trendingMovies} />
    </div>
  );
}

export default App;
