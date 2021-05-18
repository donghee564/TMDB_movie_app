import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useCallback } from "react";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import ItemDetailModal from "./components/item_detail_modal/item_detail_modal";
import Nav from "./components/nav/nav";
import PageMovie from "./components/page_movie/page_movie";
import PageMyList from "./components/page_my_list/page_my_list";
import PageSearch from "./components/page_search/page_search";
import PageTv from "./components/page_tv/page_tv";

function App({ tmdb }) {
  const [searched, setSearched] = useState([]); //검색 결과
  const [showModal, setShowModal] = useState(false); //디테일 창 스위치
  const [itemDetail, setItemDetail] = useState({}); // 클릭된 아이템 정보
  const [myList, setMyList] = useState([]); // 내 리스트 목록

  // 자세히 보기 버튼 틀릭시 팝업 모달창
  // item 제목이 영화는 title TV시리즈는 name 으로 되어있으므로
  // item.name이 undefined이면 media type을 movie로 전달한다.
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
  // +myList 클릭시 배열에 추가
  const handleAdd = (item) => {
    setMyList([...myList, item]);
  };
  // myList 에서 delete클릭시 배열에서 제거
  const handleDelete = (item) => {
    const newList = myList.filter((movie) => {
      return movie.id !== item.id;
    });
    setMyList(newList);
  };
  //디테일 모달창 닫기
  const handleCloseModal = () => {
    setShowModal(false);
  };
  //디테일 팝업 모달창
  const modal =
    showModal === true ? (
      <ItemDetailModal item={itemDetail} handleCloseModal={handleCloseModal} />
    ) : null;
  //검색 미디어 타입은 멀티 이므로 영화, 티비 시리즈 , 인물 검색 정보가 모두 나온다.
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
      <Nav onSearch={handleSearch} list={myList} />
      <Switch>
        <Route exact path="/">
          <Home tmdb={tmdb} handleModal={handleModal} handleAdd={handleAdd} />
        </Route>
        <Route path="/search">
          <PageSearch list={searched} />
        </Route>
        <Route path="/movie">
          <PageMovie
            tmdb={tmdb}
            handleModal={handleModal}
            handleAdd={handleAdd}
          />
        </Route>
        <Route path="/tv">
          <PageTv tmdb={tmdb} handleModal={handleModal} handleAdd={handleAdd} />
        </Route>
        <Route path="/my_list">
          <PageMyList
            list={myList}
            handleModal={handleModal}
            handleDelete={handleDelete}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
