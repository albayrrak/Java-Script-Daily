const colorPalette = document.querySelector('.color-palette')
const buttonEl = document.getElementById('generate-button')
const msg = document.querySelector('.msg')


let currentElem;
let str = 'abcdef0123456789'

buttonEl.addEventListener('click', generateColorPalette)

window.addEventListener('keyup', (e) => {
    console.log(e.code);
    if (e.code === "Space") {
        generateColorPalette()
    } else if (e.code === "Keyc") {
        generateColorPalette()
    }
})

function generateColorPalette() {
    colorPalette.innerHTML = ''

    for (let i = 1; i <= 4; i++) {

        let color = createPalette();
        let li = document.createElement('li');

        let spanColor = document.createElement('span');
        spanColor.className = 'color';
        spanColor.style.setProperty('--color', color);

        let spanText = document.createElement('span');
        spanText.className = 'text';
        spanText.innerText = color;

        li.appendChild(spanColor)
        li.appendChild(spanText)

        colorPalette.appendChild(li)

        li.addEventListener("click", (e) => {
            let currentElem = e.target.getAttribute('style').split('').splice(8, 7).join('')
            navigator.clipboard.writeText(currentElem);
            createMsg()
        })

        li.addEventListener('mouseover', (e) => {
            let currentElem = e.target.getAttribute('style').split('').splice(8, 7).join('')
            navigator.clipboard.writeText(currentElem);
        })

    }
}

function createPalette() {
    let str = 'abcdef0123456789';
    let color = '#';
    for (let i = 0; i <= 5; i++) {
        color += str[Math.floor(Math.random() * str.length)];
    }
    return color;
}

function createMsg() {

    let removeDiv = document.querySelector('.msg')
    if (removeDiv) {
        console.log(removeDiv.parentNode.removeChild(removeDiv));
    }

    let div = document.createElement('div')
    div.className = "msg"

    let paragraph = document.createElement('p')
    paragraph.innerText = "Successfully Copied"

    div.appendChild(paragraph)
    document.body.appendChild(div)

    setTimeout(() => {
        div.classList.add('active')
    }, 1)
    setTimeout(() => {
        div.classList.remove('active')
    }, 1000)

}
generateColorPalette()