

const taskInput = document.querySelector("#taskInput")

const addBtn = document.querySelector("#addBtn")

const taskCount = document.querySelector("#taskCount")

const taskList = document.querySelector("#taskList")


let tasks = []

//1. load task

const savedTasks = localStorage.getItem("todos")

if(saveTasks) {
    const parsedTask = JSON.parse(savedTasks)

    if(Array.isArray(parsedTask))
        tasks = parsedTask
    // tasks = JSON.parse(savedTasks)
}



//2. saveTask Function

function saveTasks() {

    localStorage.setItem(
        "todos",
        JSON.stringify(tasks)
    )
}

// 3. Display task 

function renderTasks() {
    taskList.innerHTML = ""

    tasks.forEach(function (task ,index) {
        const li = document.createElement("li")
        li.innerHTML = `
                    <span>${task}</span>
                    <button class ="deleteBtn data-index="${index}">
                    Delete
                    </button>
        `
        taskList.append(li)

    })
    taskCount.textContent = tasks.length

}

//4. Add task

addBtn.addEventListener("click" , function () {

    const task = taskInput.value.trim()

    if (task === "") {
        return
    }

    tasks.push(task)

    taskInput.value = "" 

    saveTasks()
    renderTasks()

})


//5. Delete Task

taskList.addEventListener("click" , function(event) {

    if (event.target.classList.contains("deleteBtn")) {
        const index = event.target.dataset.index

        tasks.splice(index,1)

        saveTasks()
        renderTasks()
    }

})

renderTasks()











