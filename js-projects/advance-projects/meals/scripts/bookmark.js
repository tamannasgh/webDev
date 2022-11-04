import {getDetailsById,} from "./apiCalls.js";
import {Meal, addMealInDom, handleMealClicks} from "../app.js";
import {bookmarkedMeals, bookmarkedMealsDom, mealsDom} from "./elements.js";

export function renderBookmarkPage(){
    
    
    mealsDom.style.display = "none";

    bookmarkedMealsDom.innerHTML = "";
    bookmarkedMealsDom.style.display = "flex";

    if (bookmarkedMeals.size === 0){
        showBookmarkPlaceholder();
        return;
    }

    bookmarkedMeals.forEach( function(bookmarkMealId){
        getDetailsById(bookmarkMealId).then(function(mealData){
            const meal = new Meal(mealData);
            addMealInDom(meal, bookmarkedMealsDom);
        })
    });
}

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
        if(!icon) continue;
        icon.classList.toggle("fa-bookmark-o");
        icon.classList.toggle("fa-bookmark");
    }
}

function showBookmarkPlaceholder(){
    const bookmarkedMealsDomPlaceholder = document.createElement("p");
    bookmarkedMealsDomPlaceholder.textContent = "your bookmarked meals will be here!";
    bookmarkedMealsDomPlaceholder.style.color = "gray";
    bookmarkedMealsDom.append(bookmarkedMealsDomPlaceholder);
}

bookmarkedMealsDom.addEventListener("click", (e) => {handleMealClicks(e)});

