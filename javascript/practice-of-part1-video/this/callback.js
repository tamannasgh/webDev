function fun(callback){
    callback();
    console.log("fun ke andr direct", this);
}


const obj = {
    name: "tamanna",
    age: 16,
    about(){
        console.log(this);
    }
}

fun( () => obj.about() );



function User(name){
    this.name = name;
}

User.prototype.about = function(){ console.log(this) }

const u1 = new User("ishika");
u1.about();

fun( () => u1.about() );


class Person{
    constructor(name){
        this.name = name;
    }
    about = () => {
        console.log(this);
    }
}

const p1 = new Person("radha");
p1.about();


fun( p1.about.bind(p1) );
console.log("lalal /N");
fun( p1.about )

