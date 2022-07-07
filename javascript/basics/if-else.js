//when we want to execute a block of code in certain conditions only we use if-else.
//for example we can say a person is adult IF he/she is or above 18

let age = 15;
if(age >= 18){
    console.log("you're adult");
} else if(age >= 13){
    console.log("you're teenager but not adult.");
} else{
    console.log("you're not adult");
}

//if statement work if in the brackets the given condition or anything is true
//this is working because age >= 18 is returning true(we know all comparisions operators return boolean values.)

let adult = age >= 18; //this itself return the boolean value so we can directly store it in the variable.

let greaterNum = 2 > 3 ? 2: 3; //here we just wanna asigning the greater number so in these such cases we can use '?' operator which works like let variable = condition ? value1(if true) : value2(if false) but use this only if you are assigning a value in a variable in some condition.



