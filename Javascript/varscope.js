// scope ke type 

// 1. Global Scope
// 2. Local Scope (function scope)
// 3. Block scope

// example global scope :

// let name = "Rahul" 

// function show() {

//     console.log(name)

// }
// show()

// console.log(name)



// example local scope(Function scope) :

// function show() {
//     let name = "Rahul" 
//     console.log(name)
// }
// show()



// example local scope (block scope) :

// if (true) {

//     let city = "Delhi"
//     console.log(city)
    
// }

//  console.log(city)



// pre increment ++i
// Pahle increase , Fir use

let i = 5
// console.log("pre-increment",++i) // pre increment
console.log("pre-increment",i++) // post increment
console.log(i)

let ans = 5 + 3 * 2 > 10 && 20 / 2 == 10
console.log(ans)