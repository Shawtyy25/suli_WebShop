function wrongLogin(window, input, otherInput){
    window.style.border = '2px solid red'
    input.style.border = '2px solid red'
    otherInput.style.border = '2px solid red'
}


const passYes = document.querySelector('.passYes')
const passNo = document.querySelector('.passNo')
const email_Input = document.querySelector('#email')
const password_Input = document.querySelector('#password')
const forgotPass = document.querySelector('.forgot')
const loginButton = document.querySelector('.loginButton')
const errorMessege = document.querySelector('.wrongPassWindow')
const loginWindow = document.querySelector('.loginWindow')
const reg_button = document.querySelector('.reg_button')
const exit = document.querySelector('.close')

let user_Email = ['gaspardani719@gmail.com', 'abelszolnoki@gmail.com']
let user_Username = ['gasparboss', 'shawtyy']
let user_Password = ['adminG123', 'adminS123']
localStorage.clear()

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
                localStorage.setItem('login_Username', user_Username[i])
            }
            i += 1
        }

        email_Input.addEventListener('focus', () => {
            errorMessege.style.display = ''
            loginWindow.style.border = ''
            email_Input.style.border = ''
            password_Input.style.border = ''
            
        })

        password_Input.addEventListener('focus', () => {
            errorMessege.style.display = ''
            loginWindow.style.border = ''
            email_Input.style.border = ''
            password_Input.style.border = ''
        })

        if (found) {
            window.location.href = '../Main/index.html'
        } else{
            errorMessege.style.display = 'block'
            wrongLogin(loginWindow, email_Input, password_Input)
            
        }
    } else {
        errorMessege.style.display = ''
    }
    
})

reg_button.addEventListener('click', () => {
    alert('Nem működik')
})

exit.addEventListener('click', () => {
    window.location.href = '../Main/index.html'
})

