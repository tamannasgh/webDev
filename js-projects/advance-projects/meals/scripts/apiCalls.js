//returning an object of a meal by mealId
export async function getDetailsById(mealId){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await res.json();
    return data.meals[0];
}

//returning an object of a random meal
export async function fetchRandomMeal(){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    return data.meals[0];
}

//returning an object of  of c(categories) or a(areas) or i(ingredients)
export async function getList(list){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${list}=list`);
    const data = await res.json();
    return data.meals;
}
