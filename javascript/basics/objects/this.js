//objects in real apps are used for real world enteties like a user, order
//and they can act or do some action like a user can select something from shopping cart and make an order etc

//actions are represented by functions

let user = {
    name: "tannu",
    age : 16,
    sayHi: function(){
        console.log("hey");
    },
    gender: "female",
}

user.sayHi();

//sayHi is a function but when a function is aproperty of object it known as method.

//but there is a short syntax for creating methods in object literals
//obj literals are just this let obj = {}, another one is constructor which we will be discussed later

let user2 = {
    name: "tamanna",
    sayHi(){
        console.log("hey");
    }
}

user2.sayHi();

//but in most cases the mathod needs to access the object in which its stored
//like display name method would need to access the name prop so for this "this" keyword is used

let user3 = {
    name: "ishu",
    displayName(){
        console.log(user3.name);   //it will be fine but what if we do something like admin = user3 then later user3 = null it will give an error
    }
}
user3.displayName()  //ishu

let admin = user3;

admin.displayName();  //sihu ok

user3 = null;  

// admin.displayName();  //error becuase inside this method user3.name is hardcoded so what we can do is this

let user4 = {
    name: "vannu",
    displayName(){
        console.log(this.name);
    }
}

user4.displayName();  //what is happening is that when i called it "this" will be replaced from the word before the dot (user4) in this case
//and if i do the same thing

let admin2 = user4;

admin2.displayName();  //vannu

user4 = null;

admin2.displayName();  //stilll vannu becuase its not hard caoded like the previous one but replaced at run time ("this" will be replace with the word before dot when called admin in this case)


//"this" is not bound means in other languages "this" is only in methods and if you try to access "this" in anormal function it will not give error
//in such cases the "this" will be replaced by globalobject (window in browsers) kya hota h ki bhale hi file khhali ho pr ek global onject bnta h or ye bnata kn h engine jse v8 chrome ka ingine h ye bnata h window ke naam se isme bhot saare functions variables hote h jse alert or jo hum sbse top level pr bnate h mtlb jse adim user variables kisi ke andr nhi hna file mai hi h seedha to ye sb bhi global object mai hi hota h hum ise user ya fir window.user krke bhi print kra skte h user likh ke ye isliye ho jata h kyunki agr hum kisi variable ya kisi ke peeche kuch nhi lgate to vo khud hi window. lga leta h ya fir aasam bhaasha mai ye maan leta h ki aap global object mai se hi access krre ho to jb hum kisi aise function jo ki function h method nhi usme this ko accesss krne ka try krte h to dot ke peehe wo dekhta h ki kya h kyunki whi to this bn jaata hna to ab jb kuch nhi hota to vo window dedeta h ab smjh gye kyunki this run time pr hi hota h replace or agr uske peeche kuch nhi h to window. h to this kisse replace hota h yaad hna word before dot to bss window aa jaata h

function func(){
    console.log(this);  //when it will be called it will find thw ord before dot
}

func(); //window  but in strict mode this will be undefined and 

console.log(this);  //window

//arrow functions have no "this"

let obj = {
    name: "pc",
    sayHi : () => console.log(this, "coming from arrow function"),
}

obj.sayHi();  //what window object but why will discuss later

//but for now arrow function are special they have some pluses and minuses as well so how can we access this from arrow function it can take from another if its wraped inside it

let obj2 = {
    name : "obj2",
    displayName(){
        let arrow = () => console.log(this);
        arrow();
    }
}

obj2.displayName();   //abhi shi aara h or hume reason bhi pta h  pr arrow function mai kyu nhi hota ye aage dekhenge abhi
