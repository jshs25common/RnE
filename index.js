const mongoose = require('mongoose');
const express = require('express')
const app = express()

const connect = () => {

    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }

    mongoose.connect('mongodb://Ryan:sh51246378@localhost:27017/nodejs', {
        dbName: 'nodejs',
        useNewUrlParser: true,
    }, (error) => {
        if (error) {
            console.log('MongoDB Connection Error', error);
        } else {
            console.log('MongoDB Connection Success');
        }
    });
};

mongoose.connection.on('error', (error) => {
    console.error('MongoDB Connection Error')
});
mongoose.connection.on('disconnected', () => {
    console.error('MongoDB Disconnected. Reconnecting')
});

module.exports = connect;