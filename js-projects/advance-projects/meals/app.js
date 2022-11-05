import {fetchRandomMeal, getList} from "./scripts/apiCalls.js";
import {mealsDom, bookmarkedMeals, bookmarkedMealsDom, navLinksDiv} from "./scripts/elements.js";
import {showPopUp} from "./scripts/popUp.js";
import {renderBookmarkPage, handleBookmarks} from "./scripts/bookmark.js";


export class Meal{
    constructor(meal){
        this.id = meal.idMeal;
        this.name = meal.strMeal;
        this.img = meal.strMealThumb;
        this.instructions = meal.strInstructions;
    }
}


// nav bar ----------------------


document.querySelector("nav").addEventListener("click", (e) => {
    if(e.target.classList.contains("logo-text")) start();

    if(e.target.classList.contains("expandNavBtn" ) || e.target.classList.contains("expandNavBtn-span")){
        handleNavbar(true);
    }

    // links

    if(e.target.classList.contains("bookmarks") || e.target.classList.contains("fa-bookmark")){
        if(navLinksDiv.classList.contains("expandNav")){
            handleNavbar(false);
        }
        renderBookmarkPage();
    }

    if(e.target.classList.contains("expandNavLinkDetails") || e.target.classList.contains("fa-angle-down")){
        const clickedLink = e.target.classList[0];
        console.log(clickedLink, "clicked");
        getList(clickedLink).then(function(list){
            console.log(list);
        });
    }
});

navLinksDiv.addEventListener("click", (e) => {
    if(e.target.classList.contains("expandNav")){
        handleNavbar(false);
    }
});



// dom---------------------



function start(){
    bookmarkedMealsDom.style.display = "none";

    mealsDom.innerHTML = "";
    mealsDom.style.display = "flex";

    for(let i = 0 ; i < 10 ; i++){
        fetchRandomMeal().then(function(data){
            const meal = new Meal(data);
            return meal;
        }).then(function(meal){
            addMealInDom(meal, mealsDom);
        });
    }
}


// adding meal stuff -----------------------


export function addMealInDom(meal, dom){    
    const mealDom = document.createElement("div");
    mealDom.classList.add("meal");
    mealDom.dataset.id = meal.id;
    mealDom.innerHTML = `
    <div class="image">
        <img src="${meal.img}" alt="meal-image">
    </div>
    <div class="text">
        <div class="main">
            <p class="name">${meal.name}</p>
            <button data-id="${meal.id}" class="saveBtn"><i class="save fa ${bookmarkedMeals.has(meal.id) ? "fa-bookmark" : "fa-bookmark-o"}"></i></button>
        </div>
        <p class="instructions">${meal.instructions.substring(0, 50) + "..."}</p>
    </div>
    <button class="showDetails">Let's make this</button>
    `;

    dom.append(mealDom);
}

mealsDom.addEventListener("click", (e) => {handleMealClicks(e)});


// handlers --------------------------

export function handleNavbar(expand){
    // console.log(navLinks);
    navLinksDiv.classList.toggle("expandNav");
    const navLinks = navLinksDiv.children[0];
    navLinks.style.display = expand ? "block" : "none";
    navLinks.classList.toggle("expandNavLinks");
}

export function handleMealClicks(e){
    if(e.target.classList.contains("showDetails")){
        const mealClicked = e.target.parentNode;
        // console.dir(mealClicked);
        const mealId = mealClicked.dataset.id;
        showPopUp(mealId);  
    }

    if(e.target.classList.contains("save")){
        const mealId = e.target.parentNode.dataset.id;
        if(e.target.classList.contains("fa-bookmark")) handleBookmarks(false, mealId, [e.target]);
        else handleBookmarks(true, mealId, [e.target]);
    }
}


start();

