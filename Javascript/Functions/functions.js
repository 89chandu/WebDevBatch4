// Function 

// function greet(name) {
    
//     console.log("Welcome to techno skill : ",name)
  
// }
// greet("Shruti")

// function to print my details

// Function ko create kr rhe hai 

// Normal Function 

// function myDetails() {
//     console.log("Name : Mousam")
//     console.log("City : Balaghat")
//     console.log("Course : Javascript")
// }

// // Function ko call kr rhe hai 

// myDetails()

// Function With Parameters 

// input receive krta hai 


// function greet(name, age ) {
//     console.log(name, "my age is :",age )
// }

// greet("Nishnat",26)


// Function with return value 

// function add(a,b) {
//     return a + b
// }

// let result = add(7,4)

// let result1 = add(999,1)

// console.log(result1,result)


// Function Expression

// const a = function () {
//     console.log("Hello Student")
// }

// a()

// Anonymous Function
// jiska naam nhi hota hai


// setTimeout(function () {
//     console.log("hello")
// },1000)

// console.log("hiii ")


// Arrow Function ES^
// Modern JS Function


// const greet = () => {
//     console.log("Hello Student")
// }

// greet()


// const greet = (name) => {

//     console.log("Hello",name)

// }

// greet("rahul")


// // normal function
// function square(num) {
//     return num * num
// }

// arrow function 
// const square = num => num * num

// console.log(square(2))



//Callback Function 

// function greet(name) {
//     console.log("hello",name)
// }

// function process(callback) {
//     callback("rahul")
// }

// process(greet)

// exzample 2 of callback function 


// function receipt() {
//     console.log("Receipt Printed")
// }

// function withdraw(callback) {
//     console.log("Cash Withdrawn")
//     callback()
// }

// function deposit(callback) {
//     console.log("Cash Deposited")
//     callback()
// }

// deposit(receipt)



// Car Service 

// function customerCall() {
//     console.log("Calling Customer.....")
// }

// function repair(callback) {
//     console.log("Repair Completed")
//     callback()
// }

// repair(customerCall)


// function delivery() {
//     console.log("Pizza Delivered")
// }

// function makePizza(callback) {
//     console.log("making Pizza....")
//     console.log("Pizza ready")

//     callback()
// }

// makePizza(delivery)

// Real Life - Washing Machine

// function beep() {
//     console.log("beep beep beep")
// }

// function washing(callback) {
//     console.log("Kapde dhoye jare hai ......")
//     console.log("Kapde hokar Ho gye ")

//     callback()
// }

// washing(beep)

// Recursive Function

// Jab Function khud ko hee call krta hai 

// function countdown(n) {

//     if(n==0) {
//         console.log("Done")
//         return
//     }

//     console.log(n)
//     countdown(n-1)
// }

// countdown(5)


// Function Default paramenter

// function greet(name = "Guest") {

//     console.log("hello",name)

// }

// greet("Rahul")

// Function With Rest Parameter

// function print(...numbers) {
//     console.log(numbers)
// }

// print(10,20,40,60,70,80,30)

