const express = require('express')
const app = express()
const port = 80
const cors = require('cors')

app.use(cors())

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