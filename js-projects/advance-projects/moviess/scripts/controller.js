import { discoverTvs, discoverMovies, getDataAcc } from "./model.js";

import homeView from "./views/homeView.js";
import commonView from "./views/commonView.js"
import expandCardView from "./views/expandCardView.js";


const navbar = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");


// navbar ------------------------------------

navbar.addEventListener("click", function(e){
    if(e.target.classList.contains("logo")){
        start();
    }
});

navLinks.addEventListener("click", function(e){
    // console.log(e.target);

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


async function start(scrollTo){
    try{
        
        if( !(homeView.moviesSection.children.length > 0) ){
            const moviesData = await discoverMovies();
            const tvsData = await discoverTvs();
            homeView.renderPage(moviesData, tvsData, scrollTo);
        } else{
            homeView.renderPage("", "", scrollTo);
        }

        
    } catch(err) {
        console.log(err);
    }   
}


// cards ---------------------------------

const cards = document.querySelectorAll(".cards");
cards.forEach( cardsDiv => cardsDiv.addEventListener("click", handleCardClick ) );

function handleCardClick(e){
    // console.log(this, this.parentNode,  "im clikced");
    if( !(e.target.classList.contains("overlay") || e.target.parentNode.classList.contains("overlay")) ) return;

    const cardClicked = e.target.classList.contains("overlay") ? e.target.parentNode : e.target.parentNode.parentNode;
    const clickedFromPage = this.parentNode;

    expandCardView.renderPage(cardClicked, clickedFromPage);

}

// back btn of card --------------------------------

expandCardView.backBtn.addEventListener("click", async function(e){

    if( expandCardView.clickedFromPage.classList.contains("other-pages") ){


        const pageToRender = expandCardView.clickedFromPage.querySelector("h1").textContent;
        
        console.log("other pages", pageToRender);

        const data = await getDataAcc(pageToRender);
        commonView.renderPage(pageToRender, data);


    } else{

        console.log("home page", expandCardView.cardClicked);
        start();

    }
});



// starting the code
start();
homeView.addEventListeners(); //adding event listener that's it!!