//crear una clase
var TaskModel = function(title, description, created_at, url_image){
    this.id = TaskModel.findAll().length + 1;
    this.title = title;
    this.description = description;
    this.created_at = created_at;
    this.url_image = url_image;
}

TaskModel.prototype.toString = () => {
    return "id: " + this.id + " | Title: " + this.title;
}

//crear un array por q la informacion la tenemos en el modelo y no en bd
TaskModel.tasks = []; //array vacio

TaskModel.add = (task) => {
    TaskModel.tasks.push(tasl); //agregar 
    return true;
}

TaskModel.findAll = () => {
    return TaskModel.tasks //buscar todo traigametodo

}

TaskModel.findById = (id) => { //buscar por id
    /*for (let index = 0; index < TaskModel.tasks.length; index++) {
        const element = TaskModel.tasks[index];
        if(element.id == id)
        {
            return element;
        }
    } */
    // esto es lo mismo q el for 
    return TaskModel.tasks.find( task => task.id == id)                      
}

TaskModel.deleteById = (id) => {
    let pos = TaskModel.tasks.findIndex(task => task.id == id); // eliminar con findindex busca la posicion del array
    if(pos >= 0)
    {//    eliminar la tarea por su posicion 
        TaskModel.tasks.splice(pos);
    }
}

//llenando el arreglo para empezar el modelo con datos
let task1 = new TaskModel('Titulo1', 'Descripcion1', new date(), 'https://picsum.photos/id/237/200/300');
TaskModel.add(task1);

let task2 = new TaskModel('Titulo2', 'Descripcion2', new date(), 'https://picsum.photos/id/237/200/300');
TaskModel.add(task2);

//exportar el modulo a los modelos del node en app.js
module.exports = TaskModel