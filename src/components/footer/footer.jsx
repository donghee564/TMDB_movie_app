import React from "react";
import styles from "./footer.module.css";
import {
  Facebook,
  Instagram,
  Twitter,
  Twitch,
  Youtube,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.logoWrap}>
          <img
            className={styles.logo}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="sqaure logo"
          />
          <ul className={styles.sns}>
            <li>
              <a href="https://www.facebook.com">
                <Facebook size={25} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <Instagram size={25} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <Twitter size={25} />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.com">
                <Twitch size={25} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <Youtube size={25} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerBox}>
          <ul className={styles.menuBox}>
            <li>
              안내
              <ul className={styles.subMenu}>
                <li>문의하기</li>
                <li>Support Forums</li>
                <li>API</li>
                <li>System Status</li>
              </ul>
            </li>
            <li>
              참여하기
              <ul className={styles.subMenu}>
                <li>기여 지침서</li>
                <li>타사 응용프로그램</li>
              </ul>
            </li>
            <li>
              커뮤니티
              <ul className={styles.subMenu}>
                <li>토론내역</li>
                <li>가이드라인</li>
                <li></li>
                <li>System Status</li>
              </ul>
            </li>
            <li>
              법적사항
              <ul className={styles.subMenu}>
                <li>서비스 이용약관</li>
                <li>개인정보약관</li>
                <li>API Terms of Use</li>
              </ul>
            </li>
          </ul>

          <p className={styles.copyright}>© 2021 by DH Han, TMDB.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
