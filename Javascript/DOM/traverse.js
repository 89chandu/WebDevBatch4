


const addBtn = document.querySelector("#addBtn")
const students = document.querySelector("#students")

const studentData = [

    {
        name: "Rahul",
        course: "Javascript"
    },

    {
        name: "Aman",
        course: "Python"
    },

    {
        name: "Priya",
        course: "Web Dev"
    },

      {
        name: "Shubham",
        course: "Java"
    },

]

let index = 0


addBtn.addEventListener("click" , function () {

    const student = studentData[index]

    const card = document.createElement("div")

    const name = document.createElement("h2") 
    const course = document.createElement("p")
    const button = document.createElement("button")

    name.innerText = student.name
    course.innerText = student.course

    button.innerText = "Remove"

    card.append(name,course,button)

    students.append(card)

    button.addEventListener("click" , function () {
        card.remove()
    })

    index++
})





