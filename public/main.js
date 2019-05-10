// let cardNum = ['A', 2, 3, 3, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
// let cardSuit = ['hearts', 'clubs', 'diamonds', 'spades']

// // let randomCard = [Math.floor(Math.random() * deck.length)]

// // let chooseCard = () => {
// //   const cardHolder = document.createElement('section')
// //   cardHolder.textContent = deck[randomCard]
// //   document.querySelector('.container').appendChild(cardHolder)
// //   console.log(chooseCard)
// // }

const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
const ranks = [
  { face: 'Ace', value: 11 },
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
  { face: 'Queen', value: 10 },
  { face: 'King', value: 10 }
]

const deck = []

let createDeck = () => {
  for (let i = suits.length; i > 0; i--) {
    const suit = suits[i]
    for (let j = 0; j < ranks.length; j++) {
      const rank = ranks[j]
      const card = {
        face: rank.face,
        value: rank.value,
        suit: suit
      }
      deck.push(card)
    }
  }
  // console.log(deck)
  return shuffle(deck)
}

const shuffle = () => {
  let deckLength = deck.length // Define the length of the deck

  // Go through entire deck
  for (deckLength - 1; deckLength >= 1; deckLength--) {
    // Choose a random Card
    const randomNum = Math.floor(Math.random() * (deckLength + 1))
    const cardHolder = deck[deckLength] // Place the first card (of the remaining deck) into an empty variable
    deck[deckLength] = deck[randomNum] // Take a random card and put it at the bottom of the remaining deck
    deck[randomNum] = cardHolder // Place the card we first took, into the where we pulled the random card was.
  }
}

// let randomNum = Math.floor(Math.random() * 52)
// let shuffledDeck = this.cards.map(x => x * randomNum)
// console.log(cards)
const dealCards = () => {
  const playerOne = []
  const playerTwo = []
  for (i = 2; i > 0; i--) {
    playerOne.push(deck.pop())
    playerTwo.push(deck.pop())
  }
  console.log(playerOne)
  console.log(playerTwo)
  const add = (a, b) => {
    return a.value + b.value
  }
  const playerOneTotal = playerOne.reduce(add)
  const playerTwoTotal = playerTwo.reduce(add)
  console.log(playerOneTotal)
  console.log(playerTwoTotal)

  if (playerOneTotal === 21) {
    document.querySelector('.display-winner').textContent = 'BlackJack'
  }
}

const main = () => {
  createDeck()
  dealCards()
}

// const deck = []
// const suit = 4
// const rank = 13

// let makeDeck = () => {
//   suit.forEach(suit => {
//     rank.forEach(rank => {
//       deck.push(rank + suit)
//       console.log(makeDeck)
//     })
//   })
// }

// const makeDeck = () => {
//   for (let x = 0; x <= cardNum.length - 1; x++) {
//     for (let y = 0; y <= cardSuit.length - 1; y++) {
//       deck.push(cardNum[x] + ' ' + 'of' + ' ' + cardSuit[y])
//       console.log(deck)
//     }
//   }
// }
//    color.forEach(color =>{
//     position.forEach(position => {
//       chessSet.push(color + position)
//     })
// })
// document.querySelector('.container').addEventListener('click', chooseCard)
document.addEventListener('DOMContentLoaded', main)
document.addEventListener('click', dealcards)
