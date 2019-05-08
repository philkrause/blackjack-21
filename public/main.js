let cardNum = ['A', 2, 3, 3, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
let cardSuit = ['hearts', 'clubs', 'diamonds', 'spades']

let deck = []

let chooseCard = () => {
  let randomCard = [Math.floor(Math.random() * deck.length)]
  const cardHolder = document.createElement('section')
  cardHolder.textContent = deck[randomCard]
  document.querySelector('.container').appendChild(cardHolder)
  console.log(chooseCard)
}
const main = () => {
  makeDeck()
  chooseCard()
}

const makeDeck = () => {
  for (let x = 0; x <= cardNum.length - 1; x++) {
    for (let y = 0; y <= cardSuit.length - 1; y++) {
      deck.push(cardNum[x] + ' ' + 'of' + ' ' + cardSuit[y])
      console.log(deck)
    }
  }
}
//    color.forEach(color =>{
//     position.forEach(position => {
//       chessSet.push(color + position)
//     })
// })

document
  .querySelector('.container.deal-button')
  .addEventListener('click', chooseCard)
document.addEventListener('DOMContentLoaded', main)
