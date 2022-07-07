console.log("everything returns something even '=' the assignment operator also does return the value same as this comaprisions operators also returns the boolean values");

console.log(2 < 3); // true

//the comparision operators are <, >, <=, >=, ==, !=

// All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”. or
// false – means “no”, “wrong” or “not the truth”.
// For example:

console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

// A comparison result can be assigned to a variable, just like any value becuase it returns a boolean value:

let result = 5 > 4; // assign the result of the comparison
console.log( result ); // true

//when comparing strings it compares it like dictionary wise

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

// In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

// The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:
// G is the same as G.
// l is the same as l.
// o is greater than e. Stop here. The first string is greater.

//ans in the third example B is same as B, e is sae as e, but first is long so first ane is greater

//When comparing values of different types, JavaScript converts the values to numbers.

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( 1 =='01'); // true, string '01' becomes a number 1

//For boolean values, true becomes 1 and false becomes 0.

console.log( true == 1 ); // true
console.log( false == 0 ); // true

//A regular equality check == has a problem. It cannot differentiate 0 from false:

console.log( 0 == false ); // true

// The same thing happens with an empty string:

console.log( '' == false ); // true

// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

// What to do if we’d like to differentiate 0 from false?

// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

console.log(0 === false); //false

//== operator converts values ito number to compare and we know null is 0 and undefined is NaN if converted to number but null == undefined is true this is special case!
console.log(null == undefined);

console.log(null === undefined);  //this is onvious becuase they bith are unique types

//null or undifined sirf ek dusre ke barabar h or kisi ke nhi null == 0 true hona chahiye kyunki null convert hoke number main bnega 0 to 0 == 0 true hona chahiye pr nhi aisa nhi h null sirf null or unefoned ke equal h or undefined bhi null or undefined ke equal hi h (non-strict), strict main to bss ek apne aap ke.
