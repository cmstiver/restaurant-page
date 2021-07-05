function createNav() {
    let header = document.createElement('header')
    document.querySelector('body').prepend(header)

    let nav = document.createElement('nav')
    document.querySelector('header').appendChild(nav)

    let home = document.createElement('button')
    home.textContent = "Home"
    document.querySelector('nav').appendChild(home)

    let menu = document.createElement('button')
    menu.textContent = "Menu"
    document.querySelector('nav').appendChild(menu)

    let contact = document.createElement('button')
    contact.textContent = "Contact"
    document.querySelector('nav').appendChild(contact)
}

function createFooter() {
    let footer = document.createElement('footer')
    footer.textContent = 'footer'
    document.querySelector('body').appendChild(footer)
}

function createSiteFrame() {
    createNav()
    createFooter()
}

export default createSiteFrame;