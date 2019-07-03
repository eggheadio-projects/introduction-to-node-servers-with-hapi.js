/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line prettier/prettier
'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8000 })

server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: function (request, reply) {
      reply({
        params: request.params,
        query: request.query,
        payload: request.payload
      })
    }
  }
})

server.start(() => console.log(`Started at: ${server.info.uri}`))