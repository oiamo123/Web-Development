class User {
    constructor (firstName, lastName, email, country, password) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.country = country
        this.password = password
        }
}

const passwordMismatch = function (pass1, pass2) {

}

const password = document.querySelector(`.sign-up-password`)
const confirmPassword = document.querySelector(`.confirm-password`)

document.querySelector(`.sign-up-form`).addEventListener(`submit`, function (e) {
    e.preventDefault()
    const firstName = document.querySelector(`.f-name`)
    const lastName = document.querySelector(`.l-name`)
    const email = document.querySelector(`.sign-up-email`)
    const country = document.querySelector(`.country`)

    if (password.value === confirmPassword.value) { 
        new User(firstName, lastName, email, country)
        console.log(`user submitted`)  
    }
})

document.querySelectorAll(`.password`).forEach(pass => {
    pass.addEventListener(`input`, function () {
        console.log(password.value)
        console.log(confirmPassword.value)
        console.log(password.value === confirmPassword.value)
        if (password.value !== confirmPassword.value) {
            password.setCustomValidity(`Passwords do not match`)
        } else {
            password.setCustomValidity('')
        }
    })
})

