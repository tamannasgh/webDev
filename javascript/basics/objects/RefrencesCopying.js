//we have done it many times like a = 2; b = a , and now if we do anything with a or b it will not affect the other one right? becuase if we copy a primitive or pass in a function it is pass or copy by value.
//that's not the case with objects.
//if we pass an object or copy it in another variable it is not pass or copy by the value instead by the reference.
//means object doe'nt contains the actual values but the address of memory where the values are.
//so when we copy like let obj = {...} and then let clone = obj, now if we make a change via any of the one it will effect the real values in the memeory all these are pointing to the same object and same with function if you pass an object as an argument and make a change in function real object will affect

//so now question is how can we actually just copy value ?

//we can run a for in loop and lets do it
let obj = {
    apple: "fruit",
    "lady finger": "vegitable",
    rose: "flower",
    "tamanna sharma": "name..",
};

let clone = {};

// for(let key in obj){
//     clone[key] = obj[key];   //copying the obj
// }

console.log(obj, clone);
//lets make a change via the clone

clone["lady finger"] = "finger of lady";
clone["from clone"] = "from clone";
console.log(obj, clone);   //real one is not changed as we're making a new one and we can do the same thing with Object.assign( destination( clone ), source( obj ));

//now i have commented the loop now if i try to print clone have just one prop "lady finger" and why we know that

clone = Object.assign(clone, obj);

console.log(obj, clone);  //same thing but can you see that order is not changed and it overwrites the value.
//means if there is a common key in dest. and source the source wil overwrite it
let obj2 = {
    "lady finger" : "from last",
}

clone = Object.assign(clone, obj, obj2)
console.log(clone);  //as you can see first arg is destination and then all aftetr it are sources and it will assign it in order of passing like it will say ok i have to merge obj and clone and it will find a prop which is common in both so it will just overwrite the source then move to the next source and so on.., so in the end like in this case "lady finger is common in all so the last one will be the final ans"


//now as we know that objects can contain anything even an object itself so 
let nestedObj = {
    rose: "flower",
    tiger: "animal",
    lavender: "colour",
    "another object": {
        "i dont know": "really",
    }
}

//now if we clone then what will happen is "another object"'s value will be assign to nestsedClone "another object"'s value and change via any of these will affect the real one

let nestedClone = Object.assign({}, nestedObj);
console.log(nestedObj, nestedClone);
//now if we try to make change via clone it will affect the real one becuase it is copied and objects are copied by reference

nestedClone["another object"]["i dont know"] = "or maybe i know";
console.log(nestedObj, nestedClone);  //as u can see both is changed

//so for this type of situation we can check like ig the type of value is object then send it to some another function and then it can handle it this is called deep cloning
//or we can use lodash that provides deep cloning
//lodash is a js library

//what did u think if we make an obj with const can we modify it?

const constObj = {
    "can u modify me": "try",
    "and me": "try",
}

for(let key in constObj){
    constObj[key] = "yes i can";
}
console.log(constObj);  //yes i can we can modify and delete and can do everything with the const obj but can;t assign a new one or change the reference 
// constObj = obj;  //error
