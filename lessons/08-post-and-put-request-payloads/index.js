'use strict'
const Hapi = require('@hapi/hapi')

const server = new Hapi.Server
({
  host: 'localhost',
  port: 8000
})

server.route({
  method: ['POST', 'PUT'],
  path: '/',
  config: {
    payload: {
      output: 'data',
      parse: false,
      allow: 'application/json'
    }
  },
  handler: function (request, h) {
    return request.payload;
  }
});

async function start() {
  await server.start();
  console.log(`Server started at ${ server.info.uri }`);
}

start();
