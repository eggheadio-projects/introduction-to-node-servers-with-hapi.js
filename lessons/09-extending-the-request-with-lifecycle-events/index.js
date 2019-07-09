'use strict'
const Hapi = require('@hapi/hapi')

const server = new Hapi.Server
({
  host: 'localhost',
  port: 8000
})

server.ext('onRequest', (request, h) => {
  request.setUrl('/')
  request.setMethod('GET')
  return h.continue;
})

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, h) {
    console.log('handler')
    return 'hello world';
  }
});

async function start() {
  await server.start();
  console.log(`Server started at ${ server.info.uri }`);
}

start();
