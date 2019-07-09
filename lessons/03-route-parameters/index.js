'use strict'
const Good = require('good')
const Hapi = require('@hapi/hapi')

const server = new Hapi.Server
({ host: 'localhost', port: 8000 })

function handler(request, h) {
  return request.params;
}

server.route({
      method: 'GET',
      path: '/{stuff*}',
      handler: handler
})

server.route({
      method: 'GET',
      path: '/files/{file}.jpg',
      handler: handler
})

async function start(){
  await server.start();
  console.log(`Server started at ${ server.info.uri }`);
}

start();
