import React from "react";
import { memo } from "react";
import PageMyListItems from "../page_my_list_items/page_my_list_items";
import styles from "./page_my_list.module.css";

const PageMyList = ({ list, handleModal, handleDelete }) => (
  <section
    style={{
      background: "url('images/raya.jpg') top center/cover fixed",
    }}
    className={styles.myList}
  >
    <div className={styles.bgLayer}>
      <h1 className={styles.pageTitle}>My List</h1>
      <PageMyListItems
        list={list}
        handleModal={handleModal}
        handleDelete={handleDelete}
      />
    </div>
  </section>
);

export default memo(PageMyList);
