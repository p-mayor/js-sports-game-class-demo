class Game {
    constructor(team1, team2, targetElement) {
        this.team1 = team1
        this.team2 = team2

        this.numResets = 0

        this.generateElement()
        targetElement.append(this.element)
    }

    generateElement() {
        this.element = document.createElement('div')

        this.resetButton = document.createElement("button")
        this.resetButton.append("reset")
        this.resetButton.addEventListener("click", () => {
            console.log(this)
            this.resetGame()
        })

        this.resetCountDiv = document.createElement('div')
        this.resetCountDiv.append("reset count: " + this.numResets)

        this.element.append(
            this.team1.teamElement,
            this.team2.teamElement,
            this.resetButton,
            this.resetCountDiv
        )
    }

    resetGame() {
        this.numResets = this.numResets + 1
        
        this.team1.reset()
        this.team2.reset()

        this.updateView()
    }

    updateView() {
        this.resetCountDiv.innerHTML = "reset count: " + this.numResets
    }

}