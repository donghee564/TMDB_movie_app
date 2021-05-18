### TMDb 퍼블릭 API를 활용한 영화, TV 시리즈, 인물 정보 웹.
데모: https://donghee564.github.io/TMDB_movie_app/#/ <br>
create-react-app<br>
BenchMark: TMDb https://www.themoviedb.org/

#### 구조와 기능 요약
1. nav 메뉴 <br>
 로고<br>
 검색: 검색어 입력후 엔터를 누르거나 검색 아이콘을 클릭하면 검색 페이지로 이동하여 검색결과를 보여준다. (영화, TV, 인물 검색) <br>
 주 메뉴: 클릭하면 각자의 페이지(홈, 영화, TV, MyList)로 이동한다. (라우터를 통한 링크)
 
2. Routes: 
   - Home (/): 
      * 인기 리스트: 미디어 타입 별 인기순위 1 ~ 20 (영화, TV)
      * 트랜딩 영화 리스트: 순위상승이 높은 목록, 집계 시간 선택 가능(오늘, 이번주)
      * 트레일러: Youtube iframe 을 이용한 영화 트레일러 (react-responsive-carousel 플러그인 사용)
      * 트랜딩 티비 리스트: 순위상승이 높은 목록, 집계 시간 선택 가능(오늘, 이번주)
   - 영화 (/movie)
      * 페이지 nav 메뉴: 장르 선택 메뉴, default menu: 액션
      * 장르별 영화 목록 20개
   - TV (/Tv)
      * 페이지 nav 메뉴: 장르 선택 메뉴, default menu: 액션
      * 장르별 TV 시리즈 목록 20개
   - My List (/MyList) 
      * 내 리스트에 추가한 영화, TV 목록
      * Delete 눌러서 목록 배열에서 삭제할수 있다.
      * 목록의 갯수는 목록 배열의 length를 측정해서 나타낸다.
   - Search (/search)
      * 검색 결과가 나오는 페이지 (영화, TV 시리즈, 인물)
 
3. Components
   - movie-item - 영화, TV 시리즈 포스터(클릭시 내리스트에 저장), rating, like, 자세히 보기 버튼, 내 리스트에 추가 버튼
   - item-detail-modal - 자세히 보기 클릭시 나오는 아이템에 대한 세부 정보. 개봉일, 시작일, 장르 정보, 아이템 줄거리, 러닝타임(티비시리즈는 에피소드 개수와 에피소드 러닝타임)

#### 사용 라이브러리
 - axios
 - react-router
 - react-bootstrap-icons
 - react-responsive-carousel

#### 추가

- 깃헙 페이지에 배포하기 위하여 HashRouter를 사용하였는데 Type 에러가 뜨고 화면이 안나온다.. ( import부분 Typo 였다.) 

- 너무 많은 API call 을 하는것 같다.. 종합된 하나의 API call에서 원하는 정보만 추리고싶은데 (현재 미디어 선택, 시간 선택 할때마다 새로운 API를 호출함) 
 하나의 API call 마다 max result가 1페이지 20개의 아이템인거 같다. 뭔가 더 효율적인 방법이 있을듯...?

- Route 가 많아지고 자식 components 들이 많아 지면서 props 를 전달하는데 어려움이 있다. 일일히 다 전달해주긴 했는데 더 효율적인 방법을 찾아야 할것같다.
( context API ??  component injection ?? 을 공부해서 적용해보기. )

- 반응형 추가하기.
