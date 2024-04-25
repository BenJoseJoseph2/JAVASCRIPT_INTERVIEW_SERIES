//  PollyFills For Map : 

// Array.map((num,i,arr)=>{})

Array.prototype.myMap = function(cb){
    // Create new array : 
    let temp = [];
    for(let i = 0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}

const nums = [1,2,3,4,5]

const mult = nums.myMap((num,i,arr)=>{
    return num * 3;
});
console.log(mult);