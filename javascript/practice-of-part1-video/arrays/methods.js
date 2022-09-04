//splice

// splice( startIndex, [deleteCount, ...itemsToAdd]  )  //[inside this are optional]

const arr1 = [1,2,3,4,5];

// splice modifies the array itself and return the deleted items

const deletedItems = arr1.splice(3, 2, 78, 49, 90);  //from index 3 delete 2 items and add 78, 49 and 90 in its place

console.log(arr1, deletedItems);

//we can add elements in start also
arr1.splice(0, 0, 4444);
console.log(arr1); 




//slice -----------------------------------------

// slice( [start], [end] )   //yes both are optional

const arr2 = [1,2,3,4,5];

//it doesn't affect the arr instead make a copy of array from start to end(exclusive -> not including end)    

const copyOfRange = arr2.slice(2, 4);
console.log(copyOfRange);   

//if end is not passed it assumes arr.length

const copyOfRange2 = arr2.slice(2);
console.log(copyOfRange2);


//and if none passes it assumes the whole array or 0 and arr.length
const copyOfRange3 = arr2.slice();
console.log(copyOfRange3);   //we mostly use it to make copy of arr and use it in other functions that modifies the array





//concat --------------------------------------------

// concat( arg1, arg2...., argN )  //the args can be either values or array and it doesn't affect the array instead resturns the concatenated array

const arr3 = [1,2,3,4,5];
const arr3_2 = [5,6,7,8,9];
const num1 = 34;

const concatenatedArray = arr3.concat(num1, arr3_2, 56, 98);
console.log(concatenatedArray);

//this arr3.concat(...) may be confuses because it look like the args will be concatenated in arr3 but its not like that, think of it just like this is the order first arr3 then num1... like so





//indexOf, lastIndexOf and includes -----------------------------

// indexOf( target, [from] ) exactly same for lastIndexOf but from right like if i say lastIndexOf(3, 1)in the array [1,2,3] it will give-1 means not found because it start searching from index 1 that is 2 and to the right and ya there's no 3 in right of 2, and for indexOf from is simple from that index to the end

const arr4 = [1,2,3,4,2,5];

//indexOf and lastIndexOf returns the index if found the element and -1 if element is not presnt in the array

console.log( arr4.indexOf(2) );  //1
console.log( arr4.lastIndexOf(2) ); //4
console.log( arr4.indexOf(78) ); //-1

//includes return true if element exist in the array otherwise false

console.log( arr4.includes(3) );  //true
console.log( arr4.includes(78) ); //false






//find, findIndex and findLastIndex --------------------------------

let arr5 = [1,2,3,4,5,6];

//find returns the founded element and if element not founded undefined

console.log("value", arr5.find( (elm, ind, arr) => {
    return elm > 2 && elm % 2 === 0;
}) );
//find func take a callback and run that for every num in the array and Las soon as it gets true it stops the execution and return the VALUE


// ---------

//findIndex do the same thing just return the INDEX not value

console.log("index",  arr5.findIndex( (elm) => elm > 2 && elm % 2 === 0 ) );


// ----------------

//findLastIndex do the same as findIndex but right to left as lastIndexOf

console.log("index", arr5.findLastIndex( (elm) => elm > 2 && elm % 2 === 0 ) );

//okk if u have a que like find vs findIndex vs indexOf  and lastIndexOf vs FindLastIndex read their name or read above carefully or read MDN or tannu do min soch bss smjh aa jaega tujhe


//sort ----------------------------------------

// sort function accept a callback function which is optional

const arr6 = [33,14,54,110,92,6];
const arr7 = ["tamanna", "apple", "javascript", "radhekrishna"];

//sort modifies the array itself and also returns the sorted array

arr7.sort();
console.log(arr7);  //great!!

arr6.sort();
console.log(arr6);  //hein??? what is this..? 
//this is because sort method first compare every element in string then sorts using ascii values

//so how can we sort numerics as its okay in case of strings but note that capital Z will come first than a as the order in ascii table

//remember about the optional callback function? ya we can write a function and this function would get a and b as params and return positive number or nagative number, if sort get positive means a is greater than b it puts a then b and, if it gets nagative then it puts b then a

//so we can write this callback like this and ya the sort method passes first and second elm to compare

function compare(a, b){
    if(a < b){
        return -1;
    } return 1;
}  


//if a is less than b it will return negative so b will be putted first then a otherwise a first and then b and note that if both are equal a will be putted first so ok..

//but if the function is just checking if number is positive than a , b and other wise b, a ,      can't we return a-b as if a is greater subtraction will be positive and if a is smaller then subtraction will be nagative!

let compare2 = function(a, b){
    return a-b;
} 

//i donn't know why but function declaration and function expression is not working with these functions

arr6.sort( (a, b) => a - b );
console.log("with our own compare method ", arr6);





//reverse--------------------

const arr8 = [1,2,3,4,5];

//reverses the real array and returns the reversed array also

console.log( arr8.reverse(), arr8 );






//split and join -----------------------

//split convert a string into array and join convert an array into string

//dono ke andr ek param dete h usse hi split or join krta h jse split(' ') to isse kya hoga ki string mai jahan jahan space wahan se ek element bn jaega array mein or same arr ko join krenge to jse likha join(', ') to hr element ko isse jodkr string bna dega

let str = "tamanna sharma is best!! hehe";

const arr9 = str.split(' ');  //ek ek word
console.log(str, "->" ,arr9);

const arr9_2 = str.split('');   //hr ek word
console.log(str, "->" ,arr9_2);

const arr9_3 = str.split();  //arr mein ek hi elm h puri ki puri string
console.log(str, "->" ,arr9_3);



//join -------

let str2 = arr9.join('');
console.log(str2);

let str3 = arr9.join(' ');
console.log(str3);

let str4 = arr9.join();
console.log(str4);  //wse ka wsa hi aa jaega bina space ke