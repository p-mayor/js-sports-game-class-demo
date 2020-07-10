let bodyElement = document.querySelector("body")

let yankees = new Team("Yankees")
let blue = new Team("Blue")

let mariners = new Team("mariners")
let cubs = new Team("cubs")

let game1 = new Game(yankees, blue, bodyElement)

let game2 = new Game(mariners, cubs, bodyElement)