const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    res.send('This is a test!');
});

app.get('/dog', (req, res) => {
    res.send('Hello? Yes, this is dog!');
});

module.exports = app;