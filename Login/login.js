const passYes = document.querySelector('.passYes')
const passNo = document.querySelector('.passNo')
const email_Input = document.querySelector('#email')
const password_Input = document.querySelector('#password')
const forgotPass = document.querySelector('.forgot')
const loginButton = document.querySelector('.loginButton')

let user_Email = ['gaspardani719@gmail.com', 'abelszolnoki@gmail.com']
let user_Username = ['gasparboss', 'shawtyy']
let user_Password = ['adminG123', 'adminS123']

passNo.addEventListener('click', function () {
    passNo.style.display = 'none'
    passYes.style.display = 'block'
    password_Input.type = 'text'
})

passYes.addEventListener('click', () => {
    passYes.style.display = 'none'
    passNo.style.display = 'block'
    password_Input.type = 'password'
})

forgotPass.addEventListener('click', () => {
    alert('Nem működik!')
})

loginButton.addEventListener('click', () => {
    let found = false
    let i = 0
    if (email_Input.value.length !== 0 && password_Input.value.length !== 0) {
        while (i < user_Username.length) {
            if ((email_Input.value === user_Username[i] || email_Input.value == user_Email[i]) && password_Input.value === user_Password[i]) {
                found = true
            }
            i += 1
        }
        if (found) {
            alert('talált')
        }
    }
    
})