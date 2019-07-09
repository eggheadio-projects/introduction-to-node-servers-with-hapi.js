'use strict'
const Hapi = require('@hapi/hapi')
const Path = require('path')
const Inert = require('@hapi/inert')

const server = new Hapi.Server
({
  host: 'localhost',
  port: 8000
})

async function start() {
  await server.register(Inert);

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'public'
        }
      }
    });

  server.start();
  console.log(`Server started at ${ server.info.uri }`);
}

start();
