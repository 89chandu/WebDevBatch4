

const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");


addBtn.addEventListener("click" , function() {
    const task = taskInput.value.trim()

    if (task === "") {
        return;

    }

    const li = document.createElement("li")

    li.innerHTML = `

            <span>${task}</span>
            <button class="deleteBtn">Delete</button>
    `

    taskList.append(li)
    taskInput.value = ""

}) 

// task delete krne ka code

taskList.addEventListener("click" ,function(event) {

    if (event.target.classlist.contains("deleteBtn")) {
        event.target.parentElement.remove()

    }
})
