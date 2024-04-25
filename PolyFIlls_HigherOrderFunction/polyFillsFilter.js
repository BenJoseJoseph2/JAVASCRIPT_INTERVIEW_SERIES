

Array.prototype.Myfilter = function (cb){
    let temp = [];
    for(let i = 0 ; i < this.length;i++){
        if(cb(this[i],i,this)) temp.push(this[i])
        temp.push()
    }
    return temp ; 
}

const nums = [1,2,3,4];

const out = nums.Myfilter((num)=>{
    return num > 2;
})
console.log(out);