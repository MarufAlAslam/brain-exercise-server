const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hey! Brain Exercise Server Running')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})