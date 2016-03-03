var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'whatever d00d',
    completed: false
},{
    id: 2,
    description: 'finish lesson',
    completed: false
},{
    id: 3,
    description: 'done',
    completed: true
}];

app.get('/', function(req, res){
    res.send('Todo API Root.');
});

app.get('/todos', function(req, res){
   res.json(todos);
});

app.get('/todos/:id', function(req, res){
    var id = parseInt(req.params.id, 10);
    var matched;
    todos.forEach(function(todo){
        if(todo.id === id) matched = todo;
    });
    if(matched){
        res.json(matched);
    }
    else {
        res.status(404).send();
    }
});


app.listen(PORT, function(){
    console.log('Express server started.');
});
