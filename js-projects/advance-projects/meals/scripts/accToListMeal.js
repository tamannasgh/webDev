import {getList, getMealsAcc} from "./apiCalls.js";
import {Meal, addMealInDom, handleMealClicks, handleNavbar} from "../app.js";
import {navLinksDiv, mealsDom, bookmarkedMealsDom, accToListMealsDom} from "./elements.js";



export function showNavLinkDropDown(e){
    const clickedLinkClassList = e.target.classList; //this is the classlist of p(the link in navbar) or the icon of p so in the both i have added 2 classes 1 is for the api call as api need c or a or i, and the other class is for accessing the data of the returned data like strArea or strCategory or strIngredients.

    const linkPTag = e.target.tagName.toLowerCase() === "p" ? e.target : e.target.parentNode;

    if(linkPTag.querySelector("ul")){
        console.log("its already there from function itself");
        return;
    }

    //this is because when we open a dropdown other all should be closed
    const allPTags = linkPTag.parentNode.children;
    for(let i =0 ; i < allPTags.length ; i++){
        if(allPTags[i].querySelector("ul")){
            removeNavLinkList(allPTags[i]);
        }
    }

    getList(clickedLinkClassList[0]).then(function(listData){   //passing classlist[0] because in the api call i need a, c or i for area category and ingredient so i have settted the class on the element so passing that and getting my data then catching it with then
        console.log(listData);

        const listDom = handleList(listData, clickedLinkClassList[1]);  //this will make list, take data and because the data is an oject and the prop where the item text is written is strArea, strIngredient and strCategory so seeted these classes as well and passing these 
        
        linkPTag.append(listDom);

        setTimeout(() => {
            listDom.classList.add("activeNavLinkList");
        }, 10);   //the transition happens only when applied in setTimeout maybe the reason is the thread or something.. 

        //adding an event listener to the ul so that when user leave that it will removed
        let listVisited;
        listDom.addEventListener("mouseenter", () => {
            listVisited = true;
            listDom.addEventListener("mouseleave", (e) => {
                listDom.remove();
            });
        });

        setTimeout(() => {
            if(!listVisited){
                if(listDom){
                    listDom.remove();
                }
            }
        }, 1000);
        

        return [clickedLinkClassList[0], listDom];   //returning this beacuse again a,c or i needed for the api call and list to add and handle the event listener

    }).then(function([mealType, mealTypeList]){

        //added click event listener to the ul 
        mealTypeList.addEventListener("click", (e) => {

            //searchingg partttt
            if(e.target.tagName === "INPUT"){
                e.target.addEventListener("keyup", (e) => {
                    search(e.target.value.toLowerCase(), mealTypeList);
                });

            } else{
                mealTypeList.remove();
                if(navLinksDiv.classList.contains("expandNav")){
                    handleNavbar(false);
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
    linkPTag.querySelector("ul").remove();
}

function search(query, list){
    console.log(query, list);

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