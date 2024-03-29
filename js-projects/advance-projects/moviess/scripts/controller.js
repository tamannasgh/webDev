import { discoverTvs, discoverMovies, getDataAcc, getMovieOrTvDetail, search, data} from "./model.js";

import homeView from "./views/homeView.js";
import commonView from "./views/commonView.js"
import expandCardView from "./views/expandCardView.js";


const navbar = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");  

const searchForm = document.querySelector("form");
const cards = document.querySelectorAll(".cards");

const pagination = document.querySelector(".pagination");

const pageNos = Array.from( pagination.querySelector(".pages").children );
const activePageNo = pageNos.filter( pageNo => pageNo.classList.contains("active-page-no") );

// navbar ------------------------------------

navbar.addEventListener("click", function(e){
    if(e.target.classList.contains("logo")){

        // chnging the color of nav links
        resetNavLinksColor();

        start();
    }
});

navLinks.addEventListener("click", function(e){
    // console.log(e.target);

    if(! (e.target.classList.contains("other-pages-link")) ) return;

    // chnging the color if active and changind back if not
    resetNavLinksColor();

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

async function handleNavLinkClick(e, pageNum){

    const title = e.target.dataset.name;
    data.result = await getDataAcc(title, pageNum);

    data.page = "other-pages";
    data.pageTitle = title;

    commonView.renderPage(title, data.result);

    //resetting pagination to page 1
    paginationControlBtns(pagination, "page-1");
}

function resetNavLinksColor(){
    for(let navlink of navLinks.children){
        if(navlink.tagName === "P"){
            navlink.style.color = "rgb(254, 165, 50)";
        } else{
            navlink.style.color = getComputedStyle(navlink).getPropertyValue("--primary-color");
        }
    }
 
}



// home view  ------------------------------


async function start(cardClickedId, pageNum){
    try{

        if(pageNum){
            data.result = await discoverMovies(pageNum);

        } else{
            data.result = await discoverMovies();

        }

        data.page = "home";
        data.pageTitle = "Discover";
        homeView.renderPage(data.pageTitle, data.result, cardClickedId);


    } catch(err) {
        console.log(err);
    }   
}



// search feature ----------------------------


searchForm.addEventListener("submit", handleSearching);

async function handleSearching(e){
    e.preventDefault();

    console.log("searching..");

    const query = searchForm.children[0].value.trim();

    data.result = await search(query, 1);
    data.pageTitle = "Search Results";
    data.page = "search";

    resetNavLinksColor();

    commonView.renderPage(data.pageTitle, data.result);

    searchForm.reset();
}



// cards ---------------------------------

cards.forEach( cardsDiv => !(cardsDiv.classList.contains("casts")) && cardsDiv.addEventListener("click", handleCardClick ) );

async function handleCardClick(e){

    if( !(e.target.classList.contains("overlay") || e.target.parentNode.classList.contains("overlay")) ) return;

    expandCardView.cardClicked = e.target.classList.contains("overlay") ? e.target.parentNode : e.target.parentNode.parentNode;
    expandCardView.CardClickedFromPage = this.parentNode;

    const data = await getMovieOrTvDetail(expandCardView.cardClicked.getAttribute("id") , expandCardView.cardClicked.dataset.type );
    
    expandCardView.renderPage(data);

}



// back btn of card --------------------------------

expandCardView.backBtn.addEventListener("click", async function(e){

    console.log(data);

    if( data.page !== "home"){ 
        
        commonView.renderPage(data.pageTitle, data.result, expandCardView.cardClicked.getAttribute("id"));

    } else{

        start(expandCardView.cardClicked.getAttribute("id"));

    }
});



// pagination -------------------------------------------------------------------


pagination.addEventListener("click", handlePaginationClick);

async function handlePaginationClick(e){

   

    // console.log(e, e.target);

    if(e.target.classList.contains("pagination-control-btn") ){

        if(e.target.classList.contains("next")){
            paginationControlBtns("next");
        } else{
            paginationControlBtns("prev");
        }

    }

    if(e.target.classList.contains("page-btn")){
        paginationControlBtns(e.target.classList[0]);
    }

    if(e.target.tagName === "SPAN"){
        activePageNo[0].classList.remove("active-page-no");
        e.target.classList.add("active-page-no");
        
        activePageNo[0] = e.target;

    }

    handlePaginationPages(activePageNo[0].textContent, data.page);

    
}

function paginationControlBtns(work){
   

    if(work === "next"){

        if(pageNos.at(-1).textContent === "500"){
            console.log("its 500 already");
            return;
        }

        for(let pageNo of pageNos){
            // console.log( +pageNo.textContent + 2);
            pageNo.textContent = +pageNo.textContent + 1;
        }

        console.log("next");

    } else if(work === "prev"){

        if(pageNos.at(0).textContent === "1"){
            console.log("its 1 already");
            return;
        }

        for(let pageNo of pageNos){
            // console.log( +pageNo.textContent + 2);
            pageNo.textContent = +pageNo.textContent -1;
        }

        console.log("previous");

    } else if(work === "page-1"){

        for(let i = 1 ; i <= 5 ; i++){
            pageNos[i-1].textContent = i;
        }
        activePageNo[0].classList.remove("active-page-no");
        pageNos[0].classList.add("active-page-no");

    } else{

        for(let i = 496 ; i <= 500 ; i++){
            pageNos[i-496].textContent = i;
        }
        activePageNo[0].classList.remove("active-page-no");
        pageNos[4].classList.add("active-page-no");
    }

}

async function handlePaginationPages(pageNo, page){
    if(page === "home"){
        console.log("its home", pageNo);
        start(undefined, pageNo);
    } else{
        console.log("its other pages", data.pageTitle, pageNo);

        data.result = await getDataAcc(data.pageTitle, pageNo);
        commonView.renderPage(data.pageTitle, data.result, undefined, pageNo); 
    }
}

// starting the code
start();
commonView.addEventListeners(); //adding event listener for navbar that's it!!
expandCardView.addEventListeners();  //adding eventlistener for watch trailer and cross btn on expand card