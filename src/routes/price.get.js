'use strict';

const DAY_MS = 60 * 60 * 24 * 1000;
const listPrice = require('../strategies/listPrice');
const Money = require('../types/Money')
const DateRange = require('../types/DateRange')
const Cars = require('../modules/Cars')
const CarMapper = require('../mappers/CarMapper')

module.exports = function(app, {db}) {
  app.get('/price', {
    schema: {
      query: {
        type: 'object',
        properties: {
          car_id: { type: 'number' },
          date_start: { type: 'string', format: 'date-time' },
          date_end: { type: 'string', format: 'date-time' }
        },
        required: [ 'car_id', 'date_start', 'date_end' ]
      }
    }
  }, async function(request, reply) {
    const car_id = request.query.car_id;
    const start = new Date(request.query.date_start);
    const end = new Date(request.query.date_end);


    const mapper = new CarMapper({db})
    const cars = new Cars({ mapper })
    const { price, days, car } = await cars.getOffer(car_id, {start, end})

    reply.view('price', {
      car,
      price,
      rental: { start, end, days },
      timestamp: new Date()
    });
  });
};
