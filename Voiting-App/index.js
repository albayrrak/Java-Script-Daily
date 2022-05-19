// Select DOM Element
const team1 = document.querySelector('.team1')
const team2 = document.querySelector('.team2')
const homeTeam = document.getElementById('home-team')
const awayTeam = document.getElementById('away-team')
const votingButtons = document.querySelectorAll('#voting')


let homeTeamVotes = 0
let awayTeamVotes = 0

// When the page is first loaded
awayTeam.innerText = `${awayTeamVotes} oy kullanıldı`
homeTeam.innerText = `${homeTeamVotes} oy kullanıldı`
team1.style.setProperty('--homeWidth', "50%")
team2.style.setProperty('--awayWidth', "50%")

// I create voting function
votingButtons.forEach((voting, index) => {

    // When the button is clicked
    voting.addEventListener("click", () => {

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





