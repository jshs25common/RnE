const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 80
const cors = require('cors')
const userRoutes = require("./routes/user-routes");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRoutes.routes);

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