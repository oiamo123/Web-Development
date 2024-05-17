class User {
    constructor (firstName, lastName, email, country, password) {
        this.firstName = document.getElementsByClassName(`f-name`).value
        this.lastName = document.getElementsByClassName(`l-name`).value
        this.email = document.getElementsByClassName(`sign-up-email`).value
        this.country = document.getElementsByClassName(`country`).value
        this.userCredentials = [this.firstName, this.lastName, this.email, this.country]
        this.checkFields()
        }
        checkFields() {
            if (this.firstName !== undefined && this.lastName !== undefined && this.email !== undefined ) {
                console.log(this.firstName)
                this.checkPasswords()
            } else {
                this.userCredentials.forEach(credential => {
                    console.log(credential.id)
                    // if (credential === undefined) document.querySelector(`[for]=${credential}`)
                })
            }
        }

        checkPasswords() {
            const password = document.getElementsByClassName(`sign-up-password`).value
            const confirmPassword = document.getElementsByClassName(`confirm-password`).value
            if (confirmPassword === password) {
                alert(`user created`)
                this.password = password
            } else {
                alert(`passwords do not match`)
            }
        }

}

document.querySelector(`.submit-sign-up`).addEventListener(`click`, () => {
    new User
})