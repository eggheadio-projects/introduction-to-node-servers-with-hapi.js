'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8000 })

server.state('hello', {
  ttl: 60 * 60 * 1000,
  isHttpOnly: true,
  encoding: 'iron',
  password: 'somethingSpecial'
})

server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: function (request, reply) {
      let hello = request.state.hello.name
      reply(`Cookies! ${hello}`)
        .state('hello', { name: 'Lucas' })
    }
  }
})

server.start(() => console.log(`Started at: ${server.info.uri}`))