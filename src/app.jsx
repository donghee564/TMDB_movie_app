import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useState, useCallback } from "react/cjs/react.development";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import PageSearch from "./components/page_search/page_search";

function App({ tmdb }) {
  const [searched, setSearched] = useState([]); //검색 결과

  const handleSearch = useCallback(
    (query) => {
      tmdb
        .search("multi", query) //
        .then((result) => {
          setSearched(result);
        });
    },
    [tmdb]
  );

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Nav onSearch={handleSearch} />
        <Route exact path="/">
          <Home tmdb={tmdb} />
        </Route>
        <Route path="/search">
          <PageSearch list={searched} tmdb={tmdb} />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
