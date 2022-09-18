//this call krte wqt hi value lega

// console.log(this);
function fun(){
    console.log(this);
}
// fun();

const obj = {
    name: "tamanna",
    age: 16,
    about(){
        console.log(this);
    }
}

function objTest(callback){
    console.log("haha");
   callback();
}


objTest(obj.about);   //window kyunki callback mei jaari h f ki body joki h log(this)  or ye objTest bna hua h global exc contxt mei to this h window (default binding se)

objTest( obj.about.bind(obj) );   //1st way   (ye explicit binding krre h isse chahe kahin bhi ho call pr ye bndh chuka h ab obj se)

objTest( () => obj.about() );  //2nd way  (ye h implicit binding mtlb hum jb call krte h to . se pehle kya h obj to bss ye usi ko this bna lega)



const obj2 = {
    name: "kanha",
    about(){
        console.log(this);
    }
}

obj2.about();


class Person{
    constructor(name){
        this.name = name;
    }

    about = () => {
        console.log("this", this);    //arrow f jahan declare hua h uske parent se leta h this
    }
}

const p1 = new Person("radha");
// p1.about();

function fn(callback){
    callback();
}

fn(p1.about)