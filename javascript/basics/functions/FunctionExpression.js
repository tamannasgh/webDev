//there is an another way of creating a function

function sayHi(){
    console.log("Hey!");
}
//this is what we have learned so far known as function declaration or function statement
//statement is an action that is independent for example print statement asignment statement or a function declaration etc.

let sayHi2 = function(){
    console.log("Hey from 2!");
};
//this is known as function expression. expression is nothing but a mixtures of operators , values, subexpression or in simple words exression are the thing that resolves to a value.
//here what is happening is that we are creating a variable sayHi2 and storing a function in this exactly thing is happening in the function declaration function is storing inside the sayHi and whenever we're calling it its doing its work

//function is nothing but a special kind of value.
//we can run it just like previous one
sayHi2();


//if you have noticed there is no name after function keyword this is nothing but an anonymous function we can skip the name of functions in function expressions if we assign assign th ename it willjust be local to that variable

//they are working just same what is the difference the main diffe is hoisting, when javascript reads the code it will first creates global functions and then interpret the code so the function statement or declaration is global so js will first create it then execute the code line by line so because of this we can call or invoe function before even declaration and this thing is known as hoisting but with function expressions its not the same case it will not create iut first it will just run the code line by line and when hits that line then create it sp we cant use function expression before defining them

itsHoisted();

function itsHoisted(){
    console.log("hoisted");
}

//just like that

// notHoisted();  //will give error!

let notHoisted = function(){
    console.log("not hoisted");
};

//not same here
//You might wonder, why do Function Expressions have a semicolon ; at the end, but Function Declarations do not


//FUNCTION IS A VALUE just a special type of.

//thats why we can assign it to the variable okay so the one line is function are verryyy nice in javascript thay are js's heart and one should understand it very clearly it is used everywhere

//it is value so can we do everything with functions that we can do with values lets try all

function a(){
    console.log("a called");
}

console.log(a);  //we can print the function(notice that there are no () after the name if they were then the output will be what function is returning and in this case nothin so udefined)!

//we can print it so can we assign it to another variable?
let b = a;
console.log(b);  //yes we can absolutely!

//as we know we can pass arguments in functions and that args are nothing but a value so can we ...
function takingFunction(func1){
    console.log(func1 + "\n\nfrom takingFunctions");
}

takingFunction(a);  //yes we can and why not function are value...
//and this is nothing just callback function or callbacks
//when we pass functions to the functions
//for ex
function que(ques, right, wrong){
    if(ques){
        right();
    } else{
        wrong();
    }
}

function right(){
    console.log("fantastic!");
}

function wrong(){
    console.log("so be okay!!");
}

// let ques = confirm("are you okay?");

// que(ques, right, wrong);

//we can pass them directly also as a anonymous finctions as function are values

// let ques2 = confirm("are you in love with js?");

// que(ques2,
//     function(){
//         console.log("we're same!!");
//     },
//     function(){
//         console.log("then do hehe!");
//     });


//so can we return them also?

function returningFunction(){
    return function(){
        console.log("im a function returned from a function");
    }
}

console.log(returningFunction());   //yes we can!

//and this ability of a function that it can be passed as an argument and can be returned etc is known as first class function.


//and the one another diff between function statement and expression is that 

//let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.

let age = 15;

// conditionally declare a function
if (age < 18) {

  function welcome() {
    console.log("Hello!");
  }

} else {

  function welcome() {
    console.log("Greetings! adult");
  }

}

// ...use it later in the code
// welcome(); // Error: welcome is not defined

//its very simple just the scoping concept welcome function is declared inside the conditionals block so can be accesed there only
//but here in this case function expression fits in perfectly

let age2 = 15;

let welcome;

if (age < 18) {

  welcome = function() {
    console.log("Hello!");
  };

} else {

  welcome = function() {
    console.log("Greetings! adult");
  };

}

welcome(); // ok now

//Or we could simplify it even further using a question mark operator ?

let age3 = 15;

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // also ok 


//now the question when to use which?
//simple use function statement or declaration almost all the time it will work fine and erroe free because can be accesed before creating and function statement or declarations are more eye catching

//and if work is not done or we need a conditional declaration use function expression example can be just the above one 

//that's it!!

