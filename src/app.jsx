import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useCallback, useRef } from "react";
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
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가
  const lastFocusedElementRef = useRef(null); // 모달 열기 전 포커스 요소 저장

  // API를 호출하여 아이템의 상세 정보를 가져오는 함수
  const fetchDetails = async (media, id) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await tmdb.details(media, id);
      setItemDetail(result);
    } catch (error) {
      console.error("Failed to fetch details:", error);
      setError(
        "콘텐츠 상세 정보를 불러오는데 실패했습니다. 다시 시도해 주세요."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // 자세히 보기 버튼 클릭 시 팝업 모달창을 여는 함수
  const handleModal = useCallback(
    (item) => {
      // 현재 포커스된 요소 저장
      lastFocusedElementRef.current = document.activeElement;
      setShowModal(true);
      const mediaType = item.name === undefined ? "movie" : "tv";
      fetchDetails(mediaType, item.id);

      // 스크린 리더를 위한 알림
      document.getElementById("status-announcer").textContent =
        "상세 정보 창이 열렸습니다.";
    },
    [tmdb]
  );

  // +myList 클릭 시 배열에 아이템을 추가하는 함수
  const handleAdd = (item) => {
    setMyList([...myList, item]);
    // 스크린 리더를 위한 알림
    document.getElementById("status-announcer").textContent = `${
      item.title || item.name
    } 항목이 내 리스트에 추가되었습니다.`;
  };

  // myList에서 delete 클릭 시 배열에서 아이템을 제거하는 함수
  const handleDelete = (item) => {
    const newList = myList.filter((movie) => {
      return movie.id !== item.id;
    });
    setMyList(newList);
    // 스크린 리더를 위한 알림
    document.getElementById("status-announcer").textContent = `${
      item.title || item.name
    } 항목이 내 리스트에서 삭제되었습니다.`;
  };

  // 디테일 모달창을 닫는 함수
  const handleCloseModal = () => {
    setShowModal(false);
    // 모달 닫을 때 원래 포커스로 돌아가기
    if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
    }
    // 스크린 리더를 위한 알림
    document.getElementById("status-announcer").textContent =
      "상세 정보 창이 닫혔습니다.";
  };

  // 디테일 팝업 모달창을 렌더링하는 변수
  const modal =
    showModal === true ? (
      <ItemDetailModal
        item={itemDetail}
        handleCloseModal={handleCloseModal}
        isLoading={isLoading}
      />
    ) : null;

  // 검색 미디어 타입은 멀티이므로 영화, TV 시리즈, 인물 검색 정보가 모두 나온다.
  const handleSearch = useCallback(
    (query) => {
      setIsLoading(true);
      setError(null);
      tmdb
        .search("multi", query) //
        .then((result) => {
          setSearched(result);
          // 스크린 리더를 위한 알림
          const resultCount = result.length;
          document.getElementById(
            "status-announcer"
          ).textContent = `검색 완료. ${resultCount}개의 결과가 있습니다.`;
        })
        .catch((error) => {
          console.error("Failed to search:", error);
          setError("검색 중 오류가 발생했습니다. 다시 시도해 주세요.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [tmdb]
  );

  return (
    <div className={styles.app}>
      {/* 시맨틱 요소를 사용하여 웹 접근성 향상 */}
      {/* 스크린 리더에게 상태 변경을 알리기 위한 숨겨진 엘리먼트 */}
      <div
        id="status-announcer"
        className="sr-only"
        aria-live="polite"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: "0",
        }}
      ></div>

      {modal}

      <header>
        <Nav onSearch={handleSearch} list={myList} />
      </header>

      <main>
        {/* 에러 표시 */}
        {error && (
          <div role="alert" className={styles.errorMessage}>
            {error}
          </div>
        )}

        {/* 로딩 상태 표시 */}
        {isLoading && !showModal && (
          <div aria-live="polite" className={styles.loadingIndicator}>
            콘텐츠를 불러오는 중입니다...
          </div>
        )}

        <Switch>
          <Route exact path="/">
            <Home tmdb={tmdb} handleModal={handleModal} handleAdd={handleAdd} />
          </Route>
          <Route path="/search">
            <PageSearch list={searched} isLoading={isLoading} />
          </Route>
          <Route path="/movie">
            <PageMovie
              tmdb={tmdb}
              handleModal={handleModal}
              handleAdd={handleAdd}
              isLoading={isLoading}
            />
          </Route>
          <Route path="/tv">
            <PageTv
              tmdb={tmdb}
              handleModal={handleModal}
              handleAdd={handleAdd}
              isLoading={isLoading}
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
