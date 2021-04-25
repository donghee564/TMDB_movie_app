import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.header}>
    <div className={styles.mainBanner}>
      {/* <img
        className={styles.img}
        src="/images/main_banner/gozilla_vs_kong.png"
        alt="gozilla"
      /> */}
    </div>
  </header>
);

export default Header;
