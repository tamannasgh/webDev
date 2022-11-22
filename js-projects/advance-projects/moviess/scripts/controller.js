import { discoverTvs, discoverMovies } from "./model.js";

import homeView from "./views/homeView.js";






// home view  ------------------------------


async function start(){
    try{
        const moviesData = await discoverMovies();
        const tvsData = await discoverTvs();
        homeView.renderPage(moviesData, tvsData);
    } catch(err) {
        console.log(err);
    }
    
}











homeView.addEventListeners();



// starting the code
start();