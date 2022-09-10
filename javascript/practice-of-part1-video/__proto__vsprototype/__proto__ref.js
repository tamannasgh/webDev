let obj = {
    name: "tamanna",
    age:16,
    about: function(){console.log("im about");}
}

console.log(obj);
const obj2 = Object.create(obj);
console.log(obj2.name);
