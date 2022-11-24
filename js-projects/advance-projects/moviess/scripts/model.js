import {apis} from "./config.js";

export async function discoverMovies(){
    return getData(apis.discoverMovies);
}

export async function discoverTvs(){
    return getData(apis.discoverTvs);
} 

export async function getDataAcc(reqText){
    if(reqText === "Movies"){

        return popularMovies();

    } else if(reqText === "Tvs"){

        return popularTvs();

    } else if(reqText === "Trending"){

        return trending();

    } else{

        return kids();

    }
}

export async function popularMovies(){
    return getData(apis.popularMovies);
}

export async function popularTvs(){
    return getData(apis.popularTvs);
}

export async function trending(){
    return getData(apis.trending);
}

export async function kids(){
    return getData(apis.kids);
}

async function getData(api){
    const res = await fetch(api);
    const data = await res.json();
    return data.results;
}