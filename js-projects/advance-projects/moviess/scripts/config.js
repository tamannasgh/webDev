import apiKey from "../key.js";

const baseApi = `https://api.themoviedb.org/3/`;

export const imgUrl = "https://image.tmdb.org/t/p/w200";
export const bckdrpUrl = "https://image.tmdb.org/t/p/w1280";

export const apis = {
    discoverMovies : `${baseApi}/discover/movie?api_key=${apiKey}`,
    discoverTvs : `${baseApi}/discover/tv?api_key=${apiKey}`,
    popularMovies: `${baseApi}/movie/popular?api_key=${apiKey}&page=2`,
    popularTvs: `${baseApi}/tv/popular?api_key=${apiKey}&page=2`,
    trending: `${baseApi}/trending/all/day?api_key=${apiKey}`,
    kids: `${baseApi}/discover/movie?api_key=${apiKey}&with_genres=16`,
    movieDetail: `${baseApi}/movie/ID?api_key=${apiKey}&append_to_response=videos,credits`,
    tvDetail: `${baseApi}/tv/ID?api_key=${apiKey}&append_to_response=videos,credits`,
}
