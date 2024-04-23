// var vs let vs const : 
// Scope :
 
//  Var is Global Scope : 
{
    var a = 5;
}

console.log(a);


//  Variable Shadowing : 

function test (){
    let a = "Hello";
    if(true){
        let a = "Hello Hai";
        console.log(a);
    }
    console.log(a);
}
test()

// Illegal Shadowing : 
 /**
  * We can shadow var variable using let , but we cannot shadow let variable using var :
  */

 function test1(){
    var a = 10;
    if(true){
        let a = 1010;
        console.log(a);
    }
    console.log(a);
 }
 test1()

//  Error occuring using shadow scoping let using var :

/*

function test3(){
    let a = 10;
    if(true){
        var a = 1010;
        console.log(a);
    }
    console.log(a);
}
test3()

*/
// Here We will be receiving error because we cant shadow let variable using var .... 