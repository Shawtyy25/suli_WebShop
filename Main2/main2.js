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

}


function darkTheme(body, dropdown, arrowUp, header, carouselIMG, productcardtext, productTextH2, productTextH4, cartIncludeBg, footer, leftSide, rightSide) {
    dropdown.forEach(item => {
        item.style.backgroundColor = 'var(--darkNav)'
    });

    body.style.backgroundColor = 'var(--darkBg)';
    arrowUp.forEach(item => {
        item.style.color = 'var(--darkNav)';
    })

    body.style.transition = 'all .3s'
    header.style.backgroundColor = 'var(--darkBgNav)'

    carouselIMG.forEach(item => {
        item.style.filter = 'brightness(60%)'
    })

    productcardtext.forEach(item => {
        item.style.backgroundColor = 'var(--darkCards)'
        item.style.color = 'var(--lightColor)'
    })
    
    productTextH2.style.color = 'var(--ButtonColor)'
    productTextH4.style.color = 'var(--lightColor)'
    
    cartIncludeBg.style.backgroundColor = 'var(--ButtonColor)'

    footer.style.backgroundColor = 'var(--darkBgNav)'

    leftSide.style.backgroundColor = 'var(--darkBgNav)'
    rightSide.style.backgroundColor = 'var(--darkNav)'
}


function lightTheme(body, dropdown, arrowUp, header, carouselIMG, productcardtext, productTextH2, productTextH4, cartIncludeBg, footer, leftSide, rightSide) {
    dropdown.forEach(item => {
        item.style.backgroundColor = 'var(--lightNav)'
    });

    body.style.backgroundColor = 'var(--lightBg)';
    arrowUp.forEach(item => {
        item.style.color = 'var(--lightNav)';
    })
    header.style.backgroundColor = 'var(--mainColor)'
    body.style.transition = 'all .3s'

    carouselIMG.forEach(item => {
        item.style.filter = ''
    })

    productcardtext.forEach(item => {
        item.style.backgroundColor = ''
        item.style.color = ''
    })
    
    productTextH2.style.color = ''
    productTextH4.style.color = ''
    
    cartIncludeBg.style.backgroundColor = ''

    footer.style.backgroundColor = ''

    leftSide.style.backgroundColor = ''
    rightSide.style.backgroundColor = ''    
}

function DJI_card( productWindow, firstImage, secondImage, thirdImage, mainImage, productContentHeader) {
    productWindow.style.display = 'flex'
    firstImage.style.backgroundImage = "url('./img/DJI_1.png')"
    secondImage.style.backgroundImage = "url('./img/DJI_2.png')"
    thirdImage.style.backgroundImage = "url('./img/DJI_3.jpg')"
    mainImage.style.backgroundImage = "url('./img/DJI_1.png')"
    productContentHeader.innerHTML = '<h1>DJI Mavic Air 2S Fly More Combo<h1>'

    firstPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/DJI_1.png')"
    })
    secondPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/DJI_2.png')"
    })
    thirdPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/DJI_3.jpg')"
    })
}
function Xiaomi_card( productWindow, firstImage, secondImage, thirdImage, mainImage, productContentHeader) {
    productWindow.style.display = 'flex'
    firstImage.style.backgroundImage = "url('./img/XIAOMI_1.jpg')"
    secondImage.style.backgroundImage = "url('./img/XIAOMI_2.png')"
    thirdImage.style.backgroundImage = "url('./img/XIAOMI_3.jpg')"
    mainImage.style.backgroundImage = "url('./img/XIAOMI_1.jpg')"
    productContentHeader.innerHTML = '<h1>Xiaomi Redmi Note 11 PRO+ 5G Mobiltelefon<h1>'

    firstPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/XIAOMI_1.jpg')"
    })
    secondPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/XIAOMI_2.png')"
    })
    thirdPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/XIAOMI_3.jpg')"
    })
}

function TV_card( productWindow, firstImage, secondImage, thirdImage, mainImage, productContentHeader) {
    productWindow.style.display = 'flex'
    firstImage.style.backgroundImage = "url('./img/TV_1.jpg')"
    secondImage.style.backgroundImage = "url('./img/TV_2.jpg')"
    thirdImage.style.backgroundImage = "url('./img/TV_3.jpg')"
    mainImage.style.backgroundImage = "url('./img/TV_1.jpg')"
    productContentHeader.innerHTML = '<h1>Samsung UE65CU7172UXXH Smart LED Televízió<h1>'

    firstPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/TV_1.jpg')"
    })
    secondPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/TV_2.jpg')"
    })
    thirdPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/TV_3.jpg')"
    })
}

