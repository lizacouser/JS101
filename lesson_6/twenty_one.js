const READLINE = require('readline-sync');

const SUITS = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const CARD_NAMES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

const BUST_VALUE = 21;
const DEALER_DRAW_VALUE = 17;
const HIGH_ACE_VALUE = 11;
const LOW_ACE_VALUE = 11;
const FACE_VALUE = 10;

const NAME_INDEX = 0;
const VALUE_INDEX = 1;

const SCORE_TO_WIN = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

function initializeDeck() {
  let deck = [];
  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex += 1) {
    let suit = SUITS[suitIndex];

    for (let nameIndex = 0; nameIndex < CARD_NAMES.length; nameIndex += 1) {
      let card = CARD_NAMES[nameIndex];
      if (card === 'Ace') {
        deck.push([`${card} of ${suit}`, HIGH_ACE_VALUE]); // ['Ace of Hearts', 11]
      } else if (['Jack', 'Queen', 'King'].includes(card)) {
        deck.push([`${card} of ${suit}`, FACE_VALUE]); // ['King of Clubs', 10]
      } else {
        deck.push([`${card} of ${suit}`, card]); // for numbers, ['8 of Spades', 8]
      }
    }
  }
  return shuffle(deck);
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
  return deck;
}

function initializeHands(deck) {
  let hands = {};
  hands.player = deck.splice(0, 2); // deal first two cards in deck
  hands.dealer = deck.splice(0, 2);

  // If someone draws two aces, change the value of second ace to 1
  Object.keys(hands).forEach(cardHolder => {
    if (hands[cardHolder].every(card => card[NAME_INDEX] === 'Ace')) {
      hands[cardHolder][1][VALUE_INDEX] = LOW_ACE_VALUE;
    }
  });

  console.log(hands);
  return hands;
}

// Get the names of all cards in a hand
function getCardsInHand(hand) {
  return hand.map(nestedArray => nestedArray[NAME_INDEX]);
}

function displayConcealedHand(hands) {
  console.log('');
  prompt(`Dealer has ${getCardsInHand(hands.dealer)[0]} and unknown card`);
  prompt(`You have ${joinAnd(getCardsInHand(hands.player))}`);
  prompt(`Your total is ${getHandSum(hands.player)}`);
}

function displayAllCards(hands) {
  prompt(`Dealer has ${joinAnd(getCardsInHand(hands.dealer))} for a total of ${getHandSum(hands.dealer)}`);
  prompt(`You have ${joinAnd(getCardsInHand(hands.player))} for a total of ${getHandSum(hands.player)}`);
}

function displayWinner(hands) {
  console.log('');
  switch (getWinner(hands)) {
    case 'player':
      prompt('YOU WIN!');
      break;
    case 'dealer':
      prompt('DEALER WINS! Better luck next time.');
      break;
    default:
      prompt("It's a tie! What are the odds?");
  }
}

function getWinner(hands) {
  let playerSum = getHandSum(hands.player);
  let dealerSum = getHandSum(hands.dealer);

  if (
    busted(hands.dealer) || (!busted(hands.player) && playerSum > dealerSum)
  ) {
    return 'player';
  } else if (
    busted(hands.player) || (!busted(hands.dealer) && playerSum < dealerSum)
  ) {
    return 'dealer';
  } else {
    return "tie";
  }
}

// Returns string of elements in array connected by delimiter and conjunction
function joinAnd(arr, delimiter = ', ', word = 'and') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function getPlayerMove() {
  console.log('');
  prompt('Would you like to hit or stay?');
  let answer = READLINE.question().toLowerCase();

  while (!['hit', 'stay', 'h', 's'].includes(answer)) {
    prompt('Invalid response. Try again:');
    answer = READLINE.question().toLowerCase();
  }

  return answer[0];
}

function hit(deck, hand) {
  let newCard = deck.shift();
  if (newCard[NAME_INDEX] === 'Ace') {
    newCard[VALUE_INDEX] = getAceValue(hand);
  }
  hand.push(newCard);
}

// determine if ace is worth 11 or 1 before adding to hand
function getAceValue(hand) {
  if (getHandSum(hand) + HIGH_ACE_VALUE >= BUST_VALUE) {
    return LOW_ACE_VALUE;
  } else {
    return HIGH_ACE_VALUE;
  }
}

function getHandSum(hand) {
  return hand.reduce((sum, card) => sum + card[VALUE_INDEX], 0);
}

function busted(hand) {
  return getHandSum(hand) > 21;
}

function displayEndResults(hands) {
  console.log('----------------');
  displayAllCards(hands);
  displayWinner(hands);
  console.log('----------------');
}

