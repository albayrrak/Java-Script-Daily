const counterEl = document.getElementById('text')
const totalEl = document.getElementById('total')
const remainingEl = document.getElementById('remaining')

counterEl.addEventListener('keyup', () => {
    updateCounter()
})

function updateCounter() {
    const maxLength = +counterEl.getAttribute('maxLength')
    const textLength = +counterEl.value.length
    totalEl.innerText = textLength
    remainingEl.innerText = maxLength - textLength
    if (counterEl.value.length === 50) {
        alert(time + " saniyede yazdınız")
        clearInterval(timer)
    }
}

let time = 0
const timer = setInterval(() => time++, 1000)

updateCounter()
