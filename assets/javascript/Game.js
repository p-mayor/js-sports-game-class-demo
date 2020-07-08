class Game {
    constructor(team1, team2) {
        this.team1 = team1
        this.team2 = team2

        this.numResets = 0

        this.generateElement()
    }

    generateElement() {
        this.gameElement = document.createElement('div')

        this.resetButton = document.createElement("button")
        this.resetButton.append("reset")
        this.resetButton.addEventListener("click", () => {
            console.log(this)
            this.resetGame()
        })

        this.resetCountDiv = document.createElement('div')
        this.resetCountDiv.append("reset count: " + this.numResets)

        this.gameElement.append(
            this.team1.teamElement,
            this.team2.teamElement,
            this.resetButton,
            this.resetCountDiv
        )

        bodyElement.append(this.gameElement)
    }

    resetGame() {
        console.log("reset game")
        this.team1.reset()
        this.team2.reset()

        this.numResets = this.numResets + 1
        this.updateView()
    }

    updateView() {
        this.resetCountDiv.innerHTML = "reset count: " + this.numResets
    }

}