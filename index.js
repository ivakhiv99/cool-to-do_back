const express = require('express');
const { connectToDB, getCollection } = require('./mongodbConnection');
const app = express();

connectToDB((err) => {
    if(!err) {
        app.listen(3000);
    } else {
        console.log('Something went wrong while connecting to database');
    }
});

app.get('/all-tickets', async (req, res) => {
    const collection = getCollection();

    const ticketList = [];

    await collection.find().forEach(ticket => {
        ticketList.push(ticket);  
    });

    res.json(ticketList);
});
