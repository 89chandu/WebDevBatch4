

const username = document.querySelector("#username")
const message = document.querySelector("#message")


username.addEventListener("input" ,function () {

    if (username.value.length < 3 ) {
        message.textContent = "username is too short"
    } else {
        message.textContent = "username is valid"
    }
})