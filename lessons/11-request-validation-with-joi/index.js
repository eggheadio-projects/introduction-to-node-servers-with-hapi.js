'use strict'
const Hapi = require('@hapi/hapi')
const Joi = require('@hapi/joi')

const server = new Hapi.Server
({
  host: 'localhost',
  port: 8000
})

server.route({
  method: ['POST', 'PUT'],
  path: '/user/{id?}',
  config: {
    validate: {
      params: Joi.object({
        id: Joi.number()
      }),
      query: Joi.object({
        id: Joi.number()
      })
    },
    handler: function(request, h) {
      return {
        params: request.params,
        query: request.query,
        payload: request.payload
      }
    }
  }
})

async function start() {
  await server.start();
  console.log(`Server started at ${ server.info.uri }`);
}

start();
