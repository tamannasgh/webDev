//switch statements use when there are just so many if-else statements 

let i = 3;

switch(i){
    case 3:
        console.log("its 3");
        console.log("haha");
        break;
    case 4:{
        console.log("its 4");
        break
    }
    case 2:{
        console.log("right its 2!");
        break
    }
    default:{
        console.log("not a number");
    }
}
//curly brackets are not req in cases but just for my habit

//it goes like we will write switch(onThis) is this case we're switching acc to i and the type matters here 
//break is needed after every case if brea isnt there it will not stop til the end

//we can write like this if we want some cases to be same
switch(i){
    case 2:{
        console.log("yup its true");
        break;
    } 

    case 3:
    case 4:
    case 5:{
        console.log("its greater");
        break;
    }
}

//break is not needed in the last but just for future

//can can be an expressions means soliving and then comparing

switch(i){
    case 2+1:{
        console.log("it will work as well");
        break;
    }
    case 3:{
        console.log("it will not beacuse after run one case it will exit");
    }
}

switch(i){
    case '3':{
        console.log("it willl not work beacuse type matters");
        break;
    }
    default:{
        console.log("it will run");
    }
}