const { onRequest } = require("firebase-functions/v2/https");
const functions = require('firebase-functions');
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("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");

// -App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => {
  response.status(200).send('hello');
});

app.post("payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment", total);
    const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    });
    
    // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });

})

// Listen command
exports.api = functions.https.onRequest(app);


//http://127.0.0.1:5001/challenge-56240/us-central1/api