const express = require('express');
const app = express();

app.get('/henlo', (req, res) => {
    const ticketList = [
        {
            text: 'GET tickets',
            isDone: true,
        },
        {
            text: 'DELETE tickets',
            isDone: false,
        },
        {
            text: 'CREATE tickets',
            isDone: false,
        },
    ];

    res.type('json').send(ticketList);
});

app.listen(3000);
