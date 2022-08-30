//spread operator in objects

let obj = {
    key1: "value1",
    key2 : "value2",
};

let obj2 = {
    key2 : "value2fromObj2",
    key3: "value3",
    key4: "value4",
};

//we know many ways to make a cole of an object, using for in loop and u know how, object.assign and there is another way of doing this by spread operrator

//we can do it just like

let objClone = {
    ...obj,
};

console.log(objClone);
console.log(obj === objClone);  //actually a clone

//we can merge 

let mergedObj = {
    ...obj,
    ...obj2,
};

console.log(mergedObj);   //same like object.assign existing properties will be overwritten as the process goes

let obj3 = {
    ...["tamanna", "ishika"],   //arrays krte h to object mai to index key or value element bn jata h
    ..."abc", //same idhr
};

console.log(obj3);
