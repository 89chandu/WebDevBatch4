// forEach() method

// ex 1
// let numbers = [10,20,30,40]

// numbers.forEach((num => {

//     console.log(num+2)

// })) 

// Example 2.

// let fruits = ["Apple" , "Banana" , "Mango"]

// fruits.forEach((fruit , index) => {

//     console.log(index,fruit)

// })

// Example 3 . 

// let numbers = [10,20,30,100000000]

// let sum = 0

// numbers.forEach((num) => {
//     sum = sum + num
// })

// console.log("sum of array elements :",sum)



// 2. map()

// Har element ko modify krke new array bnana

// syntax

// array.map((value) => {

// })



// let numbers = [10,20,30,40]

// let newarr = numbers.map(num => num + 1) 

// console.log(numbers)
// console.log(newarr)

// let prices = [100,200,300]

// let gst = prices.map(price => price + 18)

// console.log(gst)
// console.log(prices)

// filter()
// condition ke basis pr element ko select krta hai

// let numbers = [10,15,20,25,30,40,45,60,80,75]

// let even = numbers.filter(num => num % 2 == 0)


// console.log("new moified array after filter method :",even)
// console.log("original array with no changes :",numbers)

// example 2 :

// let marks = [35,80,90,25,70]

// let pass = marks.filter(mark => mark >= 40)

// console.log(pass)


// let age = [15,18,20,12,25]

// let adults = age.filter(a => a >= 18)

// console.log(adults)


// 4. find()

// purpose : sirf pehla matching elements return krta hai 

let numbers = [19,10,21,10,50]

let result = numbers.find(num => num > 20)

console.log(result)

// Reduce Methods 

// reduce()
// array ke elements ko single value me convert krta hai.....

// let numbers = [10,20,30,40]

// let sum = numbers.reduce((total,num) => total + num ,0)

// console.log(sum)

// Boolean Methods
// some()

// At least one element should satisfy condition

// let numbers = [10,20,30]
// console.log(numbers.some(num => num > 12))

// every()
// All elements must satisfy condition

// let numbers = [10,20,30]

// console.log(numbers.every(num => num > 12))










