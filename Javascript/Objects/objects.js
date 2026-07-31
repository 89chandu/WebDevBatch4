
// Objects : different data types kee values ko handle krne ke liye 

// Ek hee varriable me realted data ko store krte hai 

// syntax

// let obj {

//     key : value,
//     key : value 
// }


// let student = {
//     name : "Rahul",
//     age : 20,
//     city: "Delhi",
//     course : "javascript",
//     marks : 95
// }

// // add new properties
// student.email = "rahul@gmail.com"

// student.city  = "Mumbai"

// delete student.course




// // accessing values
// // console.log(student.name)
// // console.log(student.email)
// console.log(student)



// let employee = {

//     id : 101,
//     name : "Aman",
//     salary : 25000,
//     role : "Manager"
// }

// console.log(employee.name)

// console.log(employee.salary)

// console.log(employee)


// why object 

// to keep related information together , 
// related info ko sath me rkhne ke liye 

// check propert exist

// console.log("email" in employee)

// let student = {
//     name : "Rahul",
//     age : 20,
//     city : "Balaghat"
// }

// console.log(Object.keys(student).length)

// console.log(Object.keys(student))
// console.log(Object.values(student))

// console.log(Object.entries(student))
// console.log(student)



// Loooping Objects



// let student = {
//     name : "Rahul",
//     age : 20,
//     city : "Balaghat"
// }

// for(let key in student) {

//     console.log(key)
// }

// let student = {
//     name : "rahul",
//     age : 26,

//     address :{

//         city : "Balaghat",
//         state : "MP"

//     }
// }

// 


// Array Of Objects

// let students = [

//     {
//         name: "Rahul",
//         age: 20
//     },

//     {
//         name: "Aman",
//         age: 24
//     },

//     {
//         name: "Neha",
//         age: 19
//     }
// ]

// // console.log(students[0])
// console.log(students[1].name)

// function inside object

// let student = {

//     name: "rahul",

//     greet:function() {
//         console.log("hello")
//     },

//     add:function() {
//         console.log(2+6)
//     }


// }

// student.add()



// "this" Keyword
// ye reffer krta hain current object ko

// let student = {
//     name:"Rahul",

//     greet: function() {
//         console.log(this.name)
//     }

// }
// student.greet()

// problem 

// let student = {
//     name: "rahul",
//     greet: function () {
//         console.log(student.name)
//     }
// }

// student.greet()


// let student = {

//     name: "Aman",
//     age: 27,

//     greet() {
//         console.log(this.age)
//     }

// }

// // console.log(student.name)
// student.greet()


// this kyu ?


// let student1 = {
//     name: "rahul",
//     greet() {
//         console.log(this.age)
//     }

  
// }

// let student2 = {
//     name: "aman"
// }

// let student3 = {
//     name: "nisha"
// }

// console.log(this.name)


// object destrutring 

// let student = {
//     name: "rahul",
//     age: 20,
//     city: "Delhi"
// }

// let name = student.name
// let age = student.age
// let city = student.city

// console.log(name)
// console.log(age)
// console.log(city)

// // with destructring

// let student = {
//     name: "rahul",
//     age: 20,
//     city: "Delhi"
// }
// let {name , age , city} = student

// console.log(name)
// console.log(age)
// console.log(city)


// spread operator
// (. . .)

// let student = {
//     name: "Rahul",
//     age: 20,
//     roll:5567,
//     course:"Python"
// }

// let details = {
//     ...student,
//     city: "Delhi"
// }

// console.log(details)


// Rest Operator (Objects)

// let student = {
//     name: "Rahul",
//     age: 20,
//     city: "Delhi",
//     course: "Js"
// }

// let {...rest} = student

// console.log(rest)
// console.log(name)



// // Spread Operator

// let student = {
//     name: "Rahul",
//     age:20,
//     roll:7867
// }


// let details = {
//     ...student,
//     city:"Delhi"
// }
// // console.log(details)

// // Rest Operator

// let student = {
//     name: "Rahul",
//     age:20,
//     roll:7867
// }

// let {

//     ...best

// } = student

// console.log(best)

// ---- Merge Arrays With Spread -----

// let frontend = ["HTML","CSS","JS", "React js","Bootstrap","Talwind","Figma"]

// let backend = ["Node","MongoDB","Mysql","APis","Postman","Express js"]

// let fullstack = [...frontend,...backend]

// console.log(fullstack)

// let marks = [85,90,95]

// let copy = [...marks]
// console.log(copy)










