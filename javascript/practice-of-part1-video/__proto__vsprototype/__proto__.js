//when we create something that get access to some hidden props yes everything in js is an object internally and we can access that props with dot notation

let arr = [1,2,3,4,5];
console.log(arr);

let arr2 = new Array(1,2,3,4,5);
console.log(arr2);


function User(name, age){
    this.name = name;
    this.age = age;
}

User.prototype.about = function(){
    console.log(this.name, this.age);
}

console.log("baap hu mai ye h mera prototype", User.prototype);

const user1 = new User("tamanna", 16);
const user2 = new User("krishna", Infinity);
user1.about()
console.log(user1);


//hr function ke paas hota h ek object jiska naam h prototype or koi bhi function js mein ek constructor function bn skta h to kya hota h ki jo prototype hota h na uske andr hum methods likhte h or jb bhi mai us constructor function se koi object bnaungina new liikhke to usme __proto__ jo hota h na wo isi ka referece hoga (bche ka __proto__ hota h uske baap ka prototype)