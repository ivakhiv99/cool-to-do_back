const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const connectToDB = async () => {
    const connectionUrl = 'mongodb+srv://learningNode:coolpass@test-cluster.tsx3pds.mongodb.net/?retryWrites=true&w=majority&appName=test-cluster';
    const client = new MongoClient(connectionUrl);


    await client.connect();
    console.log('Connected to mongo client');

    const dbName = 'todo-app';
    const db = client.db(dbName);
    const collection = db.collection('todo-tickets');
}

connectToDB().then(() => app.listen(3000)).catch(err => console.log(err));

app.get('/all-tickets', (req, res) => {

// make a request to mongodb here
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
