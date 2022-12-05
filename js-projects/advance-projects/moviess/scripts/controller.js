import { discoverTvs, discoverMovies, getDataAcc, getMovieOrTvDetail, search} from "./model.js";

import homeView from "./views/homeView.js";
import commonView from "./views/commonView.js"
import expandCardView from "./views/expandCardView.js";


const navbar = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");  


// navbar ------------------------------------

navbar.addEventListener("click", function(e){
    if(e.target.classList.contains("logo")){

        // chnging the color of nav links
        for(let navlink of navLinks.children){
            if(navlink.tagName === "P"){
                navlink.style.color = "rgb(254, 165, 50)";
            } else{
                navlink.style.color = getComputedStyle(navlink).getPropertyValue("--primary-color");
            }
        }

        start();
    }
});

navLinks.addEventListener("click", function(e){
    // console.log(e.target);

    if(! (e.target.classList.contains("other-pages-link")) ) return;

    // chnging the color if active and changind back if not

    for(let navlink of navLinks.children){
        if(navlink.tagName === "P"){
            navlink.style.color = "rgb(254, 165, 50)";
        } else{
            navlink.style.color = getComputedStyle(navlink).getPropertyValue("--primary-color");
        }
    }

    if(e.target.tagName === "P"){
        e.target.style.color = "rgb(224, 135, 19)";
    } else{
        e.target.style.color = getComputedStyle(e.target).getPropertyValue("--secondary-color");
    }




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


async function start(cardClickedId){
    try{
        
        if( !(homeView.moviesSection.children.length > 0) ){
            const moviesData = await discoverMovies();
            const tvsData = await discoverTvs();
            homeView.renderPage(moviesData, tvsData, cardClickedId);
        } else{
            homeView.renderPage("", "", cardClickedId);
        }

        
    } catch(err) {
        console.log(err);
    }   
}

// search feature ----------------------------

const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", async function(e){
    e.preventDefault();

    console.log("searching..");

    const query = searchForm.children[0].value.trim();

    const data = await search(query);

    commonView.renderPage("Search Results", data);

    searchForm.reset();

});



// cards ---------------------------------

const cards = document.querySelectorAll(".cards");
cards.forEach( cardsDiv => !(cardsDiv.classList.contains("casts")) && cardsDiv.addEventListener("click", handleCardClick ) );

async function handleCardClick(e){
    // console.log(this, this.parentNode,  "im clikced");
    if( !(e.target.classList.contains("overlay") || e.target.parentNode.classList.contains("overlay")) ) return;

    const cardClicked = e.target.classList.contains("overlay") ? e.target.parentNode : e.target.parentNode.parentNode;
    const clickedFromPage = this.parentNode;


    const data = await getMovieOrTvDetail(cardClicked.getAttribute("id") , cardClicked.dataset.type );
    
    expandCardView.renderPage(data, cardClicked, clickedFromPage);

}

// back btn of card --------------------------------

expandCardView.backBtn.addEventListener("click", async function(e){

    if( expandCardView.clickedFromPage.classList.contains("other-pages") ){


        const pageToRender = expandCardView.clickedFromPage.querySelector("h1").textContent;

        if(pageToRender === "Search Results"){
            commonView.renderPage(pageToRender, "", expandCardView.cardClicked.getAttribute("id"));
        } else{
            // console.log("other pages", pageToRender);

            const data = await getDataAcc(pageToRender);
            commonView.renderPage(pageToRender, data, expandCardView.cardClicked.getAttribute("id"));
        }      

    } else{

        // console.log("home page", expandCardView.cardClicked);
        start(expandCardView.cardClicked.getAttribute("id"));

    }
});



// starting the code
start();
homeView.addEventListeners(); //adding event listener that's it!!
expandCardView.addEventListeners();