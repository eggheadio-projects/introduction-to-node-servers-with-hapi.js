'use strict'
const Hapi = require('@hapi/hapi')
const Boom = require('boom')
const Vision = require('vision')

const server = new Hapi.Server
({
  host: 'localhost',
  port: 8000
})

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, h) {
    return Boom.notFound()
  }
})

server.ext('onPreResponse', (request, h) => {
  let resp = request.response
  if (!resp.isBoom) return h.continue;

  return h.view('error', resp.output.payload)
    .code(resp.output.statusCode)
})

async function start() {
  await server.register(Vision);

  await server.views({
    engines: { hbs: require('handlebars') },
    relativeTo: __dirname,
    path: 'views'
  })


  server.start();
  console.log(`Server started at ${ server.info.uri }`);
}

start();
