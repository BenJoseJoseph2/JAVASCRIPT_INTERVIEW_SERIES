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
//  Qn : 4 Sum of marks of all the student  :
const res = student.reduce ((acc,curr)=>{
    return acc + curr.mark
},0)
console.log(res);