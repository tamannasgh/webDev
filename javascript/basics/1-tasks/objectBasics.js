//Task 1

let user = {};
user.name = "john";
user.surname = "smith";
console.log(user);

user.name = "pete";
console.log(user);

delete user.name;
console.log(user);





//Task 2

function isEmpty(obj){
    for(let i in obj){
        //means property exist and at the first go false will be returned
        return false;
    }
    //if it comes here means the loop is not ran even once means the obj is empty
    return true;
}

let schedule = {};
console.log(isEmpty(schedule));   //true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));  //false



//Task 3


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let i in salaries){
    sum += salaries[i];
}

console.log(sum);




//Task 4

function multiplyNumeric(obj){
    
    for(let i in obj){

        // if( (typeof obj[i]) !== "number" ) continue;
        // obj[i] *= 2;

        if(typeof obj[i] === 'number'){
            obj[i] *= 2;
        }

    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);
  