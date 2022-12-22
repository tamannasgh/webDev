import {apis} from "./config.js";

export const data = {
    page: "home",
    pageTitle: "Discover",
    result: [],
    currentPageNos : {
        Home: 1,
        Movies: 1,
        Tvs: 1,
        Trending: 1,
        Kids: 1,
    },
    cardClicked: undefined,
    cardClickedFromPage: undefined,

}


let api;

export async function discoverMovies(pageNum){

    const data = await getData(apis.discoverMovies, pageNum);
    return data.results;
}

export async function discoverTvs(pageNum){ 

    const data = await getData(apis.discoverTvs, pageNum);
    return data.results;
} 

export async function getMovieOrTvDetail(id, type){
      
    if(type === "movie"){
        api = apis.movieDetail;
    } else{
        api = apis.tvDetail;
    }
    api = api.replace("ID", id);

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

    const data = await getData(api, pageNum);
    return data.results;
}

export async function search(query, pageNum){
    
    const data = await getData(apis.search.replace("QUERY", query), pageNum );
    return data.results;

}

async function getData(api, pageNum){
    
    if(pageNum){
        api += `&page=${pageNum}`;
    } else{
        api += `&page=1`;
    }

    const res = await fetch(api);
    const data = await res.json();
    return data;
}