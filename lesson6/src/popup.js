const popupLinks = document.querySelectorAll('.popup__link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

// let unlock = true
// let timeout = 800

if (popupLinks.length > 0) {
    for (let i=0; i<popupLinks.length; i++) {
        const popupLink = popupLinks[i]
        popupLink.addEventListener("click", (event) => {
            const popupName = popupLink.getAttribute('href').replace('#', '')
            let curentPopup = document.getElementById(popupName)
            popupOpen(curentPopup)
            event.preventDefault()
        })
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length>0) {
    for (let i=0; i<popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i]
        el.addEventListener('click', (event) => {
            popupClose(el.closest('.popup'))
            event.preventDefault()
        })
    }
}

console.log(curentPopup)
const popupOpen = (curentPopup) => {
    if (curentPopup) {
        const popupActive = document.querySelector('.popup.open')
        if (popupActive) {
            popupClose(popupActive)
        // } else {
        //     bodyLock()
        }
        curentPopup.classList.add('open')
        curentPopup.addEventListener('click', (event) => {
            if (!event.target.closest('.popup__content')) {
                popupClose(event.target.closest('.popup'))
            }
        })
    }
}

export default class Popup {
    constructor() {
        this.popupLinks = popupLinks
        this.popupName = popupName
        
    }

    popupOpen() {

    }

    popupClose() {

    }
}