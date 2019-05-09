// let cardNum = ['A', 2, 3, 3, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
// let cardSuit = ['hearts', 'clubs', 'diamonds', 'spades']

// // let randomCard = [Math.floor(Math.random() * deck.length)]

// // let chooseCard = () => {
// //   const cardHolder = document.createElement('section')
// //   cardHolder.textContent = deck[randomCard]
// //   document.querySelector('.container').appendChild(cardHolder)
// //   console.log(chooseCard)
// // }

let deck = () => {
  let cards = []
  for (let suit = 4; suit > 0; suit--) {
    for (let rank = 13; rank > 0; rank--) {
      cards.push({
        suit: suit,
        rank: rank
      })
    }
    console.log(cards)
  }

  // shuffle = () => {
  //   let moveCard
  //   for (i = deck.length - 1; i > 0; i--) {
  //     let randomNum = Math.floor(Math.random() * (i + 1))
  //     let tempCard = deck[i]
  //     deck[i] = deck[randomNum]
  //     deck[randomNum] = deck[tempCard]
  //   }
  // }
  // let randomNum = Math.floor(Math.random() * 52)
  // let shuffledDeck = this.cards.map(x => x * randomNum)
  // console.log(cards)
}

const main = () => {
  deck()
  //console.log(shuffledDeck)
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
