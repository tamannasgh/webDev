let arr = [1,2,3,4,5];


//map
let output = arr.map( (element, index) => {
    return { [index] : element*2};
});    
//map function ek callback func lega or return krega ek array jisme wo hoga jo tumne return kra h map ke callback function se

//map function tb use krte h jb tumhe kuch bhi krna h or fr store krna h ek array mai tb ye store kro
console.log(output);



//filter
//filter all num that are even

let output2 = arr.filter( (element) =>{
    return element % 2 == 0;
})  //filter ek array return krta h or kya krta h ki isme ek callback function daalte h jo return krega boolean value, agr value true hogi to ye array mein use add krdega nhi to nhi krega or is trike se end mai filtered hoke values aa jaengi.

console.log(output2)



//reduce 

let sum = arr.reduce( (acc, curr) => {
    acc += curr;
    return acc;
}, 0) 
//dekho ye thoda sa teda h isme na kya hota elemnt index wgerah nhi blki accumulator or currentValue hota h mai ise acc or curr likhti hu, pehle bss sunlo ki ye dono params ki value kya hoti h

//acc ki value hum dete h callback funct ke baad ye optional h agr hum dete h to acc ki initial value whi hoti h pr agr hum nhi dete to acc ki value arr[0] hoti h or curr ki value dekho, agr acc ki value humne pass kri h to curr ki arr[0] hoti h pr agr acc ki humne nhi di to acc ki hogi arr[0] or curr ki hogi arr[1],   fr iske baad ye srf first iteration ka h iske baad curr ki to mst apni whi loop ki trh +1 hoti jaegi pr acc ki suno dhyaan se hum kya krte h ki, callback function mai jo return krte h whi acc ki value bn jaati h 

//ab ye function ka return type ->  dekho agr acc ki koi initial value humne di h to acc ki value whi ho jaegi or mne btaya ki fr jo return krte h wo acc mai jaata h to end result ka type kya hoga jo initial value mein diya h whi simple, pr agr nhi diya to bhot simple h jo arr mein elements ka type h whi hoga kyunki nhi dene pr acc ki value hogi arr[0] ok!

console.log(sum);