function playAgain(gameOrMatch) {
  console.log('');
  if (gameOrMatch === 'game') {
    prompt( 'Keep playing? (y or n)');
  } else {
    prompt( 'Would you like to start a new match? (y or n)');
  }

  let answer = READLINE.question().toLowerCase();
  while (!['yes', 'y', 'no', 'n'].includes(answer)) {
    prompt('Invalid response. Try again:');
    answer = READLINE.question().toLowerCase();
  }

  return answer[0] === 'y';
}

function getDrawnCard(hand) {
  return hand[hand.length - 1][NAME_INDEX];
}

function playerTurn(deck, hands) {
  displayConcealedHand(hands);

  while (getPlayerMove() === 'h') {
    hit(deck, hands.player);
    prompt(`You hit, and draw ${getDrawnCard(hands.player)}`);

    if (busted(hands.player)) {
      prompt('Busted!');
      break;
    }

    displayConcealedHand(hands);
  }
}

function dealerTurn(deck, hands) {
  while (getHandSum(hands.dealer) <= DEALER_DRAW_VALUE) {
    hit(deck, hands.dealer);
    prompt(`Dealer hits, and draws ${getDrawnCard(hands.dealer)}`);

    if (busted(hands.dealer)) {
      prompt('Dealer busted!');
      break;
    }
  }
}

function initializeMatch() {
  let score = {};
  score['player'] = 0;
  score['dealer'] = 0;

  return score;
}

function isMatchWinner(score) {
  return !!getMatchWinner(score);
}

function getMatchWinner(score) {
  let winner = Object.entries(score).find(subArray => {
    return subArray[1] === SCORE_TO_WIN;
  });
  if (winner) {
    return winner[0];
  } else {
    return null;
  }
}

function logScore(score) {
  console.log('');
  prompt('Game Score');
  prompt(`Dealer: ${score.dealer}`);
  prompt(`You: ${score.player}`);
  console.log('');
}

// Game Play
while (true) {
  let score = initializeMatch();

  while (true) {
    let deck = initializeDeck();
    let hands = initializeHands(deck);

    console.clear();
    prompt('Welcome to Twenty-One!');

    logScore(score);

    while (true) {
      playerTurn(deck, hands);

      if (busted(hands.player)) {
        break;
      } else {
        prompt('You chose to stay');
      }

      dealerTurn(deck, hands);

      if (busted(hands.dealer)) {
        break;
      } else {
        prompt("Dealer stays... Let's compare scores");
        break;
      }
    }

    displayEndResults(hands);
    score[getWinner(hands)] += 1;

    if (isMatchWinner(score)) {
      prompt(`${getMatchWinner(score).toUpperCase()} WINS THE MATCH!`);
      break;
    }

    if (!playAgain('game')) break;
  }
  if (!playAgain('match')) break;
}

prompt('Thanks for playing! Goodbye.');





/*
Rules:
-start with a 52 card deck
  -number cards worht their face value
  -J, Q, and K worth 10
  -Ace worth 1 or 11
    - worth 11 if adding 11 after drawing sums to under 21
    - worth 1 if adding 11 after drawing sums to over 21
-goal
  - get as close to 21 as possible without going over
  - if you go over 21, it's a 'bust' and you lose
-each player dealt two cards
  - 1 dealer
  - 1 player
    -can see both their cards and one of dealer's cards
-game play
  -player goes first
  -player turn options:
    -hit = dealt another card
        -player can hit as many times as they want until they stay or bust
    -stay = not dealt a card
  -dealer's turn:
    -must hit until total of cards is at least 17
- when both player and dealer stay, you compare total value of cards

Examples:
Dealer has: 5 and unknown card
You have: Jack and 6

Pseudocode:
-Initialize deck
-Deal cards to player and dealer
-Player turn: hit or stay
  -repeat until stay or bust
-If player bust, dealer win
-Dealer turn: hit or stay
  - reapeat until total >= 17
-If dealer busts, player wins
-Compare cards and declare winner
-what happens when you run out of cards in your deck

Data:
-Deck object
-Maybe cards are objects?
` -card number: quantity
  -select random card by key
  -lower quantity in deck object at that key
  -getValue in a function?
-Deck Array
  -sorted randomly and popped [2, 2, 2, 2, 3, 3, 3, 3, 4, 4]
-Hands are objects?
  -player: [[2, 2], [3, 3], [K, 10]]
  -dealer: [[A, 11], [5, 5]]
-when you add a card to your hand, you add a card: value pair


Getting value of ace:
- worth 11 if adding 11 after drawing sums to under 21
- worth 1 if adding 11 after drawing sums to over 21


Player turn:
- Ask player to hit or stay
- if stay, break
- hit
- if bust, break
- ask again

-out of loop
  -if stay, 'you chose to stay'
  -if bust, end game


Shuffle cards:
-Fisher Yates shuffle
  -array of cards

dealer turn:
- if sum is over 17 or bust, break
- else hit

Display:
-one function to determine result
-another function to display
*/