// OR || operator returns the first truth value and don't even look at the others but if none is truth returns the last value.

console.log(2>3 || 3>4 );  //in every other language its possible

console.log(1 || 0);  //1, only possible in javascript 
//in all other languages || operator works only between boolean values but in javascript it can we dne like console.log(1 || 0) it will give 1 first it will convert it into boolean so 0, null, undefined, empty string, NaN becomes false and evrything else becomes true so 1 become true and 0 bcome false than it actully find the firt true value so it finds at first o and return in its real form (1 not in true)

//the OR operator used when you want to execute a block of code if more than one condition is true for example write a program to print if its working day or not you can go like:


// let day = "Saturday";

// if(day == "Monday"){
//     console.log("working day");
// }
// else if(day == "Tuesday"){
//     console.log("working day");
// }
// else if(day == "Wednesday"){
//     console.log("working day");
// }
// else if(day == "Thursday"){
//     console.log("working day");
// }
// else if(day == "Friday"){
//     console.log("working day");
// }
// else if(day == "Saturday"){
//     console.log("not a working day");
// }
// else if(day == "Sunday"){
//     console.log("not a working day");
// } else{
//     console.log("not even a day");
// }


//are you able to see this repetition this is just a single line though but it is repetition indeed and there are many other cases let say if its a working day program is to do many things like increasing salary, travel etc.. so can't we do something like if(this or this or this or this){do these or this thing}
//Yup!! you can with OR || operator how?
//it will find first true ans and when it returns true the if statement's block wille xecute why? remember if block will execute if the condition return true

let day = "Wednesday";

if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
    console.log("working day");
} else if(day == "Saturday" || day == "Sunday"){
    console.log("not a working day");
} else{
    console.log("not even a day");
}

//yeah the code was working previosly also but just look how clean and neat this is! and a DRY code(Don't Repeat Yourself!)

//how it works internally is == operator will return true/false day == "Monday" returns false, day == "Tuesday" returns false and how OR works finds the first true and return in its real form and if none of them are true return last value so till now monday and tuesday returned false so OR will keep check til end and now finally day == "Wednesday" returns true so OR will stop now and will not even touch the other ones and return this in its real form and its real form is true so it will return true to the if statemen's condition condition is true so the block will execute and return "working day"!!

//the second logical operatirn is && AND operator which works very similar to OR the diff is just that || returns the first true value and && returns the first false value in its real form.

console.log(1 && 0);

//we can use this to write a program like let say check if the person is teenager you will be like if(age >= 13).. okk but wait are you a teenager at 30?? nope! you need two checks person's age should be >=13 AND <= 19 in these type of cases when we need to check more than one cases and all should be true we use AND operator but wait why? as it returns the first false value and return the last if all are true..yes! if all are true it will return the last one which will be definitely true and if one of them are false it will not touch the others just returns that in its real form
let age = 15;

if(age >= 13 && age <= 19){
    console.log("you're teenager");
} else{
    console.log("you're not teenager");
}

//precedence of && is greater then ||


let is3Greater = !(2>3);
console.log(is3Greater);
// The third operator ! accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.  (2>3 = false)
// Returns the inverse value. (!false = true)

//sometimes it can we used in boolean conversion like 
console.log(!!1);  //first 1 converted to boolean (true) than true inversed (false) than false inversed(true), first we inversed than invered back hence its back in its real

//we can use it in some cases like if user haven't fill its name we can tell them to do
let user = "";
if(!user){
    console.log("plesae fill your name");
}

//first its converting user to boolean (its an empty string means user haven't filled, and empty string is false) and than we inversed it to true 
//we mostly use it as for example 
let accesible = false;
if(!accesible){
    console.log("not accesible");
}
//just pronouns it as 'if not' and use.


//the last one is nullish operator ?? which return the first value if its defined (not null or undefined) otherwise the second one.
console.log(null ?? undefined);  //undefiined beacuse null is note defined so the second is this.

//used in cases like
let username;  //i haven't put an empty strings becuase empty string is neither null nor undefined so just returned but in real life this will not empty string this will actually just undefined
console.log(username); //undefined
console.log(username ?? "anonymous");  //it will look if username is undefined or null its undefined so just return second value

//yup! we can use || in this case becuase that will also do the same thing return the first true value and undefined and null is false so it will do the same thing
console.log(username || "anonymous from ||");

//but the difference is || returns the true value and do conversions like stuff let say if height is just imagine 0 and we want a default value to be 10 whatever..the problem is let say user give the height 0 and if we use this same aproach that if user did not give ab=ny value then the defaul will be this 

let height = 0;

console.log(height || 10);  //giveing 10 but whyyy user have give 0!!, becuase || operator will first convert inti boolean than returns the first true value in its real form so after cinverting 0 become false so it returns the 10. this is the problem 

console.log(height ?? 10); //giving 0 because 0 is actually a defined value not null or undefined so in this case tis should be return not the default.
//that's why ?? operator should be use to do this thing






























