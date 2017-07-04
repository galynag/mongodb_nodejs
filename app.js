/**
 * Created by Galina on 04.07.2017.
 */
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const main = express();


// Connect to the db
MongoClient.connect("mongodb://admin12:1122@ds157320.mlab.com:57320/bootcamp", function (err, db) {

    db.collection('bootcamp', function (err, collection) {

        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });



        db.collection('bootcamp').count(function (err, count) {
            if (err) throw err;

            console.log('Total Rows: ' + count);
        });
    });

});
