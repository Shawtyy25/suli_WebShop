function mouseOverEffects(currentDiv, randWindow, randWindow2, currentWindow, randomWindow3) {
    currentDiv.addEventListener('mouseover', () => {
      randWindow.style.display = ''
      randWindow2.style.display = ''
      randomWindow3.style.display = ''
      currentWindow.style.display = 'flex'  
    })

    currentWindow.addEventListener('mouseover', () => {
        currentWindow.style.display = 'flex'
    })

    currentWindow.addEventListener('mouseout', () => {
        currentWindow.style.display = ''
    })
}


const loginData_value = document.querySelector('.loginData h4')
const loginForm = document.querySelector('.loginForm')
const loginDiv = document.querySelector('.loginDiv')
const loginWindow = document.querySelector('.LoginWindow')
const afterLoginWindow = document.querySelector('.loginWindowAfter')
const logout = document.querySelector('.logout')
const favourites = document.querySelector('.favourites')
const favouritesWindow = document.querySelector('.favouritesWindow')
const cart = document.querySelector('.cart')
const cartWindow = document.querySelector('.cartWindow')

if (loginData_value.textContent == 'Bejelentkezés') {
    
    loginForm.addEventListener('click', () => {
        window.location.href = '../Login/login.html'
    })
}

if (localStorage.length > 0) {
    let user_Data = localStorage.getItem('login_Username')
    loginData_value.innerHTML = '<h4>' + user_Data + '</h4>'
    
    mouseOverEffects(loginDiv, favouritesWindow, loginWindow, afterLoginWindow, cartWindow)

    logout.addEventListener('click', () => {
        window.location.href = '../Login/login.html'
    })
}

if (localStorage.length == 0) {
    mouseOverEffects(loginDiv, favouritesWindow, afterLoginWindow, loginWindow, cartWindow)
}

mouseOverEffects(favourites, loginWindow, afterLoginWindow, favouritesWindow, cartWindow)

