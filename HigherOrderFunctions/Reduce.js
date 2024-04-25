/**
 * Reduce : 

 */

const num = [1,2,3,4,5,6,7,8,9,10]
const sum = num.reduce((acc,currVal,i,arr)=>{
    return acc + currVal;
},0)
console.log(sum);