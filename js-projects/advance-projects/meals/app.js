import {fetchRandomMeal, } from "./scripts/apiCalls.js";
import {bookmarkedMeals, navLinksDiv, mealsDom, bookmarkedMealsDom, accToListMealsDom, template} from "./scripts/elements.js";
import {showPopUp} from "./scripts/popUp.js";
import {renderBookmarkPage, handleBookmarks} from "./scripts/bookmark.js";
import {showNavLinkDropDown, removeAllNavLinkList} from "./scripts/accToListMeal.js";


//this is a meal class that is returning an obj, that have the props that we need from the data that api returned
export class Meal{
    constructor(meal){
        this.id = meal.idMeal;
        this.name = meal.strMeal;
        this.img = meal.strMealThumb;
        this.instructions = meal.strInstructions;
    }
}

// nav bar ----------------------

//this is the code for navbar like expanding and hiding on small screens, the links of navbar like bookmarks and the three..
document.querySelector("nav").addEventListener("click", (e) => {
    if(e.target.classList.contains("logo-text")){
        removeAllNavLinkList();
        start();
    }

    if(e.target.classList.contains("expandNavBtn" ) || e.target.classList.contains("expandNavBtn-span")){
        handleNavbar(true);
    }

    // links

    if(e.target.classList.contains("bookmarks") || e.target.classList.contains("fa-bookmark")){
        if(navLinksDiv.classList.contains("expandNav")){
            handleNavbar(false);
        }
        renderBookmarkPage();  //this is an imported function from bookmark.js that is adding stuff in the bookmarkedMealDom and removing the other divs  see in details in the scripts/boookmark.js
    }

    if(e.target.classList.contains("expandNavLinkDetails") || e.target.classList.contains("fa-angle-down")){
        // console.log("im clicked", e.target);
        console.log("im from click event");
        showNavLinkDropDown(e);
        
    }

});

//nav link list on hover ---------------------
navLinksDiv.querySelectorAll("p").forEach(pTag => {

    pTag.addEventListener('mouseover', (e) => {
        if(e.target.tagName === "P" && !(e.target.classList.contains("bookmarks")) ){
            console.log("im from hover event");
            showNavLinkDropDown(e);
        }    
    });

});

navLinksDiv.addEventListener("click", (e) => {
    if(e.target.classList.contains("expandNav")){
        handleNavbar(false);
    }
    if(e.target.classList.contains("main")) removeAllNavLinkList();
});




// dom---------------------

document.querySelector("main").addEventListener("mouseenter", (e) => {
    removeAllNavLinkList();
})

//this is a function that is loading the main view, its adding 10 random meals in the mealsDom and removing other divs.
function start(){
    bookmarkedMealsDom.style.display = "none";
    accToListMealsDom.style.display = "none";

    template.style.display = "flex";

    mealsDom.innerHTML = "";

    for(let i = 0 ; i < 10 ; i++){
        fetchRandomMeal().then(function(data){
            const meal = new Meal(data);
            return meal;
        }).then(function(meal){
            addMealInDom(meal, mealsDom);

            return i;
        }).then(function(){
            if(i < 9) return;
            removeTemplateAndShowData(mealsDom);
        })
    }
}


// adding meal stuff -----------------------

//this func is adding meal in any dom, you have to give meal object (that we get from Meal class), and the dom (the div like mealsDom, bookmarkedMealDom etc)
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
        <p class="instructions">${meal.instructions ? meal.instructions.substring(0, 50) + "..." : "to read the instruction of this meal, click on the button below!.."}</p>
    </div>
    <button class="showDetails">Let's make this</button>
    `;
    dom.append(mealDom);
}

mealsDom.addEventListener("click", (e) => handleMealClicks(e));


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
        console.dir(mealClicked);
        const mealId = mealClicked.dataset.id;
        showPopUp(mealId);  //this is an impoerted func from scripts/popUp.js that is showing a pop up with details of meal you have to pass the id of that meal and this will get the details by the api
    }

    if(e.target.classList.contains("save")){
        const mealId = e.target.parentNode.dataset.id;
        if(e.target.classList.contains("fa-bookmark")){
            handleBookmarks(false, mealId, [e.target]);
        } else{
            handleBookmarks(true, mealId, [e.target]);   //this is an imported function from scripts/bookmark.js that is handling the bookmraks, you have to pass a bool value acc to you're adding or removing, the mealId and the icons that you want to update.
        } 
    }
}


export function removeTemplateAndShowData(dataDom){
    console.log("data loaded", dataDom);

    template.style.display = "none";

    dataDom.style.display = "flex";
}


start();

