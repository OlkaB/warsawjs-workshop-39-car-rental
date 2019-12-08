const Money = require('../types/Money')

class Car {
    constructor ({
        carID = null,
        make = null,
        model = null,
        plate = null,
        listPrice = null,
        rented = false,
        rentalID = null,
        policy = null
    }) {
        this._carID = carID
        this._make = make
        this._model = model
        this._plate = plate
        this._listPrice = listPrice ? new Money(listPrice) : null
        this._carID = carID
        this._rented = rented
        this._rentalID = rentalID
        this._policy = policy
    }

    getID () {
        return this._carID
    }
    getMake () {
        return this._make
    }
    getModel () {
        return this._model
    }
    getPlate () {
        return this._plate
    }
    getListPrice () {
        return this._listPrice
    }
    getCarID () {
        return this._carID
    }
    isRented () {
        return this._rented
    }
    getRentalID () {
        return this._rentalID
    }
    getPolicy () {
        return this._policy
    }

    rent (rentalID) {
        if(this.isRented()) {
            throw new Error('Already rented')
        }
        this._rented = true
        this._rentalID = rentalID
    }
    endRental (rentalID) {
        if(!this.isRented()) {
            throw new Error('Not yet rented rented')
        }
        this._rented = false
        this._rentalID = null
    }
}

module.exports = Car