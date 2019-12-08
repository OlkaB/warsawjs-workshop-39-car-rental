'use strict'

class ValueObject {
	constructor(data) {
		Object.assign(this, data)
		Object.freeze(this);  // immutable object
    }
}

module.exports = ValueObject