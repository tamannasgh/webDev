//array distructuring is a great way to unpack the elements from an array

let arr = ["tamanna", "ishika", "sanjay", "sanjana"];
//if i give u a task that make two variables and store 0th and 1st element in those and print them.

//its simple u can do it like 
// let elm1 = arr[0];
// let elm2 = arr[1];
// console.log(elm1, elm2);

//but we can do it in a great way

let [elm1 , elm2] = arr;
console.log(elm1, elm2);

//internally its just looping in array and assigning to the left side variables.

//skip by ','

//let say if u want 0th and 2nd element
let[first, , third] = arr;
console.log(first, third);
//now the second and remaining elemenets will be just skipped

//but there's a way that we can store the remaining elements in an array

let [firstElm, ...rest] = arr;
console.log(firstElm, rest);  //just three dots and the remaining will be store in that in form of the object on the right side, array in this case

//isme na bss itna h ki left mai kuch bhi ho skta h or right mai bhi bss iterable hina chahiye kyunki internally ye loop through krega right side se or assign krega left side ke variables mai ek ek krke

//what if there are more varibales than elements in the array
let arr2 = ["tamanna", "ishika"];

let [name1, name2, name3] = arr2;
//now what will be the value of name3 or there will be an error now?

//no error and the default value is undefined so
console.log(name3);  //undefined

//but can we do something else like assign the value if there is no value?
//yes, we can

let arr3 = ["javaScript", "java"];
let [lang1 = "js", lang2 = "java", lang3 = "python"] = arr3;
//if not setted than only this default value will be assigned and this value can be anything as simple as this or an function call.

console.log(lang1, lang2, lang3);


//swap variable trick

let var1 = 13;
let var2 = 68;

[var1, var2] = [var2, var1]; //here we're making temp array on the right side that make it iterable and on the left side variables are already declared so just wrap them in [].
console.log(var1, var2);

let a, b;
[a, b] = [12, 14]
console.log(a, b);
