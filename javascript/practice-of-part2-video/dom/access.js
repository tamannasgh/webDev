//dom kya hota h ek object hota h puri html file ka document naam ka

console.log(document)  //ise khologe to poori html file hi h ye or thoda jada object ke roop mei dekhna ke liye
console.dir(document)

//ab abhi mai simple btari hu access kse krna h kisi element ko

// document.getElementById()
const firCont = document.getElementById("firCont");   //returns the element with the given id
console.dir(firCont);  

// document.getElementsByClassName()

const listItems = document.getElementsByClassName("listItem");
console.log(listItems);  //returns the HTMLCollection(array-like object not an array) with the given class name as same class can be of many elements


// document.querySelector()
//query will be nmothing just how you select elements in your css 
const firListItem = document.querySelector(".listItem");
console.log(firListItem);
//returns the first element that matches with the given query

//documrnt.querySelectorAll()
const allListItem = document.querySelectorAll(".listItem");
console.log(allListItem);  //returns the nodelist of element that matches the query





