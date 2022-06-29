//whi hote h ek to +, -, /, *, % isme ek h exponential ** a**b = a raise to the power b

console.log(2 ** 3); //2^3

// operand hote h jinpe apply hote h ye operators eg, 2 + 3 mai 2, 3 h operands or + h operator

//operator do trh ke hote h unary or binary unary jb vo bss ek number ke liye h or do jb ... eg, -2 idhr - ek unary operator h and jse 2 - 1 idhr - ek binary operator h

let num = 2;
num = -num;
console.log(num); //-2

//pr unary + aisa nhi krta hi -2 Ko +operator lga do to 2 ho jaega instead ye typeconversion kr deta h non-numeric values ko

let num2 = -2;
num = +num;
console.log(num2);  //still -2

console.log(+true); //1

// All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.
// The call x = value writes the value into x and then returns it.

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);  //pehle a calculete hua kyunki brackets h to b+1 ho gya 3 assing hua a mai or assgign operator return krta h value in this case 3 fir 3-3 =0

console.log(a); // 3
console.log( c ); // 0


// The operators ++ and -- can be placed either before or after a variable.

// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.

let counter = 0;

//counter++ and ++counter do the same job increase it by 1 but returning face is the thing make them different ++counter first increase then return on the other side counter++ first return then increase

let postFixCounter = counter++;
console.log(postFixCounter);  //0 it returned first then increase
console.log(counter);  //1


let preFixCounter = ++counter;
console.log(preFixCounter);  //2 it increased first then return

//but in the end result they are doing the same thing, it does matter when you pass counter++ in a recursion call.


//there one more types of operators that are modify-in-place-operators many times we need to do something like age = age + 1 We often need to apply an operator to a variable and store the new result in that same variable.in this case only we can do it like age += 1 means age = age +1

let sum = 3;

sum += 1;  //sum = sum + 1
console.log(sum);

//ye mostly saare maths operators ko aise kr skte hain += -= /= %= **=..

// let n = 12
// n /= 2;
// console.log(n);  //6

// let n = 2
// n **= 3;
// console.log(n);  //8

let n = 13
n %= 2;
console.log(n);  //1