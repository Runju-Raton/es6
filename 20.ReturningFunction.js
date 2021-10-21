function myFunc1(){
    return "Hello!";
}

function myFunc2(){
    return myFunc1();
}

console.log(myFunc2())