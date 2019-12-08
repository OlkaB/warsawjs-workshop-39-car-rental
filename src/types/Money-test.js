const Money = require('./Money')
const price = new Money({amount: 25, currency: 'PLN'})

console.log('before: ', price)
price.amount = 30
console.log('after: ', price)

// to run this file write in terminal: node ./src/types/Money-test.js