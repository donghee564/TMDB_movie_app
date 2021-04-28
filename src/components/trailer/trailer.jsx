import React from "react";
import styles from "./trailer.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./customize-carousel.css";

function Trailer() {
  return (
    <section className={styles.trailer}>
      <div className={styles.bgFilter}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>최신 영화 예고편</h1>
          <Carousel
            width={1200}
            showThumbs={false}
            autoPlay={true}
            stopOnHover={true}
            infiniteLoop={true}
            interval={7000}
            showStatus={false}
          >
            <iframe
              className={styles.video}
              width="850"
              height="647"
              src="https://www.youtube.com/embed/azmj2rqKT2k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className={styles.video}
              width="850"
              height="647"
              src="https://www.youtube.com/embed/bk_NovwlIA0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className={styles.video}
              width="850"
              height="647"
              src="https://www.youtube.com/embed/v4uXX7e_yik"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Trailer;
