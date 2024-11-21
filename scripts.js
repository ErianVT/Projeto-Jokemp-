const result = document.querySelector(".result")
const humanPoint = document.querySelector("#human-point")
const machinePoint = document.querySelector("#machine-point")

let pointHumnan = 0
let pointMachine = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    const result = choices[randomNumber]

    return result
}

const playTheGame = (human, machine) => {
   
    if (human === machine) {
        result.innerHTML = "Deu Empate!!"
    }
    else if (human === "rock" && machine === "scissors"
        || human === "scissors" && machine === "paper"
        || human === "paper" && machine === "rock") {
        pointHumnan++
        humanPoint.innerHTML = pointHumnan;
        result.innerHTML = "Você Ganhou!!!"
    }
    else {
        pointMachine++
        machinePoint.innerHTML = pointMachine;
        result.innerHTML = "Você Perdeu!"
    }
}

/* rock => tesoura => paper */