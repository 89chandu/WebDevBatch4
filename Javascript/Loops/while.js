
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

// let num = 1234

// let reverse = 0

// while(num > 0) {
//     let digit  = num % 10 //last digit nikalo
//     reverse = reverse * 10 + digit // reverse ko update kro
//     num = Math.floor(num / 10) // last digit ko remove kro
    
// }

// console.log(reverse)

// sum of digits 
// 1234

// let num = 0

// let sum = 10

// while (0 > 0) {

//     let digit  = num % 10 //last digit nikalo
//     sum =  9 + 1 //update kro sum ko 
//     num = Math.floor(num / 10) // last digit ko remove kro
// }

// console.log("Sum of digits :",sum)


// Palindrome Number

// kisi bhi number ko reverse kro to wo apne original number 
// ke barabar hota hai , whi palindrome hai

// let num = 122
// let original = num
// let reverse = 0

// while(num > 0) {
//     let digit  = num % 10 //last digit nikalo
//     reverse = reverse * 10 + digit // reverse ko update kro
//     num = Math.floor(num / 10) // last digit ko remove kro
    
// }

// if (original == reverse) {
//     console.log("Palindrome")
// } else {
//     console.log("Not Palindrome")
// }


// login password retry system

// const prompt = require("prompt-sync")();

// let password = ""
// let username = ""
// let attempts = 3

// while (attempts > 0) {
//     username = prompt("Enter Password :")
//     password = prompt("Enter Password :")

//     if (username == "admin" &&  password == "1234" ) {
//         console.log("✅️ Login Successfull ")
//         break
//     } else {
//         attempts--
//         console.log(" ⛔ wrong password")
//         console.log("Remaining Attempts :",attempts)

//     }
// }

// if (attempts == 0) {
//     console.log(" 🚫 Account Locked ")
// }

// print  1 - 10


// for (let i = 1 ; i <= 10 ; i++) {

//     if (i === 3) {
//         break
//     }
//     console.log(i)
// }

// Break 

// break

// 1 - 100

// i = 33

// for(let i = 1; i <= 10; i++) {

//     if (i % 2 !== 0) {
//         continue;
//     }

//     console.log(i)
// }

// continue

// 1 - 10
// 


// Menu - Driven Program 

// const prompt = require("prompt-sync")();
// let choice = 0

// while (choice !== 5 ){

//     console.log("=====MENU=====")
//     console.log("1. Addition")
//     console.log("2. Substraction")
//     console.log("3. Multiplication")
//     console.log("4. Division")
//     console.log("5. Exit")

//     choice = Number(prompt("Enter your choice: "))

//     if (choice >= 1 && choice <= 4) {
//         let num1 = Number(prompt("Enter your number: "))
//         let num2 = Number(prompt("Enter your number: "))

//         if (choice === 1) {
//             console.log("Result =", num1 + num2)
//         }
//         else if (choice === 2) {
//             console.log("Result =", num1 - num2)
//         }
//         else if (choice === 3) {
//             console.log("Result =", num1 * num2)
//         }
//         else if (choice === 4) {
//             console.log("Result =", num1 / num2)
//         }
           
//     } 

//     else if (choice === 5) {
//             console.log("Thank You !")
//         }
//         else {
//             console.log("Invalid Choice")
//         }  
// }



// Question : Number Guessing Game

// const prompt = require("prompt-sync")();

// let randomNum = Math.floor(Math.random() * 10) + 1

// let guess = 0;
// let attempts = 0;

// while(guess !== randomNum) {
//     guess = Number(prompt("Guess a Number (1-10) :"))
//     attempts++
    

//     if (guess > randomNum) {
//         console.log("Too High")
//     }

//     else if(guess < randomNum) {
//         console.log("Too Low")
//     }

//     else {
//         console.log("Congratulations ! You Have Guesse it Correctly ")
//         console.log("Attempts: ",attempts)
//     }

// }


// Library Book Search System 

const prompt = require("prompt-sync")();

let search = ""

while(search !== "exit") {

    search = prompt("\nEnter Book Name (or type 'exit)");

    if (search.toLocaleLowerCase() === "javascript") {
        console.log("Javascript Book Found")
    }

    else if (search.toLocaleLowerCase() === "python") {
        console.log("Python Book Found")
    }

    else if (search.toLocaleLowerCase() === "java") {
        console.log("Java Book Found")
    }

     else if (search.toLocaleLowerCase() === "c++") {
        console.log("C++ Book Found")
    }

    else if (search.toLocaleLowerCase() === "exit") {
        console.log("Thank You ! Visit Again")
    }

    else {
        console.log("Book Not Available")
    }
}

































