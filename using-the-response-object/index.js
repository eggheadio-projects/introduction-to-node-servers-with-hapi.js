'use strict'
const Hapi = require('hapi')
const Boom = require('boom')

const server = new Hapi.Server()
server.connection({ port: 8000 })

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply){
    reply('hello world')
      .code(418)
      .type('text/plain')
      .header('hello', 'world')
      .state('hello', 'world')
  }
})

server.start(() => {})