function Laptop_card( productWindow, firstImage, secondImage, thirdImage, mainImage, productContentHeader) {
    productWindow.style.display = 'flex'
    firstImage.style.backgroundImage = "url('./img/TV_1.jpg')"
    secondImage.style.backgroundImage = "url('./img/TV_2.jpg')"
    thirdImage.style.backgroundImage = "url('./img/TV_3.jpg')"
    mainImage.style.backgroundImage = "url('./img/TV_1.jpg')"
    productContentHeader.innerHTML = '<h1>Samsung UE65CU7172UXXH Smart LED Televízió<h1>'

    firstPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/TV_1.jpg')"
    })
    secondPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/TV_2.jpg')"
    })
    thirdPic.addEventListener('click', () => {
        mainImage.style.backgroundImage = "url('./img/TV_3.jpg')"
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
const themeChange = document.querySelector('.themeChangeBlock')
const lightT_Div = document.querySelector('.themeLight')
const darkT_Div = document.querySelector('.themeDark')
const close_Themes = document.querySelector('.closeWindow')
const t_Settings = document.querySelector('.t_Settings')
const body = document.querySelector('body')
const dropdown_window = document.querySelectorAll('.dropdown_window')
const arrowUp = document.querySelectorAll('.arrowUp_2')
const searchBar = document.querySelector('#search')
const s_Settings = document.querySelector('.s_Settings')
const settingsBlock = document.querySelector('.settingsBlock')
const closeWindowSettings = document.querySelector('.closeWindowSettings')
const header = document.querySelector('header')
const carouselImg = document.querySelectorAll('.carouselSlide img')
const productCardText = document.querySelectorAll('.productCardText') 
const productTexth4 = document.querySelector('.productText h4')
const productTexth2 = document.querySelector('.productText h2')
const cartIncludeButton = document.querySelector('.cartInclude')
const main = document.querySelector('main')
const productCard = document.querySelectorAll(".productCard")
const productShowout = document.querySelector(".productShowoutDiv")
const webBody = document.querySelector("body")
const productShowoutExit = document.querySelector("#productShowoutExit")
const mainPicture = document.querySelector(".mainPicture")
const leftPicturesFirstIMG = document.querySelector(".leftPicturesFirstIMG")
const settings_a = document.querySelectorAll('.settings_a')
const searchButton = document.querySelector('.searchButton')
const section = document.querySelector('section')
const footerContent = document.querySelector('footer')
const sLeftSide = document.querySelector('.SleftSide')
const srightSide = document.querySelector('.SrightSide')
const DJIwindow = document.querySelector('.DJI')
const leftPicturesSecondIMG = document.querySelector('.leftPicturesSecondIMG')
const leftPicturesThirdIMG = document.querySelector('.leftPicturesThirdIMG')
const productContentH1 = document.querySelector('.productContentH1')
const XiaomiWindow = document.querySelector('.Xiaomi')
const TvWindow = document.querySelector('.TV')
const firstPic = document.querySelector('.firstPic')
const secondPic = document.querySelector('.secondPic')
const thirdPic = document.querySelector('.thirdPic')
const FujiWindow = document.querySelector('.Fuji')
const productList = document.querySelector(".productList");
const slideButtons = document.querySelectorAll(".slideButton");

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
    settingsBlock.style.display = ''
    afterLoginWindow.style.display = ''
})



darkT_Div.addEventListener('click', () => {
    darkTheme(body, dropdown_window, arrowUp, header, carouselImg, productCardText, productTexth2, productTexth4, cartIncludeButton, footerContent, sLeftSide, srightSide)
    themeChange.style.display = ''
    srightSide.style.color = 'lightgray'
    settings_a.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'gray'
        })
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = ''
        })
    })
})

lightT_Div.addEventListener('click', () => {
    lightTheme(body, dropdown_window, arrowUp, header, carouselImg, productCardText, productTexth2, productTexth4, cartIncludeButton, footerContent, sLeftSide, srightSide)
    themeChange.style.display = ''
    srightSide.style.color = ''
    settings_a.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = ''
        })
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = ''
        })
    })
})

s_Settings.addEventListener('click', () => {
    settingsBlock.style.display = 'flex'
    themeChange.style.display = ''
    afterLoginWindow.style.display = ''
})

closeWindowSettings.addEventListener('click', () => {
    settingsBlock.style.display = ''
})



let timeoutIdMain

let timeoutIdSection


main.addEventListener('mouseover', () => {
    timeoutIdMain = setTimeout(() => {
        afterLoginWindow.style.display = ''
        favouritesWindow.style.display = ''
        cartWindow.style.display = ''
        loginWindow.style.display = ''
    }, 800)
})

section.addEventListener('mouseover', () => {
    timeoutIdSection = setTimeout(() => {
        afterLoginWindow.style.display = ''
        favouritesWindow.style.display = ''
        cartWindow.style.display = ''
        loginWindow.style.displayy = ''
    }, 800)
})

section.addEventListener('mouseout', () => {
    clearTimeout(timeoutIdSection)
})
main.addEventListener('mouseout', () => {
    clearTimeout(timeoutIdMain)
})

productCard.forEach(item => {
    item.addEventListener("click", () => {
        productShowout.style.display = "flex"
        webBody.style.overflow = "hidden"
    })    
})

productShowoutExit.addEventListener("click", () => {
    productShowout.style.display = "none"
    webBody.style.backgroundColor = ""
    webBody.style.overflow = ""
})



settings_a.forEach(item => {
    item.addEventListener('click', () => {
        alert('Nem működik!')
    })    
})

searchButton.addEventListener('click', () => {
    alert('Nem működik!')
})

afterLoginWindow.addEventListener('mouseover', () => {
    afterLoginWindow.style.display = 'flex'
})

DJIwindow.addEventListener('click', () => {
    DJI_card(productShowout, leftPicturesFirstIMG, leftPicturesSecondIMG, leftPicturesThirdIMG, mainPicture, productContentH1)
    
})

    
slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.id === "prevSlide" ? -1 : 1
        const scrollAmount = productList.clientWidth * direction
        productList.scrollBy({ left: scrollAmount, behavior: "smooth" })
    })
})
XiaomiWindow.addEventListener('click', () => {
    Xiaomi_card(productShowout, leftPicturesFirstIMG, leftPicturesSecondIMG, leftPicturesThirdIMG, mainPicture, productContentH1)
})

TvWindow.addEventListener('click', () => {
    TV_card(productShowout, leftPicturesFirstIMG, leftPicturesSecondIMG, leftPicturesThirdIMG, mainPicture, productContentH1)
})