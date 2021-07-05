let content = document.querySelector('#content')

function createIntro() {
    let intro = document.createElement('div')
    intro.classList = 'item'
    intro.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu scelerisque nisi, eget ornare elit. Maecenas at massa lobortis, lacinia dolor eleifend, egestas magna. Quisque vel lacus viverra, efficitur quam id, tristique velit. Pellentesque nisl orci, auctor in euismod sit amet, sollicitudin sed odio. Proin imperdiet urna justo, a aliquam justo congue tempor. In hac habitasse platea dictumst. Maecenas ac blandit risus. Praesent ante leo, laoreet eu porttitor vitae, hendrerit sed magna. Aenean euismod tincidunt diam nec aliquet. Sed sollicitudin elementum erat, non pulvinar leo faucibus quis. Nullam hendrerit orci ante, quis faucibus velit efficitur et. Vestibulum sodales felis malesuada dui semper, sit amet malesuada tortor egestas. Pellentesque nibh ante, pulvinar eu lacus sit amet, blandit dapibus tortor."
    content.appendChild(intro)
}

function createHome() {
    createIntro()
}


export default createHome;