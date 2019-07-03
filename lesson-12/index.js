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
      let hello = request.state.hello
      reply(`Cookies! ${hello}`)
        .state('hello', 'world', {
          ttl: 60 * 60 * 1000,
          isHttpOnly: true,
          encoding: 'iron',
          password: '123'
        })
    }
  }
})

server.start(() => console.log(`Started at: ${server.info.uri}`))