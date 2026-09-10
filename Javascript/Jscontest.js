// // 1. Global Execution Context (GEC)
// // 2. Function Execution Context

// // Execution Context ke 2 phases

// // 3.Creation Phase
// // 4.Execution phase 


// // Variable Enviroment
// // Lexical Enviroment 

// // Defination :


// // Execution contenxt ek Enviroment hai , jisem JS code ko
// //  prepare krta hai , Execution ke liye .

// // 

// let name = "Rahul"

// function greet() {
//     let message = "Hello"
//     console.log(message,name)
// }
// greet()


// // variable env

// // "var" keyword se bne huye variables kee 
// // bindings ko track krta hai

// var name1 = "Rahul"

// function test() {

//     var age = 20

//     console.log(name)
//     console.log(age)
// }

// test()


// // Lexical Enviroment (Scope) Kya hota hai ?

// // Lexical : - Code me likhi huyi location

// // Lexical scope ka matlb hota hai keee kisi variable ko kaha
// // se access kiya jaa skta hai .

// // ye uske code me likhe hone ki location se decide hota hai 









// // Variable Env

// //1. Mainly track krga "var" bindings
// //2. function/global execution ka part hai 
// // 3. var function scoped



// // Lexical env

// // 1. let const class etc kee bindings ko
// // 2. scope related enviroment
// // 3. let const block scoped




// function test() {
//     var name = "Rahul"
//     console.log(name)

// }

// test()
// console.log(name)

// if (true) {

//     let name = "Rahul"
//     console.log(name)

// }

// console.log(name)



// function test() {

//     if (true) {
//         var a = 10
//         let b = 20
//         const c = 30

//     }

//     console.log(a)
//     console.log(b)
//     console.log(c)
    
// }

// test()




// Memory Heap 

// Memory Heap : Javascript Engine Ka ,Memory Area hai 
// Jaha Par , Dynamically allocated data - objects , arrays , functions 
// store kiye jate hai

// Javacript Memory

// 1 . Call stack - > Abhi kya execute ho rha hai .
// 2 . Memory Heap - > dynamic data kaha allocated hai .

//call stack - >  LIFO - LAST IN FIRST OUT

//  Call Stack : Call stack ek Mechanism/Data Structure hai , 

// jisme javascript currently running , functions ke execution context 
// ko manage krta hai 


// let age = 20

// let student = {

//     name:"rahul",
//     age:20
// }

// function greet() {
//     console.log(student.name)
// }

// greet()


// Call Stack - 

// age -> 20
// student 
// greet > function


// memory heap 

// name:"rahul",
// age:20

// Javascript Engine : 

// Js Engine ek Software Program hai jo JS COde ko , 
// Samjhta hai , Aur machine ko execute krne layak 
// instruction mein convert krke run krta hai 

// js engine work - 

// 1. code smjhna
// 2. code ko instruction me convert krna , jo machine smjh ske


// JS Code - > JS Engine - > Machine level instruction -> CPU -> Result



// Chrome - V8
// Edge - V8

// Firefox - SpiderMonkey

// Safari  - JavaScriptCore(JSC)


// Node js bhi - V8 engine use krta hai 


// function add(a,b) {
//     return a+b
// }

// let result = add(10,20)

// console.log(result)

// js code - > parser 

// Parser -> Code ko analyze krna

// Javascript syntax sahi hai yaa nhi 


// let name = "Rahul"

// let = "Rahul"

// AST - > Abstract Syntax Tree

// Parser code ko ek structred tree me convert krta hai

// let x = 10 + 20

// x variable declration

// assignment

// addition - 10 20

// 4.Intrepreter 

// engine ast ko process krke code execute kr skta hai ab 



// code - parser - ast - intrepreter




// Syntax Error Vs Run Time Error in JS


//1. syntax error

// let a = 10 // valid 

// let = 10 

//2 . Runtime Error

let user

console.log(user.name)










