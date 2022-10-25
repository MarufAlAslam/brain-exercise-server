const express = require('express')
const app = express()
const courses = require('./data.json')
const port = 5000

app.get('/', (req, res) => {
    res.send('Hey! Brain Exercise Server Running')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('The course with the given ID was not found.')
    res.send(course)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})