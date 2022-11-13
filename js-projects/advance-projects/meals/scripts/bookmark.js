import {getDetailsById,} from "./apiCalls.js";
import {Meal, addMealInDom, handleMealClicks, removeTemplateAndShowData} from "../app.js";
import {bookmarkedMeals, bookmarkedMealsDom, mealsDom, accToListMealsDom, template} from "./elements.js";

//this function is adding stuff in bookmarkedMealsDom and removing all the other divs, and accessing doms/divs from scripts/elements.js
export function renderBookmarkPage(){
    
    accToListMealsDom.style.display = "none";
    mealsDom.style.display = "none";  

    template.style.display = "flex";

    bookmarkedMealsDom.innerHTML = "";

    if (bookmarkedMeals.size === 0){   //bookmarkedMeals is a aset of ids of the bookmarled meals
        removeTemplateAndShowData(bookmarkedMealsDom);
        showBookmarkPlaceholder();   //its a function showing a placeholder if there's no bookmarks
        return;
    }

    const lastBookmarkedMealId = Array.from(bookmarkedMeals).at(-1);
    // console.log(lastBookmarkedMeal);

    bookmarkedMeals.forEach( function(bookmarkMealId, ){
        getDetailsById(bookmarkMealId).then(function(mealData){
            const meal = new Meal(mealData);
            addMealInDom(meal, bookmarkedMealsDom);  //this is a function that is adding the meal in the given dom (meal is an object that we get from Meal class) this Meal class and addMealInDom func is imported from app.js
        }).then(function(){
            if(!(lastBookmarkedMealId === bookmarkMealId)) return;

            removeTemplateAndShowData(bookmarkedMealsDom);
        })
    });
}

bookmarkedMealsDom.addEventListener("click", (e) => handleMealClicks(e));


//this function is handling the bookmark like adding or removing ids from the bookmarkedMeals set and handling the 2 senarios like what if we're in the bookmarks page? as soon as we unBookmark a meal that meal should be removed from the page so this is doing that also and what if when removing the meal the page is empty we need to also then show the placeholder so this is also handled here
export function handleBookmarks(add, mealId, icons){
    add ? bookmarkedMeals.add(mealId) : bookmarkedMeals.delete(mealId);
    if(!add) {
        const meal = bookmarkedMealsDom.querySelector(`.meal[data-id="${mealId}"]`);
        if(meal) meal.remove();
        
        if (bookmarkedMeals.size === 0){
            showBookmarkPlaceholder();
        }
    }
    // console.log(bookmarkedMeals);

    // console.log(icons, mealId);

    for(let icon of icons){
       console.log("im running for", mealId);

        if(icon){
            icon.classList.toggle("fa-bookmark-o");
            icon.classList.toggle("fa-bookmark");
        }
    }
}

function showBookmarkPlaceholder(){
    const bookmarkedMealsDomPlaceholder = document.createElement("p");
    bookmarkedMealsDomPlaceholder.textContent = "your bookmarked meals will be here!";
    bookmarkedMealsDomPlaceholder.style.color = "gray";
    bookmarkedMealsDom.append(bookmarkedMealsDomPlaceholder);
}


