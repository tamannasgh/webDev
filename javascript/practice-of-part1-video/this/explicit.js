function fun(){
    console.log(this);
}
fun();

const obj1 = {
    name: "tamanna",
    age: 16,
    about(){
        console.log(this);
    }
}

obj1.about();

const obj2 = {
    name: "radha",
    age: Infinity,
}

obj1.about.call(obj2);   
let boundedFunc = obj1.about.bind(obj2);
boundedFunc();


//arrow function mei call apply bind nhi hota h
