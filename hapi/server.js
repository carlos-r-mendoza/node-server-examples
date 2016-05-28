const Hapi = require('hapi'); // npm install --save hapi

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route([
    // root route
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('hello hapi');
        }
    },
    // catch all routes
    {
        method: '*',
        path: '/{p*}',
        handler: (request, reply) => {
            return reply('Page not found').code(404);
        }
    }
    
]);

server.start(() => {
    console.log(`Starte at : ${server.info.uri}`);
});