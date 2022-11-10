import {getList, getMealsAcc} from "./apiCalls.js";
import {Meal, addMealInDom, handleMealClicks, handleNavbar} from "../app.js";
import {navLinksDiv, mealsDom, bookmarkedMealsDom, accToListMealsDom} from "./elements.js";

let navLinkActivated = false;

export function showNavLinkDropDown(e){

    console.log(e.target, e.type+"ed");

    const clickedLinkClassList = e.target.classList; //this is the classlist of p(the link in navbar) or the icon of p so in the both i have added 2 classes 1 is for the api call as api need c or a or i, and the other class is for accessing the data of the returned data like strArea or strCategory or strIngredients.

    const linkPTag = e.target.tagName.toLowerCase() === "p" ? e.target : e.target.parentNode;

    if(navLinkActivated && linkPTag === getActiveP()){
        console.log(linkPTag, getActiveP());
        return;
    }

    //this is because when we open a dropdown other all should be closed
    removeAllNavLinkList();

    getList(clickedLinkClassList[0]).then(function(listData){   //passing classlist[0] because in the api call i need a, c or i for area category and ingredient so i have settted the class on the element so passing that and getting my data then catching it with then
        console.log(listData);

        const listDom = handleList(listData, clickedLinkClassList[1]);  //this will make list, take data and because the data is an oject and the prop where the item text is written is strArea, strIngredient and strCategory so seeted these classes as well and passing these 

        if(!navLinkActivated){
            linkPTag.append(listDom);
            navLinkActivated = true;

            setTimeout(() => {
                listDom.classList.add("activeNavLinkList");
                console.log("added the list");
            }, 10);   //the transition happens only when applied in setTimeout maybe the reason is the thread or something..
        } 
        

        //adding an event listener to the ul so that when user leave that it will removed
        listDom.addEventListener("mouseleave", (e) => {
            if(!(listDom.querySelector("input").value === "")) return;
            console.log(listDom.querySelector("input").value);
            removeNavLinkList(linkPTag);
        });

        return [clickedLinkClassList[0], listDom];   //returning this beacuse again a,c or i needed for the api call and list to add and handle the event listener

    }).then(function([mealType, mealTypeList]){

        //added click event listener to the ul 
        mealTypeList.addEventListener("click", (e) => {

            //searchingg partttt
            if(e.target.tagName === "INPUT"){
                e.target.addEventListener("keyup", (e) => {
                    if( !(e.target.value.trim() === "") ) 
                    search(e.target.value.trim().toLowerCase(), mealTypeList);
                });

            } else{
                removeNavLinkList(mealTypeList.parentNode);  //removing list as user has selected something

                if(navLinksDiv.classList.contains("expandNav")){
                    handleNavbar(false);  //closing navbar in mobile view
                }

                const mealSubType = e.target.textContent;   //need this for the api call this will be what user clicked like Indian, Seafood ...

                getMealsAcc(mealType, mealSubType).then(function(data){  //api call for getting the meals acc to what user clicked

                    mealsDom.style.display = "none";
                    bookmarkedMealsDom.style.display = "none";

                    accToListMealsDom.innerHTML = "";
                    accToListMealsDom.style.display = "flex";

                    for(let i = 0 ; i < 10 ; i++){
                        // console.log(data[i]);
                        
                        if(!data[i]) break;
                        
                        const meal = new Meal(data[i]);
                        addMealInDom(meal, accToListMealsDom);  //this will add meal in the accToListMealsDom
                    }

                });
            }

        });

    });
}

accToListMealsDom.addEventListener("click", (e) => handleMealClicks(e));

export function removeNavLinkList(linkPTag){
    // linkPTag.querySelectorAll("ul").forEach(ul => ul.remove());
    linkPTag.querySelector("ul").remove();
    navLinkActivated = false;
}

export function removeAllNavLinkList(){
    navLinksDiv.querySelectorAll("p").forEach(pTag => {
        if(pTag.querySelector("ul")) removeNavLinkList(pTag);
    });
}

function getActiveP(){
    navLinksDiv.querySelectorAll("p").forEach(pTag => {
        if(pTag.querySelector("ul")) return pTag;
    });
}

function search(query, list){
    // console.log(query, list  );

    const items = list.querySelectorAll("li");
    // console.log(Object.values(items));

    for(let item of Object.values(items)){
        if(! (item.textContent.toLowerCase().indexOf(query) > -1) ){
            item.style.display = "none";
        } else{
            item.style.display = "block";
        }
    }

}

function handleList(listData, clickedLinktext){
    const list = document.createElement("ul");

    const search = document.createElement("input");
    search.type = "search";
    search.placeholder = "Search";
    search.style.position = "sticky";
    
    list.append(search);

    list.classList.add("navLinkList");

    for(let listItemData of listData){
        const listItem = document.createElement("li");
        listItem.textContent = listItemData[`str${clickedLinktext}`];
        list.append(listItem);
    }
    return list;
}
