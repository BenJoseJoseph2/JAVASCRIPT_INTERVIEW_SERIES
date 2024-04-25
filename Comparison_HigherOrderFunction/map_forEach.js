

// Question : Map vs forEach : 

const arr = [2,5,3,4,7];

const out = arr.map((e)=>{
    return e + 2;
})

console.log(arr);
console.log(out);

// No modification in original array ... 

const out1 = arr.forEach((e)=>{
   return e + 2;
});
console.log(out1);

// But using the forEach we can modify the array ...