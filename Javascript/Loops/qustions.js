// print Squares of Numbers
// 1-10

// for (let i = 1; i <=10 ; i++) {
//     console.log(i*i*i) 
// }

// sum of even numbers
// 1 - 50

// let sum = 0
// let oddSum = 0

// for (let i = 1 ; i <= 20; i++) {

//     if(i % 2 == 0) {
//         console.log("even :",i)
//         sum = sum + i
//     } else {

//         console.log("odd :",i)
//         oddSum = oddSum + i

//     }


// }

// console.log("sum of even numbers : ",sum)
// console.log("sum of odd numbers : ",oddSum)



// Numbers Divisible by 3
// 1 - 100

// for (let i = 1 ; i <= 100 ; i++) {

//     if (i % 3 == 0 ) {
//         console.log("number is divisible by 3 :" ,i)
//     }
// }

// Numbers Divisible by 3 & 5 
// 1 - 100

// for (let i = 1 ; i <= 100 ; i++) {

//     if (i % 3 == 0 && i % 5 == 0 ) {
//         console.log("number is divisible by 3 & 5 :" ,i)
//     }
// }

// Factorial of a number

// 4!
// 4*3*2*1

const prompt = require("prompt-sync")();
let num = prompt("Enter your number:")

let fact = 1

for (let i = 1 ; i <= num; i++) {
    fact = fact * i
}

console.log("Factorial = ",fact)














