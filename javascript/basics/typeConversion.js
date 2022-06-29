let age = "15";
//whenever you recieve inputs from form like this user's age this is string, now you can't perform maths with this so you need to do type conversion in these kind of situations.

console.log(typeof age);   //string

let ageNum = Number(age);  //conversion
console.log(typeof ageNum);   //number

console.log(age + 1);    //151
console.log(ageNum + 1);    //16

// Numeric conversion rules:

// Value	Becomes…
// undefined = NaN
// null =	0
// true and false = 1 and 0
// string =	Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

//String(jise krna h convert), Boolean(jise krna h), Number(jise krna h)

// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

// Follows the rules:

// Value	Becomes…
// 0, null, undefined, NaN, "" = false
// any other value = true


// undefined is NaN as a number, not 0.
// "0" and space-only strings like " " are true as a boolean.