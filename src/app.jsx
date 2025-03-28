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
  const [searched, setSearched] = useState([]); // 검색 결과를 저장하는 상태
  const [showModal, setShowModal] = useState(false); // 디테일 창 스위치 상태
  const [itemDetail, setItemDetail] = useState({}); // 클릭된 아이템 정보를 저장하는 상태
  const [myList, setMyList] = useState([]); // 내 리스트 목록을 저장하는 상태

  // API를 호출하여 아이템의 상세 정보를 가져오는 함수
  const fetchDetails = useCallback(
    async (media, id) => {
      try {
        const result = await tmdb.details(media, id);
        setItemDetail(result);
      } catch (error) {
        console.error("Failed to fetch details:", error);
      }
    },
    [tmdb]
  );

  // 자세히 보기 버튼 클릭 시 팝업 모달창을 여는 함수
  // item 제목이 영화는 title, TV 시리즈는 name으로 되어 있으므로
  // item.name이 undefined이면 media type을 movie로 전달한다.
  const handleModal = useCallback(
    (item) => {
      setShowModal(true);
      const mediaType = item.name === undefined ? "movie" : "tv";
      fetchDetails(mediaType, item.id);
    },
    [fetchDetails]
  );

  // +myList 클릭 시 배열에 아이템을 추가하는 함수
  const handleAdd = (item) => {
    setMyList([...myList, item]);
  };

  // myList에서 delete 클릭 시 배열에서 아이템을 제거하는 함수
  const handleDelete = (item) => {
    const newList = myList.filter((movie) => {
      return movie.id !== item.id;
    });
    setMyList(newList);
  };

  // 디테일 모달창을 닫는 함수
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 디테일 팝업 모달창을 렌더링하는 변수
  const modal =
    showModal === true ? (
      <ItemDetailModal item={itemDetail} handleCloseModal={handleCloseModal} />
    ) : null;

  // 검색 미디어 타입은 멀티이므로 영화, TV 시리즈, 인물 검색 정보가 모두 나온다.
  const handleSearch = useCallback(
    (query) => {
      tmdb
        .search("multi", query) //
        .then((result) => {
          setSearched(result);
        })
        .catch((error) => {
          console.error("Failed to search:", error);
        });
    },
    [tmdb]
  );

  return (
    <div className={styles.app} role="main">
      {modal}
      <Nav onSearch={handleSearch} list={myList} />
      <div className={styles.container}>
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
            <PageTv
              tmdb={tmdb}
              handleModal={handleModal}
              handleAdd={handleAdd}
            />
          </Route>
          <Route path="/my_list">
            <PageMyList
              list={myList}
              handleModal={handleModal}
              handleDelete={handleDelete}
            />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
