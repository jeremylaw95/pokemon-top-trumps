// add button that fetches a pokemon
let fetchButton = document.querySelector("#fetch-button")
fetchButton.addEventListener("click", getData)

function randNumGen() {
    let randNum = Math.floor(Math.random() * 10) + 1
    return randNum
}

let playerDeck = document.querySelector("#player-deck");
let computerDeck = document.querySelector("#computer-deck");


// randNumGen()
// console.log(randNum)
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let weightButton = document.querySelector("#weight-btn")
let heightButton = document.querySelector("#height-btn")
//let statsButton = document.querySelector("#stats-btn")
let experienceButton = document.querySelector("#exp-btn")
weightButton.addEventListener("click", startGameWeight)
heightButton.addEventListener("click", startGameHeight)
//statsButton.addEventListener("click", startGame)
experienceButton.addEventListener("click", startGameExp)

function startGameWeight() {
    if(playerCardAttributes[0] < computerCardAttributes[0]) {
        
    }
}
function startGameHeight() {
    console.log(playerCardAttributes[0] < computerCardAttributes[0])
}
function startGameExp() {
    console.log(playerCardAttributes[0] < computerCardAttributes[0])
}


// function startGame() {
//     if (playerCardAttributes[0] < computerCardAttributes[0]) {
//         console.log("Computer Wins")
//     } else {
//         console.log("Player Wins")
//     }
//     fetchButton.style.display = "inline-block"
// }

async function getData() {

    fetchButton.style.display = "none"
    weightButton.style.display = "inline-block"
    heightButton.style.display = "inline-block"
    //statsButton.style.display = "inline-block"
    experienceButton.style.display = "inline-block"

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let shuffArr = shuffle(arr)
    console.log(shuffArr)

    for (let i = 0; i < 1; i++) {
        let fetchRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${shuffArr[i]}`)
        let data = await fetchRequest.json()
        let { name, weight, height, base_experience } = data
        console.log({ name, weight, height, base_experience })
        dealPlayerCard(name, weight, height, base_experience)
    }
    for (let i = 1; i < 2; i++) {
        fetchRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${shuffArr[i]}`)
        data = await fetchRequest.json()
        let { name, weight, height, base_experience } = data
        console.log({ name, weight, height, base_experience })
        dealComputerCard(name, weight, height, base_experience)
    }
}

let playerCardAttributes = []
let computerCardAttributes = []

function dealPlayerCard(name, weight, height, base_experience) {
    playerCardAttributes.push(weight, height, base_experience)
    let newLi = document.createElement("li");
    newLi.innerText = `Name:${name} Weight: ${weight}`
    playerDeck.appendChild(newLi)
}
function dealComputerCard(name, weight, height, base_experience) {
    computerCardAttributes.push(weight, height, base_experience)
    let newLi = document.createElement("li");
    newLi.innerText = `Name:${name} Weight: ${weight}`
    computerDeck.appendChild(newLi)
}

// create divs in html and set inline with width 50%
// border between divs
// test divs with background

//ul for both sides
// create lis with data
// check for duplicates


// 1 card at a time, player can choose the attribute and random when it's the computer's turn
// buttons for each stat with eventlisteners
// creat game mechanics
