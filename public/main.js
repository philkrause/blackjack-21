// let cardNum = ['A', 2, 3, 3, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
// let cardSuit = ['hearts', 'clubs', 'diamonds', 'spades']

// // let randomCard = [Math.floor(Math.random() * deck.length)]

// // let chooseCard = () => {
// //   const cardHolder = document.createElement('section')
// //   cardHolder.textContent = deck[randomCard]
// //   document.querySelector('.container').appendChild(cardHolder)
// //   console.log(chooseCard)
// //
const images = {
  ...[
    '/images/2_of_clubs.svg',
    '/images/2_of_diamonds.svg',
    '/images/2_of_hearts.svg',
    '/images/2_of_spades.svg',
    '/images/3_of_clubs.svg',
    '/images/3_of_diamonds.svg',
    '/images/3_of_hearts.svg',
    '/images/3_of_spades.svg',
    '/images/4_of_clubs.svg',
    '/images/4_of_diamonds.svg',
    '/images/4_of_hearts.svg',
    '/images/4_of_spades.svg',
    '/images/5_of_clubs.svg',
    '/images/5_of_diamonds.svg',
    '/images/5_of_hearts.svg',
    '/images/5_of_spades.svg',
    '/images/6_of_clubs.svg',
    '/images/6_of_diamonds.svg',
    '/images/6_of_hearts.svg',
    '/images/6_of_spades.svg',
    '/images/7_of_clubs.svg',
    '/images/7_of_diamonds.svg',
    '/images/7_of_hearts.svg',
    '/images/7_of_spades.svg',
    '/images/8_of_clubs.svg',
    '/images/8_of_diamonds.svg',
    '/images/8_of_hearts.svg',
    '/images/8_of_spades.svg',
    '/images/9_of_clubs.svg',
    '/images/9_of_diamonds.svg',
    '/images/9_of_hearts.svg',
    '/images/9_of_spades.svg',
    '/images/10_of_clubs.svg',
    '/images/10_of_diamonds.svg',
    '/images/10_of_hearts.svg',
    '/images/10_of_spades.svg',
    '/images/ace_of_clubs.svg',
    '/images/ace_of_diamonds.svg',
    '/images/ace_of_hearts.svg',
    '/images/ace_of_spades.svg',
    '/images/jack_of_clubs.svg',
    '/images/jack_of_diamonds.svg',
    '/images/jack_of_hearts.svg',
    '/images/jack_of_spades.svg',
    '/images/king_of_clubs.svg',
    '/images/king_of_diamonds.svg',
    '/images/king_of_hearts.svg',
    '/images/king_of_spades.svg',
    '/images/queen_of_clubs.svg',
    '/images/queen_of_diamonds.svg',
    '/images/queen_of_hearts.svg',
    '/images/queen_of_spades.svg'
  ]
}

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
  { face: 'Ace', value: 1 },
  { face: 'Jack', value: 10 },
  { face: 'King', value: 10 },
  { face: 'Queen', value: 10 }
]

const deck = []
deck.push(images)
let createDeck = () => {
  for (let j = 0; j < ranks.length; j++) {
    const rank = ranks[j]
    for (let i = 0; i < suits.length; i++) {
      const suit = suits[i]
      const card = {
        face: rank.face,
        value: rank.value,
        suit: suit
      }

      deck.push(card)
    }
  }

  //console.log(deck)
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

const playerOne = []
const playerTwo = []
console.log(playerOne)
console.log(playerTwo)

const dealCards = () => {
  for (i = 2; i > 0; i--) {
    playerOne.push(deck.pop())
    playerTwo.push(deck.pop())
  }

  const add = (a, b) => {
    return a.value + b.value
  }
  const playerOneTotal = playerOne.reduce(add)
  const playerTwoTotal = playerTwo.reduce(add)

  const cardHolder = document.createElement('section')
  cardHolder.textContent = console.log(playerOneTotal)
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
// document.addEventListener('click', dealcards)
