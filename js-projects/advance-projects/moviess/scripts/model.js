import {apis} from "./config.js";

export async function discoverMovies(){
    const res = await fetch(apis.discoverMovies);
    const data = await res.json();
    return data.results;
}
export async function discoverTvs(){
    const res = await fetch(apis.discoverTvs);
    const data = await res.json();
    return data.results;
} 