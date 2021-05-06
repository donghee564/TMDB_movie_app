import React from "react";
import { memo } from "react";
import PageMyListItem from "../page_my_list_item/page_my_list_item";
import styles from "./page_my_list_items.module.css";

function PageMyListItems({ list, handleModal, handleDelete }) {
  return (
    <ul className={styles.list}>
      {list.map((item) => {
        return (
          <PageMyListItem
            item={item}
            key={item.id}
            handleModal={handleModal}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}

export default memo(PageMyListItems);
