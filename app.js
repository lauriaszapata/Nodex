const express = require('express');

const app = express()
const port = 3000;

app.get('/',(req, res) => {
res.send('<h1>Index de Laura Arias NODEX</h1>')
})

app.get('/task',(req, res) => {
    res.send('<h1>Soy el index Laura Arias de las tareas!</h1>')
})

app.get('/task/:id',(req, res) => {
    res.send('<h3>Soy el view Laura Arias de las tareas especificas</h3><h1>'+req.params.id + "</h1>")
})

// respond with "hello world" when a GET request is made to the homepage
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})