'use strict'
const Hapi = require('hapi')
const Boom = require('boom')
const server = new Hapi.Server()
server.connection({ port: 8000 })

server.register(require('vision'), () => {
  server.views({
    engines: { hbs: require('handlebars') },
    relativeTo: __dirname,
    path: 'views'
  })
})

server.ext('onPreResponse', (request, reply) => {
  let resp = request.response
  if(!resp.isBoom) return reply.continue() 

  reply.view('error', resp.output.payload)
    .code(resp.output.statusCode)
})

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply(Boom.notFound())
  }
})

server.start(() => { })