import axios from "axios";

class Tmdb {
  constructor(key) {
    this.key = key;
  }
  //트랜딩 리스트
  async trending(type, time) {
    const result = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/${time}?api_key=${this.key}&time_window=week&language=ko-KR`
    );
    return result.data.results;
  }
  //인기 리스트
  async popular(type, genre) {
    const result = await axios.get(
      `https://api.themoviedb.org/3/${type}/popular?api_key=${this.key}&language=ko-KR${genre}`
    );
    return result.data.results;
  }
  //검색
  async search(category, query) {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/${category}?api_key=${this.key}&language=ko-KR&page=1&include_adult=false&query=${query}`
    );
    return result.data.results;
  }
  //디테일 정보창
  async details(media, id) {
    const result = await axios.get(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=${this.key}&language=ko-KR`
    );
    return result.data;
  }
}

export default Tmdb;
