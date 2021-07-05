import createSiteFrame from './frame';
import createHome from './home';
import createMenu from './menu';
import createContacts from './contacts';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

createSiteFrame();
createHome()

let clickhome = document.getElementById('home')
let clickmenu = document.getElementById('menu')
let clickcontact = document.getElementById('contact')

clickhome.addEventListener('click', () => {
    removeAllChildNodes(content)
    createHome()
})
clickmenu.addEventListener('click', () => {
    removeAllChildNodes(content)
    createMenu()
})
clickcontact.addEventListener('click', () => {
    removeAllChildNodes(content)
    createContacts()
})
