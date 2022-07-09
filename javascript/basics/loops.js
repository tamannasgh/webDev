//loops is used when you need to repeat a single task
//for example greet 5 times
for(let i = 0; i < 5 ; i++){
    console.log("radhe krishna!");
}

//it is for loop fits in every situation but mostly use when you know ow many times you need to run loop for example in this i know im running n times means 5 times
//it goes like
//  for(initialization; condition; increment){
//     body;  
//  }

//i is nothing just a counter.
//it will go like first initialize i = 0 nw check is i is less than 5 yes, now run the body or do the task now increment the counter or i and check the condition is i(1) < 5 yes, run the body again incr then check then run til condition become false when i will be 5 it will be like is 5 < 5 false, so dont run the body and get out of the loop

//we can skip things but not semicolons

let i = 0;
for(; i < 5; i++){
    console.log(i);
}
let j =0;
for(; j < 5;){
    console.log(j);
    j++;
}

//while loop it can also fit in many situations but mostly used when we dont know how many time we're ganna run the loop
let x = 0;
while(x < 5){
    console.log(x);
    x++;
}

//it goes like first initialization then in while(condition) we write our condition and then if condition is true it will run the body and increment happens in body also
//the great example can be you will pick a number and user have to guess it num will be in range 1 -10 so now we dont know how many times yoy will run the loop so
let pickedNum = 3;
let guessedNum = 0;
while(pickedNum !== guessedNum){
    guessedNum = +prompt("guess a number in range 1 - 10 and i will tell you if you guessed right or not!");
    if(guessedNum === pickedNum){
        alert("right!");
    } else{
        alert("mm not really..!")
    }
}

//more cases will come when you write more complex programs

//do while this used when you want to run the loop atleast onece even if condition is wrong

let counter = 0;
do{
    console.log("it will print at least once even if condition is wrong");
}while(counter != 0)

//it goes like initialization or whatever first do then check

//sometimes it happens that we want to et out from the loop
//we can do it with break;

for(let i =0; i < 10 ; i++){
    if(i === 4){
        break;
    }
    console.log(i); //0, 1, 2,3 but when i increses to 4 and condition will be like true so body will run but inside the body if condition will run first then i will just break out of the loop even though loop isnot ended yet
}

//sometimes we actually not want to break the wholeloop but skip a iteration we can use continue for that

for(let i =0; i < 5 ; i++){
    if( i == 2){
        continue;
    }
    console.log(i);  //1, 3,4
}

//it will be like when i will increased to 2 the if condition will be true so it runs the if block and continue to the next iteration

//but what about nested loops let say we want to break out from all loops not only from the inside one we can do something like

for(let i = 0 ; i < 3; i++){
    for(let j = 0; j < 10 ; j++){
        if(j === 5){
            break;  //it will break the inner loop only 
        }
        console.log(i, j);
    }
}

console.log("if we do something like label: for... we can write break label and it will break that loop");
outer:
for(let i = 0 ; i < 3; i++){
    for(let j = 0; j < 10 ; j++){
        if(j === 5){
            break outer;  //it will break the whole loop 
        }
        console.log(i, j);
    }
}

//same thing can be done with continue also