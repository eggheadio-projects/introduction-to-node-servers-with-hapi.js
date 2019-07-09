'use strict'
const Good = require('good')
const Hapi = require('@hapi/hapi')

const server = new Hapi.Server
({ host: 'localhost', port: 8000 })

server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        server.log('error', 'Oh no!')
        server.log('info', 'replying')
        return 'hello hapi';
      }
    });

async function start(){
  await server.register({
    plugin: Good,
    options: {
      reporters: {
        myConsoleReporter: [{
          module: 'good-console'
        }, 'stdout']
      }
    }
  });

  server.start();
  console.log(`Server started at ${ server.info.uri }`);
}

start();
