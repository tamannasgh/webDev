import {apis} from "./config.js";

export async function discoverMovies(){
    const data = await getData(apis.discoverMovies);
    return data.results;
}

export async function discoverTvs(){
    const data = await getData(apis.discoverTvs);
    return data.results;
} 

export async function getMovieOrTvDetail(id, type){
    let api;
    if(type === "movie"){
        api = apis.movieDetail.replace("ID", id);
    } else{
        api = apis.tvDetail.replace("ID", id);
    }

    return getData(api);
}

export async function getDataAcc(reqText){
    let data;
    if(reqText === "Movies"){

        data = await getData(apis.popularMovies);

    } else if(reqText === "Tvs"){

        data = await getData(apis.popularTvs);

    } else if(reqText === "Trending"){

        data = await getData(apis.trending);

    } else{

        data = await getData(apis.kids);

    }

    return data.results;
}

export async function search(query){
    const data = await getData(apis.search.replace("QUERY", query) );
    return data.results;

}

async function getData(api){
    const res = await fetch(api);
    const data = await res.json();
    return data;
}