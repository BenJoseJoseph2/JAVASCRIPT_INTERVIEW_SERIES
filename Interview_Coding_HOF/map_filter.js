//  Qn:3 ) More than 60 marks and rollNumber greater than 15 : 

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

const result =  student.filter((stu)=>{
    return stu.mark > 60 && stu.rollNumber > 15 ;
})
console.log(result);