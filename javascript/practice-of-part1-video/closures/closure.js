function outer(){
    let a = 10;
    function inner(){
        let b = 20;
        function inner2(){
            console.log(b);
        }
        return inner2;
    }
    return inner();
}

outer()();


//closure na kya hota h ki jse simple h bilkul kya hota h jb bhi hum kisi function ke andr uske lexical scope ke vars use krte hna to ek scope sa create hota h closure naam ka uske andr wo saare vars hote h jo humne use kre h humne function mei or jb bhi hum us function ko return krte h ya paas krte hna tb wo closure ko leke jaata h apne saath ab khud dekho yahan pr oter -> inner -> inner2 h or in the end mene inner2 return kra h jo inner ka b variable use krra h to ab inner2 ke scope mei kya hoga ek closure or uske andr b hoga or jb bhi hum ise pass krenge to ye closure uske saath uthke jaega
//bss yhi h closure