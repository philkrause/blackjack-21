let chooseCard = () => {
  const cardHolder = document.createElement('section')
  cardHolder.textContent = deck[randomCard]
  document.querySelector('.container').appendChild(cardHolder)
  console.log(chooseCard)
}
//
const playerOne = []
const playerTwo = []
let playerOneTotal = 0
let playerTwoTotal = 0

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

const ranks = [
  { face: 2, value: 2 },
  { face: 3, value: 3 },
  { face: 4, value: 4 },
  { face: 5, value: 5 },
  { face: 6, value: 6 },
  { face: 7, value: 7 },
  { face: 8, value: 8 },
  { face: 9, value: 9 },
  { face: 10, value: 10 },
  { face: 'Jack', value: 10 },
  { face: 'King', value: 10 },
  { face: 'Queen', value: 10 },
  { face: 'Ace', value: 1 }
]

const deck = []

let createDeck = () => {
  for (let j = 0; j < ranks.length; j++) {
    const rank = ranks[j]
    for (let i = 0; i < suits.length; i++) {
      const suit = suits[i]
      const card = {
        face: rank.face,
        value: rank.value,
        suit: suit,
        imageUrl: `/images/${rank.face}_of_${suit}.svg`.toLowerCase()
      }
      deck.push(card)
    }
  }
  return shuffle(deck)
}

const shuffle = () => {
  let deckLength = deck.length - 1
  for (deckLength; deckLength >= 1; deckLength--) {
    const randomNum = Math.floor(Math.random() * (deckLength + 1))
    const cardHolder = deck[deckLength]
    deck[deckLength] = deck[randomNum]
    deck[randomNum] = cardHolder
  }
}

const dealCards = () => {
  for (i = 2; i > 0; i--) {
    playerOne.push(deck.pop())
    playerTwo.push(deck.pop())
  }
  playerOne.forEach(p1card => {
    const createP1CardElement = document.createElement('img')
    createP1CardElement.src = p1card.imageUrl
    document.querySelector('.player-one-cards').appendChild(createP1CardElement)
  })
  addPlayerOne()
  addPlayerTwo()
  playerTwo.forEach(p2card => {
    const createP2CardElement = document.createElement('img')
    createP2CardElement.src = p2card.imageUrl
    document.querySelector('.player-two-cards').appendChild(createP2CardElement)
  })
  console.log(playerOne)
  console.log(playerOneTotal)
  console.log(playerTwo)
  console.log(playerTwoTotal)
}

const createCardImage = p1card => {
  const createP1CardElement = document.createElement('img')
  createP1CardElement.src = p1card.imageUrl
  document.querySelector('.player-one-cards').appendChild(createP1CardElement)
}
const createCardImageP2 = p2card => {
  const createP2CardElement = document.createElement('img')
  createP2CardElement.src = p2card.imageUrl
  document.querySelector('.player-two-cards').appendChild(createP2CardElement)
}
const createReset = () => {
  const cr = document.createElement('button')
  document.querySelector('.reset-button').appendChild(cr)
}

const addPlayerOne = () => {
  playerOneTotal = 0
  playerOne.forEach(card => {
    playerOneTotal += card.value
  })
}

const addPlayerTwo = () => {
  playerTwoTotal = 0
  playerTwo.forEach(card => {
    playerTwoTotal += card.value
  })
  //   console.log(playerTwo)
  //  console.log(playerTwoTotal)
}
const disableButtons = () => {
  document
    .querySelectorAll('button')
    .forEach(button => (button.disabled = true))
}
const p1gameLogic = () => {
  if (playerOneTotal === 21) {
    const createWinner = document.createElement('img')
    createWinner.src = '/images/winner.png'
    document.querySelector('.display-winner').appendChild(createWinner)
    disableButtons()
    createReset()
  }
  if (playerOneTotal > 21) {
    const createWinner = document.createElement('img')
    createWinner.src = '/images/busted.png'
    document
      .querySelectorAll('button')
      .forEach(button => (button.disabled = true))
    document.querySelector('.display-loser').appendChild(createWinner)
    disableButtons()
    createReset()
  }
}
const hitPlayerOne = () => {
  playerOne.push(deck.pop())
  addPlayerOne()
  createCardImage(playerOne[playerOne.length - 1])
  p1gameLogic()
}
const hitPlayerTwo = () => {
  playerTwo.push(deck.pop())
  addPlayerTwo()
  createCardImageP2(playerTwo[playerTwo.length - 1])
}

if (playerOneTotal < 21) {
  document.querySelector('.hit-button').addEventListener('click', hitPlayerOne)
}

const stay = () => {
  while (playerTwoTotal < 21) {
    hitPlayerTwo()
    disableButtons()
    console.log(playerTwo)
    console.log(playerTwoTotal)
  }

  if (playerTwoTotal === 21) {
    const bjP2 = document.createElement('img')
    bjP2.src = '/images/dealer21.gif'
    document.querySelector('.display-p2-winner').appendChild(bjP2)
    createReset()
  }
  if (playerTwoTotal > 21) {
    createReset()
  }
}

const main = () => {
  createDeck()
  dealCards()
}
document
  .querySelector('.reset-button')
  .addEventListener('click', window.location.reload())
document.querySelector('.stay-button').addEventListener('click', stay)
document.addEventListener('DOMContentLoaded', main)
