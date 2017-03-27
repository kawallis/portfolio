'use strict'
const express = require('express');
const app = express();
const PORT = process.env.Port || 3000;

app.use(express.static('./public'));

app.get('*', (request, response) => {
    response.sendFile('/public/index.html', {root: '.'});
});

app.listen(PORT, () => { console.log(`Server up on ${PORT}`)}); 