import {apis} from "./config.js";

export async function discoverMovies(){
    return getData(apis.discoverMovies);
}

export async function discoverTvs(){
    return getData(apis.discoverTvs);
} 

export async function getDataAcc(reqText){
    if(reqText === "Movies"){

        return getData(apis.popularMovies);

    } else if(reqText === "Tvs"){

        return getData(apis.popularTvs);

    } else if(reqText === "Trending"){

        return getData(apis.trending);

    } else{

        return getData(apis.kids);

    }
}

async function getData(api){
    const res = await fetch(api);
    const data = await res.json();
    return data.results;
}