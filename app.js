// Main JS File
const express = require('express')
const app = express()
const fetch = require('node-fetch')

fetch('http://test.anromsocial.com/api/birthdays?dateFrom=01.01&dateTo=01.02', {
        method: 'get',
        body:    params,
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));

app.get('/', function (req, res) {
  res.send(data)
})
 
app.listen(3000)