import React from "react";
import PageSearchItem from "../page_search_item/page_search_item";
import styles from "./page_search_list.module.css";

function PageSearchList({ list }) {
  return (
    <div className={styles.list}>
      {list.map((item) => {
        return <PageSearchItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default PageSearchList;
