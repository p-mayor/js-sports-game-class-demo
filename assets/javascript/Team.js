class Team {
    constructor(name) {
        this.name = name

        this.shots = 0
        this.goals = 0
        this.generateElement()
    }

    generateElement() {
        this.teamElement = document.createElement("div")
        this.teamElement.className = "team"
        this.teamElement.style.border = "1px solid black"

        this.headingElement = document.createElement("h2")
        this.headingElement.append(this.name)

        this.shotDiv = document.createElement("div")
        this.shotDiv.append("SHOTS TAKEN: " + this.shots)

        this.goalDiv = document.createElement("div")
        this.goalDiv.append("GOALS: " + this.goals)

        this.shootButton = document.createElement("button")
        this.shootButton.append("SHOOT")
        this.shootButton.addEventListener("click", () => {
            console.log(this)
            this.shoot()
        })

        this.teamElement.append(
            this.headingElement,
            this.shotDiv,
            this.goalDiv,
            this.shootButton
        )
    }

    shoot() {
        this.shots = this.shots + 1
        if (Math.random() > 0.5) {
            this.goals = this.goals + 1
        }
        this.updateView()
    }

    reset() {
        this.shots = 0
        this.goals = 0
        this.updateView()
    }

    updateView() {
        this.shotDiv.innerHTML = "SHOTS TAKEN: " + this.shots
        this.goalDiv.innerHTML = "GOALS: " + this.goals
    }

}