function abc(){
    console.log(a,b,c);
    const c = 300;
    let b = 20;
    var a = 10;
}
abc()

/**
 * Output : 

        Hoisted In Temporal Dead Zone ...(let and const behaves specially ...)
 */