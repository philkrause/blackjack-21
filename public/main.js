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
  { face: 'Ace', value: 11 }
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
const createLosers = () => {
  const createLoser = document.createElement('img')
  createLoser.src = '/images/busted.png'
  document
    .querySelectorAll('button')
    .forEach(button => (button.disabled = true))
  document.querySelector('.display-loser').appendChild(createLoser)
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
}

const createReset = () => {
  const cr = document.createElement('button')
  // cr.setAttribute('input')
  document.querySelector('.reset-button').appendChild(cr)
}

const reload = () => {
  window.location.reload()
}

const addPlayerOne = () => {
  playerOneTotal = 0
  playerOne.forEach(card => {
    playerOneTotal += card.value
  })
  console.log(playerOneTotal)
}

const addPlayerTwo = () => {
  playerTwoTotal = 0
  playerTwo.forEach(card => {
    playerTwoTotal += card.value
  })
  //   console.log(playerTwo)
  console.log(playerTwoTotal)
}
const disableButton1 = () => {
  document.querySelector('.hit-button').disabled = true
}
const disableButton2 = () => {
  document.querySelector('.stay-button').disabled = true
}

const hitPlayerOne = () => {
  playerOne.push(deck.pop())
  addPlayerOne()
  createCardImage(playerOne[playerOne.length - 1])
  if (playerOneTotal > 21) {
    createLosers()
    disableButton1()
    disableButton2()
    createReset()
  }
}

const hitPlayerTwo = () => {
  while (playerTwoTotal < 17) {
    playerTwo.push(deck.pop())
    addPlayerTwo()
    createCardImageP2(playerTwo[playerTwo.length - 1])
  }
}
const blackJack = () => {
  if (playerOneTotal === 21) {
    const createWinner = document.createElement('img')
    createWinner.src = '/images/winner.png'
    document.querySelector('.display-winner').appendChild(createWinner)
    disableButton1()
    disableButton2()
    createReset()
  }
}

const stay = () => {
  hitPlayerTwo()
  disableButton1()
  disableButton2()

  if (playerOneTotal > playerTwoTotal && playerTwoTotal > 16) {
    const createWinner = document.createElement('img')
    createWinner.src = '/images/winner2.png'
    document.querySelector('.display-winner').appendChild(createWinner)
    disableButton1()
    disableButton2()
    createReset()
  }
  if (playerTwoTotal < 21 && playerTwoTotal > playerOneTotal) {
    const bjP2 = document.createElement('img')
    bjP2.src = '/images/youlose.gif'
    document.querySelector('.display-p2-winner').appendChild(bjP2)
    disableButton1()
    disableButton2()
    createReset()
  }
  if (playerTwoTotal > 21) {
    const createWinner = document.createElement('img')
    createWinner.src = '/images/win.gif'
    document.querySelector('.display-winner').appendChild(createWinner)
    const createWin = document.createElement('img')
    createWin.src = '/images/bustEdit.png'
    document.querySelector('.display-loser').appendChild(createWin)
    disableButton1()
    disableButton2()
    createReset()
  }
  if (playerOneTotal === playerTwoTotal) {
    const createWinner = document.createElement('img')
    createWinner.src = '/images/draw.png'
    document.querySelector('.display-winner').appendChild(createWinner)
    disableButton1()
    disableButton2()
    createReset()
  }
  if (playerTwoTotal === 21) {
    const bjP2 = document.createElement('img')
    bjP2.src = '/images/dealer21.gif'
    document.querySelector('.display-p2-winner').appendChild(bjP2)
    disableButton1()
    disableButton2()
    createReset()
  }
  console.log(playerOneTotal)
  console.log(playerTwoTotal)
}

const main = () => {
  createDeck()
  dealCards()
  blackJack()
}
document.querySelector('.hit-button').addEventListener('click', hitPlayerOne)
document.querySelector('.reset-button').addEventListener('click', reload)
document.querySelector('.stay-button').addEventListener('click', stay)
document.addEventListener('DOMContentLoaded', main)
