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

// let userInputKey = prompt("")