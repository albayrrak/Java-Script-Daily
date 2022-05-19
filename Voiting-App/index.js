// Select DOM Element
const team1 = document.querySelector('.team1')
const team2 = document.querySelector('.team2')
const homeTeam = document.getElementById('home-team')
const awayTeam = document.getElementById('away-team')
const voitingButtons = document.querySelectorAll('#voiting')


let homeTeamVotes = 0
let awayTeamVotes = 0

// When the page is first loaded
awayTeam.innerText = `${awayTeamVotes} oy kullanıldı`
homeTeam.innerText = `${homeTeamVotes} oy kullanıldı`
team1.style.setProperty('--homeWidth', "50%")
team2.style.setProperty('--awayWidth', "50%")

// I create voting function
voitingButtons.forEach((voiting, index) => {

    // When the button is clicked
    voiting.addEventListener("click", () => {

        if (index === 0) {
            homeTeamVotes++
        } else {
            awayTeamVotes++
        }
        homeTeam.innerText = `${homeTeamVotes} oy kullanıldı`
        awayTeam.innerText = `${awayTeamVotes} oy kullanıldı`

        // Percent Calc
        let totalVotes = homeTeamVotes + awayTeamVotes
        let homeWidth = 100 / (totalVotes / homeTeamVotes)
        let awayWidth = 100 / (totalVotes / awayTeamVotes)

        team1.style.setProperty('--homeWidth', homeWidth + "%")
        team2.style.setProperty('--awayWidth', awayWidth + "%")

    })
})





