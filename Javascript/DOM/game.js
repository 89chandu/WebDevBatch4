

const status = document.querySelector("#status")
const finish = document.querySelector("#finish")


finish.addEventListener("click" , function () {

    const result = document.createElement("h2")

    result.innerText = " 🎉 You Won !"

    status.replaceWith(result)

})




