class Meal{
    constructor(meal){
        this.id = meal.meals[0].idMeal;
        this.name = meal.meals[0].strMeal;
        this.img = meal.meals[0].strMealThumb;
        this.instructions = meal.meals[0].strInstructions;
    }

    showDetails(){
        
    }
}

//functions ------------------------------

async function fetchRandomMeal(){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    return data;
}

async function getDetailsById(mealId){

}

function pushRandomMeal(){
    fetchRandomMeal().then(function(data){
        const meal = new Meal(data);
        return meal;
    }).then(function(meal){
        addMealInDom(meal);
    })
}


function addMealInDom(meal){
    const mealsDom = document.querySelector(".meals");
    
    const mealDom = document.createElement("div");
    mealDom.classList.add("meal");
    mealDom.innerHTML = `
    <div class="image">
        <img src="${meal.img}" alt="meal-image">
    </div>
    <div class="text">
        <div class="main">
        <p class="name">${meal.name}</p>
        <button class="save"><i class="fa fa-bookmark-o"></i></button>
        </div>
        <p class="instructions">${meal.instructions.substring(0, 50) + "..."}</p>
    </div>
    `;

    mealsDom.append(mealDom);
}




function start(){
    for(let i = 0 ; i < 10 ; i++){
        pushRandomMeal();
    }
}
start();