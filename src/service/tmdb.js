import axios from "axios";

class Tmdb {
  constructor(key) {
    this.key = key;
  }

  async trendingMovies() {
    const result = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${this.key}&media_type=movie&time_window=week&language=ko-KR`
    );
    return result.data.results;
  }
}

export default Tmdb;
