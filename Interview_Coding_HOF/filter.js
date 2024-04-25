// Question 2 : Return only the  details of those student  who scored more than 60 : 
let student = [
    {
        name : "Ben",rollNumber : 23 ,mark:95
    },
    {
        name : "Ashik",rollNumber : 17 ,mark:100
    },
    {
        name : "Edwin",rollNumber : 29 ,mark:96
    },
    {
        name : "Akshay",rollNumber : 9 ,mark:97
    },
    {
        name : "Karthik",rollNumber : 39 ,mark:98
    },
    {
        name : "Aaron",rollNumber : 1 ,mark:99
    },
] 

// Filter : 
const result = student.filter((stu)=> {
    return stu.mark > 97
} )
console.log(result);