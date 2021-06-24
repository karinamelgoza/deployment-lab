const express = require('express')
const app = express()

const path = require('path')

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 5050

app.listen(port, () => {
    console.log(`server up on ${port}`)
})