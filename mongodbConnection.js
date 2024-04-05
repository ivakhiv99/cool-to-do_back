const { MongoClient } = require('mongodb');

const connectionUrl = 'mongodb+srv://learningNode:coolpass@test-cluster.tsx3pds.mongodb.net/?retryWrites=true&w=majority&appName=test-cluster';
const dbName = 'todo-app';

let collection;

const connectToDB = (cb) => {
    const client = new MongoClient(connectionUrl);

    client.connect().then(() => {
        console.log('Connected to mongo client');
        const db = client.db(dbName);
        collection = db.collection('todo-tickets');
        cb();
    }).catch((err) => {
        console.log(err);
        cb(err);
    });

};

module.exports = {
    connectToDB,
    getCollection: () => collection, 
};
