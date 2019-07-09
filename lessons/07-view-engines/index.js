'use strict'
const Good = require('good')
const Hapi = require('@hapi/hapi')
const Vision = require('@hapi/vision')

const server = new Hapi.Server
({ host: 'localhost', port: 8000 })

server.route({
  method: 'GET',
  path: '/{name?}',
  handler: function(request, h) {
    return h.view('home', { name: request.params.name || 'World' })
  }
})

async function start(){
  await server.register(Vision);

  await server.views({
      engines: {
        hbs: require('handlebars')
      },
      relativeTo: __dirname,
      layout: true,
      path: 'views'
    })

    server.start();
    console.log(`Server started at ${ server.info.uri }`);
  }


start()
