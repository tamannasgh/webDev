//ab dekh pehle hi hum kr chuke h functions to usme se dekhle ab bss jldi se function declaration, expression, arrow functions revise kr lete h bss fr aage krte h

function hello(){
    console.log("hey!");
}  //function declaration
hello();

let sum = function(n1, n2){
    return n1 + n2;
} //function expression
console.log( sum(2, 3) );

let square = n => n*n;  //arrow function
console.log( square(3) );

let mul = (n1, n2) => {
    return n1 * n2;
}
console.log( mul(2, 3) );

let sayHello = () => console.log("hello");
sayHello();

//revision ho gyii


//first class citizen/function is when functions are treated as value like they can be assigned to a variable, passed as argument, returned as vale

//and higher order functions are the functions that take a function as argument or return a function as a value, some popular higher order function are map, filter, reduce they take function as an argument.
//aise smjh lo ki bhai mai maamuli sa function nhi hu normal values nhi leta mst function leta hu