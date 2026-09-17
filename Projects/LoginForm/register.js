

const username = document.querySelector("#username")
const usernameError = document.querySelector("usernameError")

const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")

const password = document.querySelector("#password")
const passwordError = document.querySelector("#passwordError")

// username validation
username.addEventListener("blur" , function () {

    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required"
    }
})

username.addEventListener("input" , function () {

    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required"
    } else {
        usernameError.textContent = ""
    }
})

// password validation
password.addEventListener("input" , function () {

    const value = password.value

    if (value.length === 0) {
        passwordError.textContent = "Password is required"
    }
    else if (value.length < 8 ) {
        passwordError.textContent = "Password must be at least 8 characters"

    } else {
        passwordError.textContent = ""
    }

})

// email validation

email.addEventListener("blur" , function () {

    const value = email.value.trim()

    if (value === "") {
        emailError.textContent = "Email is required"
    }

    else if (!value.includes("@")) {
        emailError.textContent = "Enter a valid email"
    }

    else {
        emailError.textContent = ""
    }


})


const form = document.querySelector("#registerForm")

form.addEventListener("submit" , function (event) {

    event.preventDefault()

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(usernameValue === "") {
        usernameError.textContent = "username is required"
        return
    
    }
    if(emailValue === "") {
        emailError.textContent = "email is required"
        return
    }
    if(passwordValue < 8) {
        passwordError.textContent = "password kee length 8 se jyada hona"
        return
     }

     console.log("Registration Sucessfull")


})





