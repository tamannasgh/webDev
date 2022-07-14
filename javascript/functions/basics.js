//function is a block of code that is reusable anywhere in the code in deffirents places!
//it makes our code reusable and easy to debug

function sayHi(){
    console.log("hey!");
}

//this is function whose work is only and only to hey to the user
//function created with a keyword function then a name of your function than () and the body in curly brackets it is the easiest function
//doesn't happen anything right?..
//function does nothing until you call it and you can call just by writing its name and ()
sayHi();
//just like that!


//now the next level of the function..
//would you really think we use these only for printing something noo we can do more complex things!
//in these () after the name we can pass some values and function can operate them as well!
//when declaring a function and defining it, it known as parameters
//and when calling a that function and passing these, it known as arguments

function greet(name){
    console.log("hey! " +name);
}
//just like that it will take your name and use it for doing its work
//don't forget to call and pass the arguments!!
greet("tamanna");

//we can also change the global variables but thats not great, really.
let globalVariable = 3;

function changingGlobalVariable(){
    globalVariable++;
    console.log("changed global variable for this whole file which can be not good " +globalVariable);
}

changingGlobalVariable();
console.log("also changed for outside the function " +globalVariable);

//but it can be shadowed if the same named variable exist in the function itself

let anotherGlobal = 2;

function changingButNot() {
    let anotherGlobal = 2;  //variable shadowing
    anotherGlobal++;
    console.log("function priotisize its own variables, the variable created in the function is changed " +anotherGlobal);
}
changingButNot();
console.log("not changed " +anotherGlobal);


//yup we're doing something in the code but still just printing it thats not what the hype is for, yes welcome in the next level!!
//function can take arguments operate them and can even return values!

function sum(num1, num2){
    let result = num1 + num2;
    return result;
    //return num1 + num2 is also cool
}

console.log(sum(2, 3));
//yup its returning so we can store it!
let addition = sum(3,4);
console.log("3 + 4 is " +addition);

//sometimes we want to return a big, a really big thing we can either store it in a variab;e and than return that variable or we can do it like this return (everything you wanna return)  note(you can't do something like return than leave a line noo js puts a semicolon after the return statemnt)

//yes you can return just nothing, yes.

function returningNothing(){
    console.log("really doing nothing and returning nothing");
    return;
}

returningNothing();
//what it returns than lets try to store and then print what its actually returning!
let whatItsReturning = returningNothing();
console.log(whatItsReturning);  //undefined if the function is returning nothing or don't even have a return in it like our 1st function its returning undefined!

//okay but what if the function wants the parameters but we're not giving the arguments socho sochoo
//lets try!

function wantParams(param1, param2){
    let sum = param1 + param2;
    console.log("if you don't give any args its " +typeof param1);
    console.log("sum is : " +sum);    //NaN because undefined + undefined doesn't make sense
    return sum;
}

wantParams();

function wantParams2(param1 =1, param2 = 1){
    let sum = param1 + param2;
    console.log("if you don't give any args its what you've specify " + param1, param2);
    console.log("sum is : " +sum);    //NaN because undefined + undefined doesn't make sense
    return sum;
}

wantParams2();
let result = wantParams2(2,3);
console.log("but if you give the arguments it will take that only! the sum is " +result);

//you can specify the default value to anything literally anything a string, boolean , object , array or even a function!


//but old scripts doesn't support giving default values in the declaration instead you can specify it in the body by checking if its undefined
//you can check for undefined with ?? and || operator

function wantParams3(param1){
    if(param1 === undefined){
        param1 = 1;
    }
    //param1 = param1 || 1;   //it will go like find the first true value and rerurn in its real form if param1 is having a value it will be true so returned but if not then 1 will be returned(but can create problems if the number is 0 becuase 0 is false so it will return 1 even though user have give 0!)
    //param1 = param1 ?? 1;   //it will go like if the first value is not null/undefined return that otherwise second. (if the number is 0 it will return 0 so its safe o use nullish operator)
    console.log("giving the default value in the body " +param1);
}

//one function do one thing and name should give the total hint about that
