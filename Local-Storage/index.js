// const themeInput = document.getElementById('theme')
// const container = document.querySelector('.container')

// themeInput.addEventListener('click', () => {
//     container.classList.toggle('dark')
//     localStorage.setItem('theme', container.classList)
// })

// if (localStorage.getItem("theme") !== "") {
//     container.className = localStorage.getItem('theme')
// }

const container = document.querySelector('.container')
const themeMode = document.querySelector('.mode')

themeMode.innerText = ""
function themeModify(e) {
    e.preventDefault()
    container.classList.toggle('dark')
    localStorage.setItem('dark', container.className)
    if (container.className !== "container dark") {
        themeMode.innerText = "Dark"
    } else {
        themeMode.innerText = "Light"
    }

}

if (localStorage.getItem('dark') !== "") {
    container.className = localStorage.getItem('dark')
}

if (container.className !== "container dark") {
    themeMode.innerText = "Dark"
} else {
    themeMode.innerText = "Light"
}

themeMode.addEventListener('click', themeModify)
