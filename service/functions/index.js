const functions = require('firebase-functions');
const admin = require('firebase-admin');

const got = require('got');
const cors = require('cors');
const express = require('express');

admin.initializeApp({
  apiKey: "AIzaSyBECU7Xsk3l6NDBlxLV4MeKQh_zqjtsBZM",
  authDomain: "valetech-5ea35.firebaseapp.com",
  databaseURL: "https://valetech-5ea35.firebaseio.com",
  projectId: "valetech-5ea35",
  storageBucket: "valetech-5ea35.appspot.com",
  messagingSenderId: "231084693612",
  appId: "1:231084693612:web:8bb1bb24b990580fd9e049"
});

const app = express();
app.use(cors({ origin: true }));

app.get('/', (res) => {
  res.status(200).send('ok')
});

let token;

got
  .post(
    'https://hublaboratoria1:hublaboratoria1@qacst-ppi.hubprepaid.com.br/partner-interface-oauth2/oauth/token',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        'grant_type': 'client_credentials'
      }
    }
  )
  .then((res) => {
    const json = JSON.parse(res.body);
    token = json['access_token']
  })
  .catch(err => console.log(err));

exports.api = functions.https.onRequest(app);