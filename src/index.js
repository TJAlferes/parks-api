'use strict';
const express = require('express');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://${process.env.MONGO_UN}:${process.env.MONGO_PW}@clusterparks-i15wc.mongodb.net/test?retryWrites=true`;
const client = new MongoClient(uri, {useNewUrlParser: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});