const loginData_value = document.querySelector('.loginData h4')
const loginForm = document.querySelector('.loginForm')
const loginDiv = document.querySelector('.loginDiv')
const loginWindow = document.querySelector('.LoginWindow')
const afterLoginWindow = document.querySelector('.loginWindowAfter')
const logout = document.querySelector('.logout')

if (loginData_value.textContent == 'Bejelentkezés') {
    
    loginForm.addEventListener('click', () => {
        window.location.href = '../Login/login.html'
    })
}

if (localStorage.length > 0) {
    let user_Data = localStorage.getItem('login_Username')
    loginData_value.innerHTML = '<h4>' + user_Data + '</h4>'
    
    loginDiv.addEventListener('mouseover', () => {
        afterLoginWindow.style.display = 'flex'
    })
    afterLoginWindow.addEventListener('mouseover', () => {
        afterLoginWindow.style.display = 'flex'
    })
    
    afterLoginWindow.addEventListener('mouseout', () => {
        afterLoginWindow.style.transitionDelay = '5s'    
        afterLoginWindow.style.display = ''    
    })

    logout.addEventListener('click', () => {
        window.location.href = '../Login/login.html'
    })
}

if (localStorage.length == 0) {
    loginDiv.addEventListener('mouseover', () => {
        loginWindow.style.display = 'flex'
    })
    loginWindow.addEventListener('mouseover', () => {
        loginWindow.style.display = 'flex'
    })
    
    loginWindow.addEventListener('mouseout', () => {
        loginWindow.style.transitionDelay = '5s'    
        loginWindow.style.display = ''    
    })
}

