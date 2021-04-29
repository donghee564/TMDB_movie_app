import axios from "axios";

class Tmdb {
  constructor(key) {
    this.key = key;
  }

  async trending(type, time) {
    const result = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/${time}?api_key=${this.key}&time_window=week&language=ko-KR`
    );
    return result.data.results;
  }

  async popular(type) {
    const result = await axios.get(
      `https://api.themoviedb.org/3/${type}/popular?api_key=${this.key}&language=ko-KR`
    );
    return result.data.results;
  }

  async search(category, query) {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/${category}?api_key=${this.key}&language=ko-KR&page=1&include_adult=false&query=${query}`
    );
    return result.data.results;
  }

  // async genre(media) {
  //   const result = await axios.get(
  //     `https://api.themoviedb.org/3/genre/${media}/list?api_key=${this.key}&language=ko-KR`
  //   );
  //   return result.data.genres;
  // }
}

export default Tmdb;
