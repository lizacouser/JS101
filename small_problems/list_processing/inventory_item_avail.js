/*
Problem:
-input inventory item and transactions
-output boolean if item is available
-rules
  -return true if sum of quantity values of item transactions is > 0
  -movement in increases quantity
  -movement out decreases quantity

Example:
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

Data:
-input id and array of objects
-output boolean
-internal arrays

Algorithm:
-given an id and transaction data
-get array of transactions for id
-map quantities for each transaction and sum to reduce
  -to get quantity
    -let quantity = 0
    -if transaction[movement] === 'in'
      -quantity += transaction[quantity];
    -else
      -quantity -= transaction[quantity];
-return sum > 0
*/

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(transaction => {
    return transaction['id'] === inventoryItem;
  });
}

function getQuantity(transaction) {
  return transaction['movement'] === 'in' ? transaction['quantity'] : -transaction['quantity'];
}

function isItemAvailable(inventoryItem, transactions) {
  let myTransactions = transactionsFor(inventoryItem, transactions);
  let itemQuantity = myTransactions.map(getQuantity)
    .reduce((sum, val) => sum + val);
  return itemQuantity > 0;
}

// you could also do this all in one step
function isItemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === "in") {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    }, 0);
  return quantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true