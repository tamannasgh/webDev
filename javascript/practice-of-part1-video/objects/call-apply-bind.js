const user1 = {
    name: "tamanna",
    age:16,
    about(){   //shorthand syntax same as about: function(){...}
        console.log("hey my name is", this.name, "and my age is", this.age);
    }
}

//nothing new til now lets run user1.about()

user1.about();  //again nothing new

//ok lets create user2
const user2 = {
    name: "krishna",
    age: Infinity,
}

//now can we call user2.about() no obviously so how can we get info about user2?
//we can copy and paste the method, huh! that's an old way, can we access user1 function with user2 in place of this??

//yes,! we can as in javaScript functions are objects as they can have methods they can be passed, returned etc

//and the methods of function are very useful like call, apply and bind

//we can call, call methed of about function it takes first arg and assign and replace with this and other params to the params in that function

//lets call user1.about with replacing user2 with this

user1.about.call(user2);
//as you can see this value is replaced by user2
//and usually this type of function is created outside of all objects and call as about.acll(userN)

//lets create a function outside which will print the name and where the user live and this is going to be the param that we will pass

function printLocation(location){
    console.log("hey im", this.name, "i live in", location);
}

//lets call it with user1 as this and then params individualy

printLocation.call(user1, "delhi");

//now with user2

printLocation.call(user2, "delhi");

//cool, now lets crete a function that will print name, and 5 favourite colors that we will pass

function print5FavColors(first, second, third, forth, fifth){
    console.log("im", this.name, "and my fav 5 colors are", first, second, third, forth, fifth);
}

//hmm so badd

print5FavColors.call(user1, "black", "white", "violet", "yellow", "gray")

//actually so bad!

//we can do like ...colors in function but have to pass individually and apply comes in rescue it takes 2 params, param 1 is this and 2 param is an array or array-like object

const favColors = ["black", "white", "violet", "yellow", "gray"];
//like here we have favColors array we cannot pass it in call we have to like fav[0]...fav[n] or use spread operator but we can do it in simple way with apply fisrt param will be replaces with this and second will be an array and elements are going to be the value of other params in func

function print5FavColors2(first, second, third, forth, fifth){
    console.log("im", this.name, "and my fav 5 colors are", first, second, third, forth, fifth);
}

print5FavColors2.apply(user1, favColors)//same output but looks nice

print5FavColors2.call(user1, favColors)  //if we do it with call and ya note that if the values are not passed it will be undefined as usual


//call and apply are just same the diff is just that call accept first param as this and all params individually or comma seperated and apply accept first as this and second an array of all params.

//bind does the similar thing the difference is that it wil not call or run that immidiately instead it will return the function in which this will be binded to the first arg and we can either pass args individually or when calling later


function printHobbies(hobby1, hobby2){
    console.log("im", this.name, "and my habbies are", hobby1, hobby2);
}

let user1Hobbies = printHobbies.bind(user1, "eating", "travelling");
user1Hobbies();

//or we can do it like this

let user2Hobbies = printHobbies.bind(user2);
user2Hobbies("playing flute", "raas");
