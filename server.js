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

app.get('/patient/:id', function (req, res) {
    const name = req.params.id
    console.log(name)
    res.sendFile(__dirname + '/patient_status.html')
})

app.get('/admin', function (req, res) {
    res.sendFile(__dirname + '/rescue.html')
})

app.listen(port)