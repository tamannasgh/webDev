class Meal{
    constructor(meal){
        this.id = meal.meals[0].idMeal;
        this.name = meal.meals[0].strMeal;
        this.img = meal.meals[0].strMealThumb;
        this.instructions = meal.meals[0].strInstructions;
    }
}



//functions ------------------------------

async function getDetailsById(mealId){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await res.json();
    return data.meals[0];
}

async function fetchRandomMeal(){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    return data;
}


// nav bar ----------------------
 




















// dom---------------------

const bookmarked = new Set();

const meals = document.querySelector(".meals");
const popUp = document.querySelector(".pop-up");
const popUpMain = popUp.querySelector(".pop-up-main");


function start(){
    for(let i = 0 ; i < 10 ; i++){
        fetchRandomMeal().then(function(data){
            const meal = new Meal(data);
            return meal;
        }).then(function(meal){
            addMealInDom(meal);
        });
    }
}
start();


// adding meal stuff -----------------------


function addMealInDom(meal){    
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
            <button data-id="${meal.id}" class="save"><i class="save fa ${bookmarked.has(meal.id) ? "fa-bookmark" : "fa-bookmark-o"}"></i></button>
        </div>
        <p class="instructions">${meal.instructions.substring(0, 50) + "..."}</p>
        <button class="showDetails">Let's make this</button>
    </div>
    `;

    meals.append(mealDom);
}

meals.addEventListener("click", (e) => {
    if(e.target.classList.contains("showDetails")){
        const mealClicked = e.target.parentNode.parentNode;
        console.dir(mealClicked);
        const mealId = mealClicked.dataset.id;
        showDetails(mealId);  
    }

    if(e.target.classList.contains("save")){
        const mealId = e.target.parentNode.dataset.id;
       if(e.target.classList.contains("fa-bookmark")) removeBookmark(mealId, [e.target]);
       else bookmarkMeal(mealId, [e.target]);
    }
      
});

function bookmarkMeal(mealId, icons){
    bookmarked.add(mealId);
    console.log(bookmarked);

    console.log(icons, mealId);

    for(let icon of icons){
        icon.classList.remove("fa-bookmark-o");
        icon.classList.add("fa-bookmark");
    }
}

function removeBookmark(mealId, icons){
    bookmarked.delete(mealId);
    console.log(bookmarked);

    console.log(icons, mealId);


    for(let icon of icons){
        icon.classList.remove("fa-bookmark");
        icon.classList.add("fa-bookmark-o");
    }
}


// pop-up stuff --------------------------------

function showDetails(mealId){
    getDetailsById(mealId).then(function(mealDetails){
        console.log(mealDetails);
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
            <button data-id=${mealDetails.idMeal} class="save"><i class="save fa ${bookmarked.has(mealDetails.idMeal) ? "fa-bookmark" : "fa-bookmark-o"}"></i></button>
            <button class="cross">X</button>
        </div>  
        
        <a href="#topOfCard" class="goToTopCard"><i class="fa fa-angle-up"></i></a>`;

        popUp.style.display = "flex";
        popUpMain.classList.add("active");
    })
    .then(function(){
        popUpMain.querySelector(".buttons").addEventListener("click", (e) => {
            const target = e.target;
            console.log(e.target);

            if(target.classList.contains("cross")){
                popUpMain.classList.remove("active");
                popUp.style.display = "none";
            }

            if(e.target.classList.contains("save")){
                const mealId = e.target.parentNode.dataset.id;
                const mealDomIcon = meals.querySelector(`.meal[data-id="${mealId}"] .text .main .save i`);
               if(e.target.classList.contains("fa-bookmark")) removeBookmark(mealId, [e.target, mealDomIcon]);
               else bookmarkMeal(mealId, [e.target, mealDomIcon]);
            }


        });
    });
}









