import React, { memo } from "react";
import PageSearchList from "../page_search_list/page_search_list";
import styles from "./page_search.module.css";

function PageSearch({ list }) {
  const result = list[0] === undefined ? "검색 결과가 없습니다." : "검색 결과";

  return (
    <section className={styles.pageSearch}>
      <h1 className={styles.title}>{result}</h1>
      <PageSearchList list={list} />
    </section>
  );
}

export default memo(PageSearch);
