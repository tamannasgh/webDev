//hoisting bss ye hota h ki jo js engine hota hna wo function declaration ko pehlehi interpret kr l;eta h or accesseble bna deta h to hum function declaration ko, declaration se pehle hi use kr skte h safely


// hey();  //reference error cannot use funtion expression beforeinitializition 
let hey = function(){
    console.log("hey");
}
hey();  //fine, obviosly

// hey2(); //same reference error cannot use arrow function before initialisation
let hey2 = () => console.log("hey");
hey2(); //fine

hello(); //fine!! yes wecan use function declaration before initialization and this is hoisting
function hello(){
    console.log("hey");
}
hello(); //fine