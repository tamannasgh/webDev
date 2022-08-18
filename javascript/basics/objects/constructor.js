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




