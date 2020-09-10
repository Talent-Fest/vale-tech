const functions = require('firebase-functions');
const admin = require('firebase-admin');

const got = require('got');
const cors = require('cors');
const express = require('express');

admin.initializeApp(functions.config().firebase);

const app = express();
app.use(cors({ origin: true }));

app.use((req, res, next) => {
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
      req.authentication = JSON.parse(res.body);
      next();
    })
    .catch(err => console.log(err));
});


app
  .post(
    '/account',
    (req, res) => {
      const infoAcount = req.body;
      got
        .post(
          'https://qacst-ppi.hubprepaid.com.br/partner-interface/accounts/child',
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `${req.authentication.token_type} ${req.authentication.access_token}`
            },
            json: {
              ...infoAcount
            }
          }
        )
        .then(
          (response) => {
            const json = JSON.parse(response.body);
            res.status(200).send(`conta criada: ${json['financialOperationKey']}`);
          }
        )
        .catch(err => res.status(400).send(err.response.body))
    }
  )


exports.api = functions.https.onRequest(app);