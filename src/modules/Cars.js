'use strict'


const listPrice = require('../strategies/listPrice');
const Money = require('../types/Money')

class Cars {
    constructor({mapper}) {
        this._mapper = mapper
    }

    async getOffer (carID, dateRange) {
        const car = await this._mapper.find({ID: carID})

    if (!car) {
      return Promise.reject(new Error('No entry found for car: ' + carID));
    }
    const { price, days } = listPrice(
        car.getListPrice(),
        dateRange
    );

    return {price, days, car}
    }
}

module.exports = Cars