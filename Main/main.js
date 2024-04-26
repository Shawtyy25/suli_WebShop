const loginData_value = document.querySelector('.loginData h4')

if (loginData_value.textContent == 'Bejelentkezés') {
    loginData_value.addEventListener('click', () => {
        window.location.href = '../Login/login.html'
    })
}
if (localStorage.length > 0) {
    let user_Data = localStorage.getItem('login_Username')
    loginData_value.innerHTML = '<h4>' + user_Data + '</h4>'
}