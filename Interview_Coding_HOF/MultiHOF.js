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
];

// Qn : Return only name of student who scored more than 60 : 
const names = student.filter((stu)=>stu.mark > 80).
map((Ele)=>{
    return Ele.name;
})
console.log(names);