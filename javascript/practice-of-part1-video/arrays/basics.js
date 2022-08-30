let arr = ["tamanna", "ishika", "vanshika"];

//iska bhi same h nreference wali cheez ki pass and copy by value hi h mtlb agr mai kisi mai aise krungi na ki arr2 = arr to arr or arr2 dono rerference variable bnnjaenge jo ki ek hi object ko poinjt krre honge

//arr == arr2 or arr === arr2 dono hi true aaenge kyunki ye actually store krre h addresss ko na ki object ko (saare objects yhi krte h array bhi object hi h)

//ab age sch mai chahiye hi humein copy but same point krne wale nhi to iske do tarike h slice wala or spread operator

//slice method pehle kya h ye dekhte h

let arr2 = arr.slice(0, 2);
console.log(arr2);
// ab ye h kuch points jaisa smjh lo element ke peeche or aage to 0-1-2 or cut to yhi aaega ya fr ye smjhlo ki second param-1 mtlb 2-1 =1 1 index tk aa jaega or ek or tarika h ki agr srf ek param doge to wahan se end tk dega jaise

let arr3 = arr.slice(1);
console.log(arr3);//index 1 se end tk ya whi point wala hi smjh lo fr bhi 1 se enmd tk

//to ab isse clone kse bnta h ki slice(0) krdenge to 0 index se end tk or bn gya clone

let clone = arr.slice(0);
console.log(arr === clone);  //false mtlb sch mai clone bn gya ab ek mai change kroge to dusre mai affect nhi krega as they are pointing to the diff objects in heap


let tryArr = arr.splice(1, 1, "sanajana", "addu");
console.log(tryArr, arr);    //splice or slice alg h slice to smjh aa gya ab ye h splice 3 args hote h kahan se kahan tk delete krna h or fr kitne bhi de skte h insert ke liye
//2nd arg 0 dene se kuch bhi delete nhi hota bss add ho jaega 

arr.splice(0, 0, "sanjay")
console.log(arr);
//or agr second or thgird arg hi na de to wahan se saara delete ho jaega
arr.splice(3);
console.log(arr);  //isme bhi whi point wali kahani h fr count ki kitne lements hatne h

arr.splice(1, 1);
console.log(arr);  //pehle point dhoonda fr sanjay or tamanna ke beech or wahan se 1 element uda diya


arr.push("tamanna", "ishika");
console.log(arr);  //push the elements or element in the end

console.log(arr.pop());
console.log(arr);   //pops out the last element from the array or achha push or popo dono hi return bhi krte h jo add ya delete kra h

console.log(arr.shift());
console.log(arr);  //shift, shift kr deta h peeche mtlb first wala nikal deta h

arr.unshift("sanjay", "love");
console.log(arr);   //ye add kr deta h huru mai in sbko

//shift or unshoft push or pop se slow h kyunki obvios h shift or unshift pehle temp mai rkhte honge fr sb kuch krte honge pr push or pop to bs end mai apna kr dete h


//achha ab ek gnda que pr fr bhi socho ki kya agr ye arr let arr ki jgh const arr hota to kya ye sb ho pata ya hum arr ko kisi bhi trh se modify kr paate ?

//haan kr paate kyunki arr agr const h to iska mtlb ye nhi h object change nhi ho skta wo to apna mst heap mai h const arr se kya hota h ki ab jo address hold kiya hua h na arr bs whi hold krega aisa nhi kr skte ki arr = kuch or, isme error aaega



//or ek bilkul hi mst hota h spread operator 3dots or variable name(that must be iterable)
let array = [1,2,3,4,5];
let cloneOfArray = [...array];
console.log(cloneOfArray); //haina ek dum mst achha ye spread opr srf iterable cheezo ke saath chlta h jaise strings, objects etc..


//now how to concat two or more arrays

let arr1 = [1,2,3,4,5, 6];
let arrSecond = [6,7,8,9,10];
let arrThird = ["tamanna", "ishika"];

let concatenatedArr = arr1.concat(arrSecond, arrThird, "thats it");   //concat function returns the array without modifying it
console.log(concatenatedArr);








