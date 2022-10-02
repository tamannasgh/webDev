console.log("start");

function getUsers(){
    const users = ["tamanna", "ishika", "vanshika", "kitty", "addu", "abhav"];
    return  users;
}

const timeoutId = setTimeout( () => {
    const users = getUsers();
    console.log(users);
}, 1000 );

console.log(timeoutId);

clearTimeout(timeoutId);



const intervalId = setInterval( () => {
    console.log("hey there!");
}, 2000);


clearInterval(intervalId);


console.log("end");










