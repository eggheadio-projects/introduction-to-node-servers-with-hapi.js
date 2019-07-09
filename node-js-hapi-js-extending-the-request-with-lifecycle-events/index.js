'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8000 })

server.ext('onRequest', (request, reply)=> {
  request.setUrl('/')
  request.setMethod('GET')
  reply.continue()
})

server.route({
  method: ['POST', 'PUT'],
  path: '/',
  handler: function(request, reply){
    console.log('handler')
    reply('hello world')
  }
})

server.start(() => {})