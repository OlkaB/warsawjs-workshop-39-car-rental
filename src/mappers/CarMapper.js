'use strict';
const Car = require('../entities/Car')

class CarMapper {
    constructor({db}) {
        this._db = db
    }

    fromRow (row) {
        return new Car({
            carID: row.car_id,
            make: row.make,
            model: row.model,
            plate: row.plate,
            listPrice: {
                amount: row.list_price_amount,
                currency: row.list_price_currency,
            },
            rented: row.rented,
            rentalID: row.rental_id,
            policy: row.policy
        })
    }

    toRow (car) {
        return {
            car_id: car.getID(),
            make: car.getMake(),
            model: car.getModel(),
            plate: car.getPlate(),
            list_price_currency: car.getListPrice().currency,
            list_price_amount: car.getListPrice().amount,
            rented: car.isRented(),
            rental_id: car.getRentalID(),
            policy: car.getPolicy()
        }
    }

    async find ({ID}) {
        const car = await this._db('cars')
        .first()
        .where({car_id: ID})

        if(!car) {
            return Promise.reject(new Error('No entry'))
        }

        return this.fromRow(car)
    }

    async update(car) {
        if (!car.getID) {
            throw new Error('Car without IDs cannot be saved')
        }

        const row = this.toRow(car)
        return await this._db('cars')
            .update(row)
            .where({ car_id: car.getID() })
    }
}

module.exports = CarMapper