const express = require('express')
const app = express()

const path = require('path')

// app.use('/static', express.static(__dirname + '/public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'))
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 5050

app.listen(port, () => {
    console.log(`server up on ${port}`)
})