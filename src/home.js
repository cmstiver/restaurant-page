let content = document.querySelector('#content')

function createHome() {
    let intro = document.createElement('div')
    intro.classList = 'item'
    intro.textContent = "Hi there! This restaurant is entirely FAKE. Yes that's right. FAKE! Instead, you can enjoy the fabulous pictures I found of food."
    content.appendChild(intro)
    let about = document.createElement('div')
    about.classList = 'item'
    about.innerHTML += `This project helped me practice my skills with WebPack! You can find the source code <a href="https://github.com/cmstiver/restaurant-page">here</a>! Also, thanks to <a href="https://www.flaticon.com/free-icon/pussy-cat-cartoon-outline-variant_29662?term=cartoon%20cat&page=1&position=4&page=1&position=4&related_id=29662&origin=search">Freepik on Flaticon</a> for the cat logo. :3`
    content.appendChild(about)
}


export default createHome;