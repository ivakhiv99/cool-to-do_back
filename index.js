const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDB, getCollection } = require('./mongodbConnection');
const app = express();
app.use(express.json())

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

app.get('/ticket/:id', async (req, res) => {

});

app.post('/add-ticket', async (req, res) => {

});

app.patch('/edit-ticket/:id', async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    const collection = getCollection();
    if (ObjectId.isValid(id)) {
        try {
            const afterInsert = await collection.updateOne({_id: new ObjectId(id)}, {$set: update});
            res.json(afterInsert);
        } catch(error) {
            res.status(500).json({err: error});
        }
    } else {
        res.status(500).json({err: 'incorrect ticket id'});
    }

});

app.delete('/remove-ticket/:id', async (req, res) => {
    const id = req.params.id;

    const collection = getCollection();
    if (ObjectId.isValid(id)) {
        try {
            const afterDelete = await collection.deleteOne({_id: new ObjectId(id)});
            res.json(afterDelete);
        } catch(error) {
            res.status(500).json({err: error});
        }
    } else {
        res.status(500).json({err: 'incorrect ticket id'});
    }
});
