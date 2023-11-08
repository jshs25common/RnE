const express = require('express')
const app = express()
const port = 80
const cors = require('cors')
const firebase = require('firebase/compat/app');

require('firebase/compat/database');

require("dotenv").config();

const firebaseConfig = {
    ßapiKey: process.env.FB_APIKEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

////////firebase Initialization
firebase.initializeApp(firebaseConfig);

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html')
})

app.get('/patient', function (req, res) {
    res.sendFile(__dirname + '/patient_list.html')
})

app.get('/map', function (req, res) {
    res.sendFile(__dirname + '/map.html')
})

app.listen(port)

firebase.database().ref("approved_users")
    .on("value", (snapshot) => {
        if (snapshot.val() !== null) {
            console.log(snapshot.val());
        } else {
            console.log("데이터를 찾지 못했습니다!");
        }
    });

firebase.database().ref("approved_users/").update({ patient: [1, [1, 0, 1, 0, 0, 0, 1], '(32.5, 126.5)'] });