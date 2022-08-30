//nested bhi aise hi hogi bilkul

let users = [
    {
        id: 1,
        name: "tamanna",
        age : 16,
    },

    {
        id: 2,
        name: "ishika",
        age:20,
    },

    {
        id: 3,
        name: "vanshika",
        age : 19,
    },

    {
        id: 4,
        name: "kanishka",
    },
];

//bss saari cheezein waise hi hongi sign lgate jao
//extract kro
// -user1 ki id or Naam 
// -user2 ki id and, naam or age array mai rkhdo
// -user3 ka kuch nhi
// -user4 ki bss age  or agr age na ho to 13

let [ 
    {id: user1Id, name : user1Name},  
    {id: user2Id, ...restInfoUser2}, , 
    {age: user4Age = 13} 
] = users;

console.log( user1Id, user1Name);
console.log(user2Id, restInfoUser2);
console.log(user4Age);