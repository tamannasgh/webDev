//objects are the collection of more than one data type or even more coplex data type like an object itself.

//objects can be created so easily just by let variablename = {} that's it!

let obj = {};
console.log(typeof obj);

//now as i have written that it is a collection of ... so it can store a comma seperated group of something called property that is pair of key and value. key is a string and if the key is one word no string needed but more than one worded key name needs to be wraped inside the "". and value can be anything everything.

let obj1 = {
    key : "value",
    another : 23,
    "another key" : true,
    "the last key" : {
            key: false,
        },
    "the the last key" : () => console.log("hey im the last"),
}

//huh! this is an object a very powerful data type.

//we can access it's value by dot notation
console.log(obj1.key);
//but we cant access the values that paired with a key more than one work with this dot notation
//console.log(obj.another key) //will give an error

//so there's an another method in which the name must be qoutes or may be a variable in which the name is stored and wraped inside brackets
//bracket notation is very powerful!
console.log(obj1["another key"]);  //like so (this will work with single word key also)
let keyName = "another key";
console.log(obj1[keyName]);  //also ok

//we can add and delete also

obj.another2 = "another value";  //added
console.log(obj.another2);

obj["key"] = "this is obj not obj1"
console.log(obj.key);

//we can also delete the property by the delete operator
console.log(obj1);
delete obj1.another;
console.log(obj1);

//we can also do it like
let externalName = "age"; 
let user1 = {
    ["name"] : "tamanna",
    [externalName] : 16,  //almost
}

//so taking advaantage of this we can actually take the user input for the key name


let userInputKey = prompt("name your fav fruit that you eat daily?", "apple");

// let fruits = {
//     [userInputKey] : 7,
// }

let fruits = {};
fruits[userInputKey] = 7;   //this is doing the same thing but more understandable

console.log("you can eat " +fruits[userInputKey]+ " " +userInputKey+ " in a week");

//it can be more complex like [userinput + 'fruit']: 7..

//in real applications we mostly need objects of same keynames like maybe a user object that has 2 props name and age so we dont need to really make every just make a function that returns the obj

function makeUser(name, age){
    return{
        name: name,  //if the param and key name is same no need to do it like mane:mane only name, is ok
        age,
    };
}

let user2 = makeUser("ishika", 20);
let user3 = makeUser("vanshika", 19);
console.log(user2, user3);


//there are no limitations for a name of key means even keywords is okay because they are strings or symbol strings we know symbol will be covdred later

let specialObj = {
    for : "special 1",
    while: "another 2",
}

console.log(specialObj.for);
//but we can't take __proto__ as the keyname even if we assign a value it will be only [object Object] why? will covered later.

//we can use 'in' operator to check if property exits in the object (key shoulbe wrapped in quotes or can be a variable)
console.log("name" in user2);  //true

//we can do it like this also
console.log( !(user2.name === undefined) );  //will return true if exist, if you try to get a value of key that doen't exist it will give undefined so here we're checking if accesing this is not giving undefined means true the key exist and if its giving undefined than ! will make it reverse means false so it will give false means it does not exits

//an dthe main purpose of creating in is that undefined worked just fine but not in siome special cases like if what if the value itself is undefined as value can be anything it will give the wrng ans but 'in' works perfectly

let verySpecialObj = {
    key : undefined,
}

console.log( !(verySpecialObj.key === undefined)); //false even if the key exists

console.log("key" in verySpecialObj); //true

//as we can't acces the values by obj[0]  so how to iterate over the objects
//there exists a special type of for loop not like what we have learned so far it is for..in loop

for(let key in user1){  //returns every key of the object and now we can easily get value like user1[key](key is a variable and we can put the variab;es into the brackets and can acces the values)    console.log(key, user1[key]);
    console.log(key, user1[key]);
}
