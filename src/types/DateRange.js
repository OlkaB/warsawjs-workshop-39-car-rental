'use strict'

const ValueObject = require('./ValueObject')

class DateRange extends ValueObject {
    /**
     * Create a new DateRange
     * @param {Object} params
     * @param {(Date|string)} params.start
     * @param {(Date|string)} params.end
     */
	constructor({ start, end }) {
        start = new Date(start)
        end = new Date(end)
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            throw new TypeError('Start or end date is invalid')
        }
        super({ start, end }); // wywołujemy ValueObject z argumentem { amount, currency }
    }
}

module.exports = DateRange