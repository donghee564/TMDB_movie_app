import React, { memo, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import PageSearchList from "../page_search_list/page_search_list";
import styles from "./page_search.module.css";

function PageSearch({ list }) {
  return (
    <section className={styles.pageSearch}>
      <PageSearchList list={list} />
    </section>
  );
}

export default memo(PageSearch);
