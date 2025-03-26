import React, { useEffect, useRef } from "react";
import styles from "./item_detail_modal.module.css";

function ItemDetailModal({ item, handleCloseModal }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const title = item.title === undefined ? item.name : item.title;
  const genres = item.genres && item.genres.map((item) => item.name).join(", ");
  const releaseDate =
    item.release_date === undefined
      ? "시작일: " + item.first_air_date
      : "개봉일: " + item.release_date;

  const runTime = item.runtime ? item.runtime + "분" : null;
  const episodeRunTime =
    item.episode_run_time && item.episode_run_time.length > 0
      ? "에피소드 길이: " + item.episode_run_time + "분"
      : null;
  const seasonNumber = item.number_of_seasons
    ? "시즌 수: " + item.number_of_seasons
    : null;
  const episodeNumber = item.number_of_episodes
    ? "에피소드 수: " + item.number_of_episodes
    : null;

  // 컴포넌트 마운트 시 포커스 설정 및 키보드 이벤트 리스너 등록
  useEffect(() => {
    // 모달이 열리면 닫기 버튼에 포커스 설정
    closeButtonRef.current.focus();

    // ESC 키 처리를 위한 이벤트 리스너
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    // 모달 내에서 포커스 트랩 구현
    const handleTabKey = (event) => {
      if (event.key === "Tab") {
        // 모달 내부의 포커스 가능한 요소들
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        // Shift+Tab을 누르고 첫 번째 요소에 있을 때
        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
        // Tab을 누르고 마지막 요소에 있을 때
        else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    modalRef.current.addEventListener("keydown", handleTabKey);

    // 스크롤 방지
    document.body.style.overflow = "hidden";

    // 컴포넌트 언마운트 시 이벤트 리스너 제거 및 스크롤 복원
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (modalRef.current) {
        modalRef.current.removeEventListener("keydown", handleTabKey);
      }
      document.body.style.overflow = "auto";
    };
  }, [handleCloseModal]);

  return (
    <div className={styles.wrap} role="presentation">
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {item.poster_path ? (
          <img
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
            alt={`${title} 포스터 이미지`}
          />
        ) : (
          <div className={styles.poster} aria-label="포스터 이미지 없음">
            이미지 없음
          </div>
        )}

        <div className={styles.textBox}>
          <h1 id="modal-title" className={styles.title}>
            {title}
          </h1>

          <ul className={styles.infos} aria-label="기본 정보">
            {releaseDate && (
              <li className={styles.info}>
                <p>{releaseDate}</p>
              </li>
            )}
            {genres && (
              <li className={styles.info}>
                <p>장르: {genres}</p>
              </li>
            )}
            {runTime && (
              <li className={styles.info}>
                <p>상영 시간: {runTime}</p>
              </li>
            )}
          </ul>

          {item.vote_average !== undefined && (
            <p className={styles.average} aria-label="평점">
              평점 {item.vote_average.toFixed(1)}
            </p>
          )}

          {item.tagline && <h2 className={styles.tagline}>{item.tagline}</h2>}

          {/* TV 시리즈 관련 정보가 있는 경우에만 표시 */}
          {(seasonNumber || episodeNumber || episodeRunTime) && (
            <ul className={styles.tvInfos} aria-label="TV 시리즈 정보">
              {seasonNumber && (
                <li className={styles.tvInfo}>{seasonNumber}</li>
              )}
              {episodeNumber && (
                <li className={styles.tvInfo}>{episodeNumber}</li>
              )}
              {episodeRunTime && (
                <li className={styles.tvInfo}>{episodeRunTime}</li>
              )}
            </ul>
          )}

          {item.overview && (
            <>
              <h3 className={styles.subTitle}>개요</h3>
              <p className={styles.overview}>{item.overview}</p>
            </>
          )}

          <button
            ref={closeButtonRef}
            className={styles.button}
            onClick={handleCloseModal}
            aria-label="모달 닫기"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailModal;
