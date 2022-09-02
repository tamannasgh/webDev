//looping through the array

let arr = ["radhaKrishna ji", "tamanna", "javaScript", "java", "laptop",];

//traditional way
for(let i = 0 ; i< arr.length ; i++){
    console.log(i, arr[i]);
}

let i = 0;
while(i < arr.length){
    console.log(i, arr[i]);
    i++;
}

//for of loop (most used)
for(let element of arr){
    console.log(element); 
}

//for in loop (not nice but one should know)
for(let index in arr){
    console.log(`${index} : ${arr[index]}`);  //it will give index
}


//for each
arr.forEach( (element, index) => console.log(index, element) );
