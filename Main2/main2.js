 function mouseEffects(currentDiv, randWindow, randWindow2, currentWindow, randomWindow3) {
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
 
 
 function darkTheme(body, dropdown, arrowUp){
     dropdown.forEach(item => {
         item.style.backgroundColor = 'var(--darkNav)'    
     });
     
     body.style.backgroundColor = 'var(--darkBg)';
     arrowUp.forEach(item => {
         item.style.color = 'var(--darkNav)';
     })
     
     body.style.transition = 'all .3s'
 }
 
 
 function lightTheme(body, dropdown, arrowUp){
     dropdown.forEach(item => {
         item.style.backgroundColor = 'var(--lightNav)'    
     });
     
     body.style.backgroundColor = 'var(--lightBg)';
     arrowUp.forEach(item => {
         item.style.color = 'var(--lightNav)';
     })
 
     body.style.transition = 'all .3s'
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
 const themeChange = document.querySelector('.themeChangeBlock')
 const lightT_Div = document.querySelector('.themeLight')
 const darkT_Div = document.querySelector('.themeDark')
 const close_Themes = document.querySelector('.closeWindow')
 const t_Settings = document.querySelector('.t_Settings')
 const body = document.querySelector('body')
 const dropdown_window = document.querySelectorAll('.dropdown_window')
 const arrowUp = document.querySelectorAll('.arrowUp_2')
 const searchBar = document.querySelector('#search')
 
 if (loginData_value.textContent == 'Bejelentkezés') {
 
     loginForm.addEventListener('click', () => {
         window.location.href = '../Login/login.html'
     })
 }
 
 if (localStorage.length > 0) {
     let user_Data = localStorage.getItem('login_Username')
     loginData_value.innerHTML = '<h4>' + user_Data + '</h4>'
 
     mouseEffects(loginDiv, favouritesWindow, loginWindow, afterLoginWindow, cartWindow)
 
     logout.addEventListener('click', () => {
         window.location.href = '../Login/login.html'
     })
 }
 
 if (localStorage.length == 0) {
     mouseEffects(loginDiv, favouritesWindow, afterLoginWindow, loginWindow, cartWindow)
 }
 
 mouseEffects(favourites, loginWindow, afterLoginWindow, favouritesWindow, cartWindow)
 mouseEffects(cart, loginWindow, afterLoginWindow, cartWindow, favouritesWindow)
 
 
 
 close_Themes.addEventListener('click', () => {
     themeChange.style.display = ''
 })
 
 t_Settings.addEventListener('click', () => {
     themeChange.style.display = 'flex'
 })
 
 
 
 darkT_Div.addEventListener('click', () => {
     darkTheme(body, dropdown_window, arrowUp)
     themeChange.style.display = ''
 })
 
 lightT_Div.addEventListener('click', () => {
     lightTheme(body, dropdown_window, arrowUp)
     themeChange.style.display = ''
 })
 
 