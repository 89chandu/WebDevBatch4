
// console.log(box.innerHTML)

// box.innerHTML = `<h2> Student Details </h2> 
//                 <p>Name: Rahul </p>
//                 <p> Age:20
//                 <img> </img>
                // `

// dynamic data ke sath inner HTML 


// let name = "Raju"
// let age = 20;

// let box = document.querySelector("#box") 


// box.innerHTML = `<h2> Student Details </h2> 

//                 <p>${name}</p>
//                 <p> ${age} </p>
                
//                 `


// Array se Multiple Cards ko banana


// let students = ["Rahul" , "Aman" , "Rohit","Shubham" ,"Rupesh","Abhay", "raj"]

// let box = document.querySelector("#box") 


// box.innerHTML = `

//                 <h2>${students[0]}</h2>
//                 <h2> ${students[1]} </h2>
//                 <h2> ${students[2]} </h2>
//                 <h2> ${students[3]} </h2>
//                  <h2> ${students[4]} </h2>
//                   <h2> ${students[5]} </h2>
                
                
                
//                 `

// students.forEach((student) => {
//     box.innerHTML += `<p>${student}</p>`
// })


let student = {
    name: "Rahul",
    age: 20,
    course: "Javascript"
}

let box = document.querySelector("#box") 

box.innerHTML = `

<h2> ${student.name} </h2>
<p> Age: ${student.age} </p>
<p>Course: ${student.course} </p>


`










