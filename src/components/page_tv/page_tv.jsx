import React from "react";
import { useState } from "react";
import { memo } from "react";
import { useEffect } from "react";
import PageTvList from "../page_tv_list/page_tv_list";
import SubNavTv from "../sub_nav_tv/sub_nav_tv";
import styles from "./page_tv.module.css";

function PageTv({ tmdb, handleModal, handleAdd }) {
  const [actionTv, setActionTv] = useState([]);
  const [comedyTv, setComedyTv] = useState([]);
  const [sfTv, setSfTv] = useState([]);
  const [animationTv, setAnimationTv] = useState([]);
  const [genre, setGenre] = useState("액션");

  useEffect(() => {
    tmdb
      .popular("tv", "&with_genres=10759") // 액션
      .then((result) => {
        setActionTv(result);
      });
    tmdb
      .popular("tv", "&with_genres=35") // 코미디
      .then((result) => {
        setComedyTv(result);
      });
    tmdb
      .popular("tv", "&with_genres=10765") // SF
      .then((result) => {
        setSfTv(result);
      });
    tmdb
      .popular("tv", "&with_genres=16") // 애니메이션
      .then((result) => {
        setAnimationTv(result);
      });
    return console.log("page TV");
  }, [tmdb]);

  const handleGenreChange = (type) => {
    setGenre(type);
  };

  const seletectedGenre = () => {
    switch (genre) {
      case "액션":
        return actionTv;
      case "코미디":
        return comedyTv;
      case "SF":
        return sfTv;
      case "애니메이션":
        return animationTv;
      default:
        return;
    }
  };

  return (
    <section
      className={styles.wrap}
      style={{
        background: "url('images/black_pattern.png') center center/cover fixed",
      }}
    >
      <div className={styles.movie}>
        <div className={styles.bgLayer}>
          <SubNavTv handleGenreChange={handleGenreChange} />
          <h1 className={styles.title}>{genre}</h1>
          <PageTvList
            list={seletectedGenre()}
            handleModal={handleModal}
            handleAdd={handleAdd}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(PageTv);
