// Declaration : 
var a ; 
var a ; 

//  We cant re-declare variables like let and const in same scope .

// We can declare var and let without initializer value . 

//  We can reinitalize var and let ,  but not with const

//  Hoisting : 

    console.log(count);
    var count = 1;

    //  Let : Var and let are Hoisted .
    console.log(count1);
    let count1 = 10
    // Let is hoisted in temporal dead zone .