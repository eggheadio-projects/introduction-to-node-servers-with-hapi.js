'use strict'
const Hapi = require('@hapi/hapi')
const Boom = require('boom')

const server = new Hapi.Server
({
  host: 'localhost',
  port: 8000
})

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, h) {
    return h
      .response('hello world')
      .code(418)
      .type('text/plain')
      .header('hello', 'world')
      .state('hello', 'world')

  }
});

async function start() {
  await server.start();
  console.log(`Server started at ${ server.info.uri }`);
}

start();
