//object destructuring is a way of unpacking objects.

let user = {
    name: "tamanna",
    age: 16,
}

//if we want to extract name and age of this user we can do it like

// let name = user.name;
// let age = user.age;
// console.log(name, age);

//but there is a great way of doing the same

let {name, age} = user;  //achha pehle arr destructuring mai to [] lagae the yahan ye {} kyu kyunki jiska jaisa h na wsa hi lgega

//achha ek imp cheez array destructuring mai to kuch bhi naam de skte h pr yahan nhi de skte mtlb de skte h pr prop ka naam likhna hi pdega or ye shi bhi h kyunki hum mostly work objects ke saath hi krte h real life mai
console.log(name, age);

//ab hum kya kr skte h ki agr hume khudse naam rkhna h to propName : apnaNaam

let user2 = {
    name: "ishika",
    age: 20,
}

let {name: naam, age: umr} = user2;

console.log(naam, umr);

//achha gr aisa ho ki maine aisa likh liya jo obj mai exist hi nhi krta to kya hoga ki undefined hoga wo bss or hum default value de skte h same array ki trh = lgake or agr nhi hogi tbhi fr jo tumne di h wo ho jaegi

let pen1 = {
    color: "blue",
    size: "thin",
}

let {color = "black", size, shape = "mst"} = pen1;
console.log(color, size, shape);

//we can use : and = same time

let pen2 = {
    size: "thin",
    shape: "ekdum mst",
}

let {color : col2 = "black"} = pen2; //and If we have a complex object with many properties, we can extract only what we need 

console.log(col2);

//same ab ek le liya or baaki bs kuch nhi unka to kya hum unko bhi khi store kr skte h? haan

let hand = {
    fingers:4,
    thumb: 1,
    nails: 5,
}

let {fingers = 4, ...restProps} = hand;

console.log(fingers, restProps);  //or ab scochonge ki array mai to rest array tha ab object h whi same type hoga

//achha array mai to aise kr skte the 
let arr = ["tamanna", "ishika"];
let n1, n2;
[n1, n2] = arr;
console.log(n1, n2);


//mtlb vars upe decalare kr diye or neeche use krre h pr objects mai nhi ho skta aise kyunki {} ke andr seedha agr likhte hna to wo ek nested block bn jata h uska ek alg skope ho jata h bhar ke use access nhi kr skte to isliye bss pr haan ek trika h usko poori line ko () mai wrap kr skte ho






