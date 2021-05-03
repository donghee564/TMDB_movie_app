import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useState, useCallback } from "react/cjs/react.development";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import ItemDetailModal from "./components/item_detail_modal/item_detail_modal";
import Nav from "./components/nav/nav";
import PageMovie from "./components/page_movie/page_movie";
import PageSearch from "./components/page_search/page_search";

function App({ tmdb }) {
  const [searched, setSearched] = useState([]); //검색 결과
  const [showModal, setShowModal] = useState(false); //디테일 창 스위치
  const [itemDetail, setItemDetail] = useState({}); // 클릭된 아이템 정보

  const handleModal = useCallback(
    (item) => {
      setShowModal(true);
      if (item.name === undefined) {
        tmdb
          .details("movie", item.id) //
          .then((result) => {
            setItemDetail(result);
          });
      } else {
        tmdb
          .details("tv", item.id) //
          .then((result) => {
            setItemDetail(result);
          });
      }
    },
    [tmdb]
  );

  const handleCloseModal = () => {
    //디테일 모달창 닫기
    setShowModal(false);
  };

  const modal =
    showModal === true ? (
      <ItemDetailModal item={itemDetail} handleCloseModal={handleCloseModal} />
    ) : null;

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
      {modal}
      <BrowserRouter>
        <Nav onSearch={handleSearch} />
        <Route exact path="/">
          <Home tmdb={tmdb} handleModal={handleModal} />
        </Route>
        <Route exact path="/search">
          <PageSearch list={searched} />
        </Route>
        <Route exact path="/movie">
          <PageMovie tmdb={tmdb} handleModal={handleModal} />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
