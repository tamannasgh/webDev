//sets are just like an array but with some great features

//we can initialize a set with new Set(iterable)

const mySet = new Set(["haha", "javaScript",3,"radhaKrishna",5]);
console.log(mySet);

//the main feature of sets is that we can add elements with set.add() and this will save a value only once means there are no duplicate values in set
mySet.add(6);
mySet.add(6).add(7);  //add returns the set itself so we can chain
console.log(mySet);   //i just added 6 two times but there is no duplicates!


//we can delete values from a set with set.delete(value)

mySet.delete(5);   //returns true if deleted otherwise false
console.log(mySet);   //5 deleted

//we can check if we have a value in set with set.has(value)

console.log(mySet.has(3));  //true if present otherwise false

//we can clear the whole set with set.clear()

//we can get size of element with mySet.size (its prop not a function)

console.log(mySet.size);


//iterate over a set

//we can run a for of loop
for(let value of mySet){
    console.log(value);
}

//set have a forEach
mySet.forEach( (value, againValue, set) => {
    console.log(value, againValue);
});
//this funny thing is just for compatibility with map

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

for(let value of mySet.keys()){
    console.log(value);
}

for(let value of mySet.values()){
    console.log(value);
}

for(let [value, againValue] of mySet.entries()){
    console.log(value, againValue);
}

