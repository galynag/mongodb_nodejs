/**
 * Created by Galina on 04.07.2017.
 */
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');
const db = require('./config/db.js');

const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect( db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));