//class is nothing but function which makes easy to add methods in prototype

class Person{  
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }

    about(){
        console.log("hey im", this.name);
    }

    isAdult(){
        console.log(this.age >= 18);
    }
}   //this is class and its just same as constructor function the function body is the constructor and the methods that we were adding like Person.prototype.about = function(){...} its just that simple!

// const person1 = new Person("tamanna", 16);
console.log(typeof Person);  //function

class Developer extends Person{  //isse kya hoga ki developer saari props inherit krlega Person 
    constructor(name, age, which){
        super(name, age);  //we have to call the super constructor because this is going to make that this object child or derived class will not do this
        this.which = which;
    }


    //here we also want an about method same as parent class but a bit of modification we can do it btw if about function is written here only this will be called instead of the parent's one (this is known as function overriding)
    about(){
        super.about();   //calling about of the parent class
        console.log(this.which, "developer");  //then doing other stuff!
    }

}

const dev1 = new Developer("tamanna", 16, "frontend");  //ab iske paas saari props h Person waali class ki
dev1.isAdult();   //taking from parent or base or super class

console.log(dev1);
dev1.about();



