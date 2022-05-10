const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const updateClock = () => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if (h > 12) {
        h = h - 12
    }

    hoursEl.innerText = h < 10 ? "0" + h : h
    minutesEl.innerText = m < 10 ? "0" + m : m
    secondsEl.innerText = s < 10 ? "0" + s : s
    setInterval(() => {

        updateClock()
    })

}
updateClock()