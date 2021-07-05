
function createContacts() {
    let phone = document.createElement('div')
    phone.classList = 'item'
    phone.textContent = "Phone Number: 555-555-5555"
    content.appendChild(phone)

    let email = document.createElement('div')
    email.classList = 'item'
    email.textContent = "Email: chayse.stiver@gmail.com"
    content.appendChild(email)
}

export default createContacts;