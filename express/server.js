const express = require('express'); // npm install --save express
const app = express();

app.get('/', (request, response) => {
    response.set('Content-Type', 'text/html');
    response.send('hello');
});

// catch all routes
app.use((request, response) => {
    response.send('404')
});

const server = app.listen(8080, () => {
    console.log('Server running at localhost... ', server.address().port)
});