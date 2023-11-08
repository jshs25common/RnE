const firebase = require("firebase-admin");
const config = require("./config");

const serviceAccount = require("./firebase_service_key.json");

const db = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://commonrne-1cb22-default-rtdb.firebaseio.com",
});

module.exports = db;