// Select DOM Element

const targets = document.querySelectorAll('#counter')
const navbarEl = document.querySelector('nav')
const bottomScroll = document.querySelector('.increment-counter')


// Create a CallbackFunction

function callback(counters) {
    counters.forEach(counter => {
        counter.target.innerText = "0"

        // Create a Increment Counter Function
        const incrementCounter = () => {
            const target = +counter.target.getAttribute('data-target')
            const c = +counter.target.innerText

            if (c < target) {
                counter.target.innerText = `${Math.floor(c + 2)}`
                setTimeout(incrementCounter, 1)

            } else {
                counter.target.innerText = target
            }

        }
        if (counter.isIntersecting) {

            incrementCounter()
        }

    })
}

// Create a Observer Options

const options = {
    threshold: 1.0
}

// Create a Observer

const observer = new IntersectionObserver(callback, options)
targets.forEach(target => observer.observe(target))

// Create Scroll Animation

window.addEventListener('scroll', () => {
    let scrollHeight = bottomScroll.offsetTop - 4
    if (window.scrollY > scrollHeight) {
        navbarEl.classList.add('active')
    } else {
        navbarEl.classList.remove('active')
    }
})