const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);


const app = express();
app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  res.status(200).send('ok');
});

app.post('/', (req, res) => {
  res.status(200).send('ok');
});

functions.https.onRequest(app);