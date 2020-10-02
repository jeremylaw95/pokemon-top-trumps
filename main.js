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

async function getData() {

    let fetchRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${randNumGen()}`)

    let data = await fetchRequest.json()
    let { name, height, weight, base_experience } = data
    console.log({ name, height, weight, base_experience })
}


function createDecks() {
    for(let i=0;i < 5; i++) {
        let newLI = document.createElement("li");   
    }
}

// create divs in html and set inline with width 50%
// border between divs
// test divs with background

//ul for both sides
// create lis with data
// check for duplicates