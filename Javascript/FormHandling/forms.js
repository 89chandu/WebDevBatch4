// Form Handling and Form Validation

// 1. Form selct krna
// 2. Submit event
// 3. event.preventDefault()
// 4.input ki .value lana
// 5. required filed validation
// 6. trim()
// 7. email validation
// 8. password
// 9. error message show/hide
// 10.form reset


const form = document.querySelector("#myForm")

const name = document.querySelector("#name")

const email = document.querySelector("#email")


form.addEventListener("submit", function (event) {

    event.preventDefault()

    if (name.value === "" && email.value === "") {
        console.log("name and email both are required")
    } 
    else {
        console.log("Form Submitted successfully")
    }


    // const nametrim = name.value.trim()

    console.log(name.value.trim())
    console.log(email.value)

    // trim()

})