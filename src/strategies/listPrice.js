'use strict';

const Money = require('../types/Money')
const DAY_MS = 60 * 60 * 24 * 1000;

function calculateRentalPriceByListPrice(listPrice, dateRange) {
  const days = Math.ceil((dateRange.end.getTime() - dateRange.start.getTime()) / DAY_MS);
  if (days <= 0) {
    throw new Error(`Invalid rental duration: ${days} days`);
  }
  return {
    price: new Money({
      amount: days * listPrice.amount,
      currency: listPrice.currency
    }),
    days: days
  };
}

module.exports = calculateRentalPriceByListPrice;
