

const form = document.querySelector("#loginForm")

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const message = document.querySelector("#message")


form.addEventListener("submit" , function (event) {
    event.preventDefault()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    
    if (emailValue === "") {
        message.textContent = "Email is Required"
        return
    }
    else {
        if (passwordValue === "") {
        message.textContent = "Password is Required"
        return
        } 
    }
    message.textContent = "Login Succesfull"
})