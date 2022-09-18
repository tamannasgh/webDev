function fun(){
    console.log(this);
}

fun();


const obj1 = {
    name: "tamanna",
    age: 16,
    fun,  //same as fun: fun
}

const obj2 = {
    name: "radha",
    age: Infinity,
    fun,
}

obj1.fun();
obj2.fun();


//but arrow functions mei thoda alg h wo this lete h apne parent function se jahan wo declared h

const obj3 = {
    name: "kanaha",
    age : Infinity,
    fun(){
        let fn = () => console.log(this);
        fn();
    }
}

obj3.fun();










