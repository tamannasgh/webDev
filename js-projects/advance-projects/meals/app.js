class Meal{
    constructor(meal){
        this.id = meal.idMeal;
        this.name = meal.strMeal;
        this.img = meal.strMealThumb;
        this.instructions = meal.strInstructions;
    }
}

const navLinksDiv = document.querySelector(".selections");
const bookmarkedMeals = new Set();

const mealsDom = document.querySelector(".meals");
const popUp = document.querySelector(".pop-up");
const popUpMain = popUp.querySelector(".pop-up-main");

const bookmarkedMealsDom = document.querySelector(".bookmarkedMeals");



//functions ------------------------------

async function getDetailsById(mealId){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await res.json();
    return data.meals[0];
}

async function fetchRandomMeal(){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    return data.meals[0];
}

async function getList(list){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${list}=list`);
    const data = await res.json();
    return data.meals;
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
        // console.log("bookmarks clicked");
        mealsDom.style.display = "none";
        
        bookmarkedMealsDom.innerHTML = "";
        bookmarkedMealsDom.style.display = "flex";

        if (bookmarkedMeals.size === 0){
            const bookmarkedMealsDomPlaceholder = document.createElement("p");
            bookmarkedMealsDomPlaceholder.textContent = "your bookmarked meals will be here!";
            bookmarkedMealsDomPlaceholder.style.color = "gray";
            bookmarkedMealsDom.append(bookmarkedMealsDomPlaceholder);
            return;
        }

        bookmarkedMeals.forEach( function(bookmarkMealId){
            getDetailsById(bookmarkMealId).then(function(mealData){
                const meal = new Meal(mealData);
                addMealInDom(meal, bookmarkedMealsDom);
            })
        });

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
    mealsDom.innerHTML = "";
    mealsDom.style.display = "flex";
    bookmarkedMealsDom.style.display = "none";

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


function addMealInDom(meal, dom){    
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
            <button data-id="${meal.id}" class="save"><i class="save fa ${bookmarkedMeals.has(meal.id) ? "fa-bookmark" : "fa-bookmark-o"}"></i></button>
        </div>
        <p class="instructions">${meal.instructions.substring(0, 50) + "..."}</p>
    </div>
    <button class="showDetails">Let's make this</button>
    `;

    dom.append(mealDom);
}

mealsDom.addEventListener("click", (e) => {handleMealClicks(e)});
bookmarkedMealsDom.addEventListener("click", (e) => {handleMealClicks(e)});


// pop-up stuff --------------------------------

function showDetails(mealId){

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
            <button data-id=${mealDetails.idMeal} class="save"><i class="save fa ${bookmarkedMeals.has(mealDetails.idMeal) ? "fa-bookmark" : "fa-bookmark-o"}"></i></button>
            <button class="cross">X</button>
        </div>  
        
        <a href="#topOfCard" class="goToTopCard"><i class="fa fa-angle-up"></i></a>`;

        popUp.style.display = "flex";
        popUpMain.classList.add("active");
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
                else handleBookmarks(true, mealId, [e.target, mealDomIcon]);
            }


        });
    });
}

// handlers --------------------------

function handleNavbar(expand){
    // console.log(navLinks);
    navLinksDiv.classList.toggle("expandNav");
    const navLinks = navLinksDiv.children[0];
    navLinks.style.display = expand ? "block" : "none";
    navLinks.classList.toggle("expandNavLinks");
}

function handleMealClicks(e){
    if(e.target.classList.contains("showDetails")){
        const mealClicked = e.target.parentNode;
        // console.dir(mealClicked);
        const mealId = mealClicked.dataset.id;
        showDetails(mealId);  
    }

    if(e.target.classList.contains("save")){
        const mealId = e.target.parentNode.dataset.id;
       if(e.target.classList.contains("fa-bookmark")) handleBookmarks(false, mealId, [e.target]);
       else handleBookmarks(true, mealId, [e.target]);
    }
}

function handleBookmarks(add, mealId, icons){
    add ? bookmarkedMeals.add(mealId) : bookmarkedMeals.delete(mealId);
    if(!add) {
        const meal = bookmarkedMealsDom.querySelector(`.meal[data-id="${mealId}"]`);
        if(meal) meal.remove();
        if (bookmarkedMeals.size === 0){
            const bookmarkedMealsDomPlaceholder = document.createElement("p");
            bookmarkedMealsDomPlaceholder.textContent = "your bookmarked meals will be here!";
            bookmarkedMealsDomPlaceholder.style.color = "gray";
            bookmarkedMealsDom.append(bookmarkedMealsDomPlaceholder);
        }
    }
    // console.log(bookmarkedMeals);

    // console.log(icons, mealId);

    for(let icon of icons){
        icon.classList.toggle("fa-bookmark-o");
        icon.classList.toggle("fa-bookmark");
    }
}




start();

