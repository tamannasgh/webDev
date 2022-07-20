//arrow functions is just another way of writinh function expression 

let sayHi = () => console.log("hey!");
sayHi();

//same as function expression just not any function keyword just a '=>'

//if only one expression is there in function no need to return explicitly and also no need to wrap the code in curly braces (we can wrap the code and put a return statement as well but not necessary)
let sum = (a, b) => a+b;
//like so
console.log( sum(2, 3) );

//but if there is a complex function and we need to write more than 1 lines we can wrap the lines in curly braces
let welcome = (userName) => {
    let welcomePhrace = "Welcome! " +userName;
    return welcomePhrace;  //if we have more than 1 line we have to return explicitly
}
console.log( welcome("Tamanna") );

//if only one parameter is there no need to put parantheses
let square = n => n**2;
console.log( square(2) );
//but if there are 0 params then () are important like the first one


//so we know that we can make dynamic function body with function expression and use it later also


let age = 15;

// let heyAccToAge;
// if(age < 18){
//     heyAccToAge = function(){
//         console.log("hey! kid..");
//     }
// } else{
//     heyAccToAge = function(){
//         console.log("hey! adult..");
//     }
// }

// heyAccToAge();

//like so or we can made it more clean

// let heyAccToAge = age < 18 ?
//     function(){ console.log("hey! kid.."); } :
//     function(){ console.log("hey! adult.."); };

// heyAccToAge();

//we can do the same thing with arrow function

let heyAccToAge = age < 18 ? 
    () => console.log("hey! kid..") :
    () => console.log("hey! adult..");
heyAccToAge();

//you can look yourself which is clean and more about arrow functions will come later


// Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

// Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
// With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.


