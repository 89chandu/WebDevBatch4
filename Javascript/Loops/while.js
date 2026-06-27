
// while loop 
// syntax

// initilization

// while (condition) {
//     //code
//     // inc/dec
// }

// print 1 to 5

// let i = 5

// while (i >= 1) {
//     console.log(i)
//     i--
// }

// even numbers
// range 20 - 40

// let i = 20
// let count = 0

// while (i <= 40) {

//     console.log("Even Number :",i)
//     count = count + 1
    
//     i = i + 2
// }
// console.log("Total Even Numbers :",count)


// count digits

// 24576

// const prompt = require("prompt-sync")();
// let num = prompt("Enter your number:")

// let count = 0

// let temp = num

// while (num > 0) {
//     count = count + 1
//     num = Math.floor(num / 10)
// }

// console.log("Number of digits in " + temp + " : ", count)



// reverse a number
// 1234
// 4321

let num = 1234

let reverse = 0

while(num > 0) {
    let digit  = num % 10 //last digit nikalo
    reverse = reverse * 10 + digit // reverse ko update kro
    num = Math.floor(num / 10) // last digit ko remove kro
    
}

console.log(reverse)









