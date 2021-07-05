function createNav() {
    let header = document.createElement('header')
    document.querySelector('body').prepend(header)

    let nav = document.createElement('nav')
    document.querySelector('header').appendChild(nav)

    let home = document.createElement('button')
    home.textContent = "Home"
    home.id = "home"
    document.querySelector('nav').appendChild(home)

    let menu = document.createElement('button')
    menu.textContent = "Menu"
    menu.id = "menu"
    document.querySelector('nav').appendChild(menu)

    let contact = document.createElement('button')
    contact.textContent = "Contact"
    contact.id = "contact"
    document.querySelector('nav').appendChild(contact)
}

function createSiteFrame() {
    createNav()
}

export default createSiteFrame;