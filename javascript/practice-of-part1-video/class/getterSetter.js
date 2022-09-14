class Person{
    constructor(fName, lName,  age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    about(){
        console.log("hey im ", this.fName);
    }

    get fullName(){
        return this.fName + " " + this.lName;
    }

    set fullName(fullName){
        [this.fName, this.lName] = fullName.split(" ");
    }
}

//same object literals ke jse hi classes mei bhi hote h geeters or setters ye Persn.prototype mei hote h

const p1 = new Person("tamanna", "sharma", 16);
p1.about();

console.log(p1.fullName);

for(let key in p1){
    console.log(key, p1[key]);
}