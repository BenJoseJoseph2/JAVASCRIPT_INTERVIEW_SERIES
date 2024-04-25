// Array.reduce((acc,i,arr)=>{})


Array.prototype.myReduce = function (cb,initialValue){
    var accumulator = initialValue;

    for(let i = 0; i<this.length;i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i]
    }
    return accumulator;
}

const nums = [1,2,3,4];

const out = nums.myReduce((acc,curr)=>{
    return acc + curr ; 
})
console.log(out);