function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // change avatar according to switch button
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }

}