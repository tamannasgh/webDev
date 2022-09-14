//in objects there are props that is key:value pairs but a property is not only a key value pair, a prop have 3 special attributes (so-called flags) writable, enumerable, and configurable (these flags holds boolean value either true or false).

//writable: if true, we can modify the value, otherwise its read only.
//enumerable: if true, the prop will be listed in loop otherwise not listed.
//configurable: if true, the value can be deleted and the flags can be modified, otherwise not.

//if you wonder hat why til now we don't know about them, the reason is they don't show up, and by default they all are set to be true and we can modify them anytime.

const obj1 = {
    name: "tamanna",
    age: 16,
    learning: "javaScript",
}

//let see how can we get the flags of a property
//Object.getOwnPropertDescriptor(obj, property)

let descriptor = Object.getOwnPropertyDescriptor(obj1, "name");
console.log(descriptor);  //an object with all the flags and value

//we can change the flags with the method Object.defineProperty(obj, property, descriptor(object))
//(if the property exists the flags are modified otherwise creates the property with the given flags and flags which are not given value are setteb to false => only in non-existing prop otherwise just update the given property.)

//lets change the writable flag of name prop to false!

Object.defineProperty(obj1, "name", {
    writable : false,
});

// lets check now

console.log(Object.getOwnPropertyDescriptor(obj1, "name"));  //writable is false now!

//lets try to write something
obj1.name = "radha";   //will give erroe in strict mode
console.log(obj1); //not changed still tamanna


for(let key in obj1){
    console.log(key, obj1[key]);
}
//now lets make it out of loops (enumerable: false)

Object.defineProperty(obj1, "name", {enumerable: false})

for(let key in obj1){
    console.log(key, obj1[key]);  //name is now out of the loop
}

delete obj1.name;  //name is deletable

//lets add again
Object.defineProperty(obj1, "name", {
    value: "tamanna",
});

console.log(obj1);  //added

//now lets check its flags
console.log(Object.getOwnPropertyDescriptor(obj1, "name"));   //everything is setted to false and we know why.

//lets work with age and make it non deletable and non-configurable(configurable: false)

Object.defineProperty(obj1, "age", {configurable: false});
console.log(Object.getOwnPropertyDescriptor(obj1, "age"));

obj1.age = 15;
console.log(obj1);  //changed(note that value can be modified listed but can't be deleted and flags cannot be changed)

delete obj1.age;  //errror in strict mode
console.log(obj1);  //not deleted


for(let key in obj1){
    console.log(key, obj1[key]);  //listed
}

Object.defineProperty(obj1, "age", {writable: false});  //this is an exception because it can't harm

// Object.defineProperty(obj1, "age", {configurable: true});  //error!!!!


//there's a method that allows to define many props at once Object.defineProperties(obj, descriptors)
// Object.defineProperties(obj, {
//     prop1: {writable...configurable},
//     prop2: {writable...configurable},
//     prop3: {writable...configurable},
// });

//and so to get all props descriptors at once the method is Object.getOwnPropertyDescriptor(obj)


//but these things work on the single prop but fortunately there are methods for the whole object!

// Object.preventExtensions(obj)  isse kya hoga ki ab hum or add nhi kr skte props jitni h utni hi rehengi

// Object.seal(obj) isse sb mein configurable: false ho jaegi to add or remove kuch ni kr pange

// Object.freeze(obj) isse mtlb sb khtm add or remove nhi kr skte modify bhi nhi kr skte configurable: false or writable: false mtlb khtm ab bs access hi kr skte ho loop voop se

//or in sbke tests bhi h jse Object.isExtensible(obj), Object.isSealed(obj) and Object.isFrozen(obj) ye true ya false return krte h mst!




