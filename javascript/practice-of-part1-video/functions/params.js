//default params

function sum(n1,n2){
    return n1+n2;
}
console.log(sum(2,3) );
//but what if i give 1 param only, it will give  NaN as if n2 will not be passed it will be undefined 
//so to solve this problem we can use default params we know about it from js.info buty for revesion

function sumSafe(n1=0, n2=0){
    return n1 + n2;
}

console.log( sum(2));  //NaN
console.log(sum());   //NaN

console.log( sumSafe(2) );
console.log( sumSafe() );
//and this default value in the right side can be anything even a function call.




//rest params

//sometimes a function have to take many many numbers for example this sum function may be i need to sum 3 or 5 or 16 nums but this is only taking 2 so, to solve this problem we can use rest params

function sumMany(...nums){
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    return sum;
}

//...<name> is an array it will take all params and store and then we can access it
//this is reverse of spread operator, spread operator spread the elements and this is rest syntax it will collect the elements.



//param destructuring

//let say i give you a task to make a function showDetails that will give details of a book object, there are four props in all books name of the book, writer of the book, no of pages of a book and this is optional default value is 100, and the last thing is language of the book

function showDetails(name, writer, pages = 100, lang){
    const book = {
        name,   //name: name,   
        writer,
        pages,
        lang,
    }

    for(let [key, value] of Object.entries(book)){
        console.log(`${key} : ${value}`);
    }
}

const book1 = {
    name:"javaScript",
    writer: "tamanna",
    lang: "Hindi mst",
}
showDetails(
    book1.name,
    book1.writer,
    undefined,
    book1.lang
);

//as u can see its not a great way of doing this, passign order matter so the first que is how will u remember it? second thing if a param is optional default value is there still u have to pass undefined for itif its not the last param

//param destructuring comes to rescue!

function showDetails2({name, writer, pages = 100, lang}){
    //here we're directy destructuring the object so no need to pass undefined for optional values and no need to remember the order just pass the book object
    const book = {
        name,   //name: name,   
        writer,
        pages,
        lang,
    }
    
    for(let [key, value] of Object.entries(book)){
        console.log(`${key} : ${value}`);
    }
}

showDetails2(book1);




//first class function vs higher-order function
//scopes: lexical, blocck, function
//callback function
