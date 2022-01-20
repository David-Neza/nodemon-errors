const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello David');
});

app.listen(port, () => {
    console.log('Listenng on Port: ', port)
});
