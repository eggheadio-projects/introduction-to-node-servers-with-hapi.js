'use strict'
const Hapi = require('@hapi/hapi')

const server = new Hapi.Server
({
  host: 'localhost',
  port: 8000
})

server.state('hello', {
  ttl: 60 * 60 * 1000,
  isSecure: false,
  isHttpOnly: true,
  encoding: 'iron',
  password: 'a5LewP10pXNbWUdYQakUfVlk1jUVuLuUU6E1WEE302k'
})

// Must write code in order of lesson or you receive a TypeError
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
      let hello = request.state.hello.name
        return h.response(`Cookies! ${hello}`).state('hello', { name: 'mike' }, { isSecure: false });
    }
});

async function start() {
  await server.start();
  console.log(`Server started at ${ server.info.uri }`);
}

start();
