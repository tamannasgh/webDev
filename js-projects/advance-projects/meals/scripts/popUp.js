import {getDetailsById} from "./apiCalls.js";
import {mealsDom, bookmarkedMeals, popUp, popUpMain, bookmarkedMealsDom} from "./elements.js";
import {handleBookmarks, renderBookmarkPage} from "./bookmark.js";

//this function is showing a pop up with the details of meal that is clicked, we have to call this with the mealId then it will get the details of that id from api and then show the pop up(we are not using the Meal class here because we want the extra props also)
export function showPopUp(mealId){

    getDetailsById(mealId).then(function(mealDetails){
        // console.log(mealDetails);

        let ingredients = "";
        for(let i = 1; i < 21 ; i++){
            const ingredient = mealDetails[`strIngredient${i}`];
            if(ingredient === null || ingredient === "") break;
            ingredients += ingredient + ", "; 
        }
        ingredients = ingredients.substring(0, ingredients.length-2) + ".";

        popUpMain.innerHTML = `<div class="image middle">
            <img src="${mealDetails.strMealThumb}" alt="meal-image">
        </div>
    
        <div class="main">
            <p class="name">${mealDetails.strMeal}</p>
            <p class="country">${mealDetails.strArea}</p>
        </div>

        <p class="ingredients">Ingredients : <span class="ingredients-text">${ingredients}</span> </p>

        <p class="instructions">Instructions : <span class="instructions-text">${mealDetails.strInstructions}<span></p>

        <div id="topOfCard"  class="buttons middle">
            <button data-id=${mealDetails.idMeal} class="saveBtn"><i class="save fa ${bookmarkedMeals.has(mealDetails.idMeal) ? "fa-bookmark" : "fa-bookmark-o"}"></i></button>
            <button class="cross">X</button>
        </div>  
        
        <a href="#topOfCard" class="goToTopCard"><i class="fa fa-angle-up"></i></a>`;

        popUp.style.display = "flex";
        setTimeout(() => {
            popUpMain.classList.add("active");
        }, 50);
    })
    .then(function(){
        popUpMain.querySelector(".buttons").addEventListener("click", (e) => {
            const target = e.target;
            // console.log(e.target);

            if(target.classList.contains("cross")){
                popUpMain.classList.remove("active");
                popUp.style.display = "none";
            }

            if(e.target.classList.contains("save")){
                const mealId = e.target.parentNode.dataset.id;

                const mealDomIcon = mealsDom.querySelector(`.meal[data-id="${mealId}"] .text .main .save i`);

                if(e.target.classList.contains("fa-bookmark")) handleBookmarks(false, mealId, [e.target, mealDomIcon]);
                else{
                    handleBookmarks(true, mealId, [e.target, mealDomIcon]);
                    if(bookmarkedMealsDom.style.display === "flex"){
                        renderBookmarkPage();
                    }
                }
            }
        });
    });
}