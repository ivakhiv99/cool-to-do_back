const express = require('express');
const app = express();

app.get('/all-tickets', (req, res) => {
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
    res.json(ticketList);
});

app.listen(3000);
