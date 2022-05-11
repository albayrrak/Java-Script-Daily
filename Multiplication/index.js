const questionEl = document.getElementById('question')
const formEl = document.getElementById('form')
const answerEl = document.getElementById('answer')
const scoreEl = document.getElementById("score")

// Create Random Number
const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10)


questionEl.innerText = `What is ${num1} multiply by ${num2}`

// Correct Answer
const correctAns = num1 * num2

let score = JSON.parse(localStorage.getItem("score"))


scoreEl.innerText = !score ? `score: 0` : `score:${score}`

formEl.addEventListener('submit', () => {

    const userAns = +answerEl.value
    if (correctAns === userAns) {
        score++
        saveLocalStorage()
    } else {
        score--
        saveLocalStorage()

    }

})

function saveLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}
