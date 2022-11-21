import apiKey from "../key.js";

const baseApi = `https://api.themoviedb.org/3/`;

export const imgUrl = "https://image.tmdb.org/t/p/w200";
export const bckdrpUrl = "https://image.tmdb.org/t/p/w1280";

export const apis = {
    discoverMovies : `${baseApi}/discover/movie?api_key=${apiKey}`,
    discoverTvs : `${baseApi}/discover/tv?api_key=${apiKey}`,
}
