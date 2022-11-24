import { discoverTvs, discoverMovies, getDataAcc } from "./model.js";

import homeView from "./views/homeView.js";
import commonView from "./views/commonView.js"



const navbar = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");



// navbar ------------------------------------

navbar.addEventListener("click", function(e){
    if(e.target.classList.contains("logo")){
        start();
    }
});

navLinks.addEventListener("click", function(e){
    console.log(e.target);

    if(! (e.target.classList.contains("other-pages-link")) ) return;

    if(e.target.dataset.name === "Bookmarks"){
        console.log("Im Bookmarks");
        return;
    }

    handleNavLinkClick(e);
});

async function handleNavLinkClick(e){

    const title = e.target.dataset.name;
    const data = await getDataAcc(title);
    
    commonView.renderPage(title, data);

}

// home view  ------------------------------


async function start(){
    try{
        
        if( !(homeView.moviesSection.children.length > 0) ){
            const moviesData = await discoverMovies();
            const tvsData = await discoverTvs();
            homeView.renderPage(moviesData, tvsData);
        } else{
            homeView.renderPage();
        }

        
    } catch(err) {
        console.log(err);
    }   
}











homeView.addEventListeners();



// starting the code
start();