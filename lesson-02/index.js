'use strict'
const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

let goodOptions = {
  reporters: [{
    reporter: require('good-console'),
    events: { log: ['error'], response: '*' }
  }]
}

server.register({
  register: require('good'),
  options: goodOptions
}, err => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      server.log('error', 'Oh no!')
      server.log('info', 'replying')
      reply('hello hapi')
    }
  })

  server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, reply) => {
      reply(`hello ${request.params.name}`)
    }
  })

  server.start(() => console.log(`Started at: ${server.info.uri}`))

})