let student = [
    {
        name : "Ben",rollNumber : 23 ,mark:80
    },
    {
        name : "Ashik",rollNumber : 17 ,mark:90
    },
    {
        name : "Edwin",rollNumber : 29 ,mark:88
    },
    {
        name : "Akshay",rollNumber : 9 ,mark:88
    },
    {
        name : "Karthik",rollNumber : 39 ,mark:80
    },
    {
        name : "Aaron",rollNumber : 1 ,mark:80
    },
]

// Qn:1 Return Name in Capital letters :

// Using For Loop : 
let result = [];
for(let i = 0;i<student.length;
i++){
    result.push(student[i].name.toUpperCase())
}
console.log(result);

// Using Map : 
const res = student.map((name,index,arr)=>{
    // const names = student[index].name;
    return student[index].name.toUpperCase();
})

console.log(res);
// Using updated map : 
const result2 = student.map((stu)=>stu.name.toUpperCase())
console.log(result2);