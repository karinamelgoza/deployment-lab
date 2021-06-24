const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stylesheet.css'))
})

const port = process.env.PORT || 5050

app.listen(port, () => {
    console.log(`server up on ${port}`)
})