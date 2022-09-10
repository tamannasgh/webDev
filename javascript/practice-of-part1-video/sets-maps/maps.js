//map is just object with some advantages ya definitely the syntax is different so lets practice

//map can be created with Map() constructor with new keyword

const myMap = new Map([ [1,"one"], [3,"three"]]);   //only iterables that are key, value paired are accepted in contructor
console.log(myMap);

//we can set props like myMap["name"] = "tamanna", but this will not actually stored in map or in other word map methods would not wrok on these and it will kinda ingnore the props made with dot or bracket notation 

//the correct way of setting a prop is .set(key, value)

//the map can store any type of keys like in object we can just store number string and symbol type of keys but in map here we can even make an objecta key and holding a value as an object!

myMap.set("name", "tamanna");

//and for getting a value its .get()

console.log( myMap.get("name") );  //if value doesn't exist undefined will be returned, tamanna in this case

//we can check if a prop exist in the map with .has()
console.log( myMap.has("name") );  //true if exits otherwise false

// we can delete a prop with .delete()

console.log( myMap.delete(1) );  //true if an element in the Map existed and has been removed, or false if the element does not exist.

console.log(myMap);   //as u can see 1 is deleted

//we can clear or empty a map in one g with .clear()

//we can get size of map with .size property in object we have to manually calculate it (its not a method a property)

console.log( myMap.size );

//we can chain the set prop as set returns the map

myMap.set("age", 16).set("gender", "female");
console.log(myMap.size, myMap);



// there are three ways in which we can iterate over a map

// Map.keys() return an iterator of keys
let keys = myMap.keys();
//now we have an iterator we can run a for of loop
console.log(keys);
for(let key of keys){
    console.log( myMap.get(key));
}

//or simply

for(let key of myMap.keys()){
    console.log( myMap.get(key) );
}


//map.values() returns an iterator of values

for(let value of myMap.values()){
    console.log(value);
}


//map.entries() returns an iteration of [key, value] pairs

for(let entry of myMap.entries()){
    console.log(entry);
}

//and there's foreach methos in maps same as  array

myMap.forEach( (value, key, map) =>{
    console.log( key, value );
} )



//map from object

//when initializing map we can pass an array or an iterable as we have done above

const obj = {
    name: "radha",
    gaaon: "barsana",
    sasuraal: "nand gaaon",
    bhartaar: "shyaam sundar",
}
const myMap2 = new Map(Object.entries(obj));
//object.entries returns an array in which there are key, value pairs of all props in arr form
console.log(myMap2);

//and we can make an object from map as well
// Object.fromEntries() takes an iterable in which there are key, value pairs and make props from those

const obj2 = {
    ...Object.fromEntries(myMap),
    mood: "mst"
};  //myMap is iterable so okk
console.log(obj2);