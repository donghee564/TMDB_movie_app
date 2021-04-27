import axios from "axios";

class Tmdb {
  constructor(key) {
    this.key = key;
  }

  async trending(type) {
    const result = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${this.key}&time_window=week&language=ko-KR`
    );
    return result.data.results;
  }
}

export default Tmdb;
