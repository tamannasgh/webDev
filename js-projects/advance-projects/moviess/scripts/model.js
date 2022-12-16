import {apis} from "./config.js";

let api;

export async function discoverMovies(pageNum){
    
    api = apis.discoverMovies;

    if(pageNum){
        api += `&page=${pageNum}`;
    } else{
        api += `&page=1`;
    }

    const data = await getData(api);
    return data.results;
}

export async function discoverTvs(pageNum){ 

    api = apis.discoverTvs

    if(pageNum){
        api += `&page=${pageNum}`;
    } else{
        api += `&page=1`;
    }

    const data = await getData(api);
    return data.results;
} 

export async function getMovieOrTvDetail(id, type, pageNum){
      
    if(type === "movie"){
        api = apis.movieDetail;
        api = api.replace("ID", id);
    } else{
        api = apis.tvDetail;
        api = api.replace("ID", id);
    }

    if(pageNum){
        api += `&page=${pageNum}`;
    } else{
        api += `&page=1`;
    }
    
    return getData(api);
}

export async function getDataAcc(reqText, pageNum){

    if(reqText === "Movies"){

        api = apis.popularMovies;

    } else if(reqText === "Tvs"){

        api = apis.popularTvs;

    } else if(reqText === "Trending"){

       api = apis.trending;

    } else{

        api = apis.kids;

    }

    if(pageNum){
        api += `&page=${pageNum}`;
    } else{
        api += `&page=1`;
    }

    const data = await getData(api);
    return data.results;
}

export async function search(query, pageNum){
    
    api = apis.search;

    if(pageNum){
        api += `&page=${pageNum}`;
    } else{
        api += `&page=1`;
    }

    const data = await getData(api.replace("QUERY", query) );
    return data.results;

}

async function getData(api){
    const res = await fetch(api);
    const data = await res.json();
    return data;
}