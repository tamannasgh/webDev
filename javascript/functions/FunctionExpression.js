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


//if you have noticed there is no name after function keyword this is nothing but an anonymous function we can skip the name of functions in function expressions if we assign assign th ename it willjust be local to that variable or something mujhe nhi pta accesible nbhi h 


