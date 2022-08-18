//in real world applications, firstly why are we making them for people that do something with real world enteties

//so, in our application there is a user, product etc they all are nothing but some real life enteties and in the tech world we call them all as objects..

//we know all of these stuffs we know objects basics, references and copying, 'this' in objects, and while learning these things the sbse gndi cheez was to make these objects again and again.. let obj = {.......}.... making unplaned and bina baat ki properties is a difficult task,

//in real world apps we make users object, they all are very similar and just imagine making object, similar object again and again with hands..HUH we are not writers but smart programmers we dont like reapeated lines we write DRY code haina..?

//so for this there's exist a super duper thing CONSTRUCTOR!

//constuctor are very helpful when creating similar objects like users, products etc.

//now, ok we all are very excited but what actually the constructor is?

//constuctor are not a new ghost but our well known functions. but but when invoked/called with new keyword

function User(name){
    //this = {} implicitly
    this.name = name;
    this.sayHi = function(){
        console.log("Hey! my name is " +this.name);
    }
    //return this implicitly
}

//ye h constructor function ya constuctor achha ek cheez h ki iska first letter capital krte h ye convention hn ki taaki pta chl jaye ki ise new ke saath call krna h, ab isme kya hota h ki when we call or invoke it with new keyword it creates an empty object and assign to 'this' implicitly and the constructor updates this 'this' object and it returns implicitly as well

let user1 = new User("tamanna");
let user2 = new User("ishika");
console.log(user1, user2);
user1.sayHi();
user2.sayHi();

// just look at it how easy and less code doing the same thing!



//now what if someone call the constructor without new..?
//let see

let user3 = User("vanshika");
console.log(user3); //undefined, because if func is not retutning anything its returning undefined

//ok but where thus name vanshika and func sayHi is?
//its in the global object and why u know that

//here
console.log(name);
sayHi();

//but now what to do how can we know if the constructor is invoked with new or not.?

//we have something 'new.target' this property gives undefined if called without new and the function itself if called with new.


function Product(){
    console.log(new.target);
}

let pro1 = new Product();  //product function itself

let pro2 = Product();  //undefined


//we can use it and make our function work in both cases!

function Device(brand, color){
    if( !new.target ){
        return new Device(brand, color);
    }

    this.brand = brand;
    this.color = color;
    this.showColor = function(){
        console.log("my color is " +this.color);
    }
}

let dev1 = new Device("apple", "white");  //fine
let dev2 = Device("samsung", "gray");   //fine as well

console.log(dev1, dev2);



//can we return something from these constructors..? absolutely yes! as they are nothing but normal functions

//there are just some simple rules
//return primitives doesnt matter 'this' will be return but if u return an object that object will be returned not 'this'

function Sister(name, age){
    this.name = name;
    this.age = age;
    return 2+3;
}

let sis1 = new Sister("ishui", 20);
console.log(sis1);  //correct we are getting the obj

//but if we return the object that object will be returned and not 'this'

function Car(color){
    this.color =  color;
    return {
        name: "krishna ji",
        birthday: "kl h..."
    }
}

let car1 = new Car("black");

console.log(car1);   //not the car but kanha ji




//achha ye constructor to simple function se return krke bhi bn hi skta h fr constructor kyu mujhe nhi pta pr abhi ke liye lgra h ki kyunki ye jada shi lgra h..haha





