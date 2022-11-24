import apiKey from "../key.js";

const baseApi = `https://api.themoviedb.org/3/`;

export const imgUrl = "https://image.tmdb.org/t/p/w200";
export const bckdrpUrl = "https://image.tmdb.org/t/p/w1280";

export const apis = {
    discoverMovies : `${baseApi}/discover/movie?api_key=${apiKey}`,
    discoverTvs : `${baseApi}/discover/tv?api_key=${apiKey}`,
    popularMovies: `${baseApi}/movie/popular?api_key=${apiKey}`,
    popularTvs: `${baseApi}/tv/popular?api_key=${apiKey}`,
    trending: `${baseApi}/trending/all/day?api_key=${apiKey}`,
    kids: `${baseApi}/discover/movie?api_key=${apiKey}&with_genres=16`,
}
