let content = document.querySelector('#content')

function createHome() {
    let intro = document.createElement('div')
    intro.classList = 'item'
    intro.textContent = "Hi there! This restaurant is entirely FAKE. Yes that's right. FAKE! Instead, you can enjoy the fabulous pictures I found of food."
    content.appendChild(intro)
    let about = document.createElement('div')
    about.classList = 'item'
    about.textContent = "This project helped me practice my skills with WebPack! You can find the source code here!"
    content.appendChild(about)
}


export default createHome;