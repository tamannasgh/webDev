//there are 2 kind of props in obj first one is data with which we're dealing til now, the seocnd type is accessor they are nothing but functions that get or set a value but executed us used just like a prop of an obj means no () to call only the name.

//for example if we create a obj and here we have some data props of obj let say i need some accessor props getter and setter for full name 

const obj1 = {
    fName: "tamanna",
    lName: "sharma",
    _age: 16,
    learning : "javaScript!",

    get fullName(){
        return this.fName + " " + this.lName;
    },

    set fullName(name){
        [this.fName , this.lName] = name.split(" ");
    }
}

console.log(obj1.fullName);
// obj1.fullName("Tamanna Sharma");  //error its no longer a function but an accessor prop
obj1.fullName = "Tamanna Sharma";  //this would work
console.log(obj1.fullName);


//ab jaise last pdhe the na data prop ke flags ya descriptor jse value, writable, enumerable or configurable wse hi isme bhi hote h pr isme bhi pr writable or value nhi hoti isme value or writable nhi hota, get, set, enumerable or configurable hota h!

console.log(Object.getOwnPropertyDescriptor(obj1, "fullName"));

//agr hum try krenge kisi ek ko hi value dene ki or set ya get bnane ki to error aa jaega!!!!

//we can do it with define prop method also

Object.defineProperty(obj1, "age", {
    get(){return this._age;},
    set(newAge){this._age = newAge;},
    enumerable: true,
    configurable: false,
});

console.log(obj1.age);
obj1.age = 17;
console.log(obj1.age);

// Object.defineProperty(obj1, "age", {
//     get(){return "haha"}
// });   //error because configurable is set to false

for(let key in obj1){
    console.log(key, obj1[key]);
}
