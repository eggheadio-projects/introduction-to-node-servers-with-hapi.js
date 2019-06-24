/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line prettier/prettier
'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 8000 })

server.ext('onRequest', (request, reply)=> {
  console.log('onRequest')
  reply.continue()
})

server.ext('onPostAuth', (request, reply) => {
  console.log('onPostAuth')
  reply.continue()
})

server.ext('onPreHandler', (request, reply) => {
  console.log('onPreHandler')
  reply.continue()
})

server.ext('onPostHandler', (request, reply) => {
  console.log('onPostHandler')
  reply.continue()
})

server.ext('onPreResponse', (request, reply) => {
  console.log('onPreResponse')
  reply.continue()
})

server.route({
  method: ['POST', 'PUT'],
  path: '/',
  handler: function(request, reply){
    console.log('handler')
    reply('hello world')
  }
})

server.start(() => {})