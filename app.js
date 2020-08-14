const express = require('express')
const bodyParser = require('body-parser')
const TaskModel = require ('./models/task')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<h1>Index Laura Arias de NODEX</h1>')
})

app.get('/task', (req, res) => {
    res.send(TaskModel.findAll());
})

app.get('/task/:id', (req, res) => {
    //res.send('<h3>Soy el VIEW de la tarea específica</h3><h1>' + req.params.id + "</h1>")
    res.send(TaskModel.findById(req.params.id));
})

app.post('/task', (req, res) => {
    console.log(req.body.title)
    res.send(req.body)
    // let task = new Task();
})

app.delete('/task/:id', (req, res) => {
    //res.send('<h3>Soy el DELETE de la tarea específica</h3><h1>' + req.params.id + "</h1>")
    let ddelete = TaskModel.deleteById(req.params.id);
    res.send("Eliminaste: " + ddelete )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})










