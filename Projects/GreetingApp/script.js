
const input = document.querySelector("#name")

const button = document.querySelector("#btn")

const message = document.querySelector("#message")


button.addEventListener("click" , function () {

    const name = input.value

    message.innerText = `Hello ${name}!`
})