const express = require('express');
const app = express();
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(express.json());
var IDcounter = 10;
var todos = [
    {
        id: 1,
        title: "delectus aut autem",
        completed: false 
    },
    {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: true 
    },
    {
        id: 3,
        title: "fugiat veniam minus",
        completed: true 
    },
    {
        id: 4,
        title: "et porro tempora",
        completed: false 
    }
];

app.get('/', (req, res) => {
    res.send('Hello World');

});

app.get('/api/todos', (req, res) => {
    res.send(todos);
})

app.get('/api/todos/:id', (req, res) =>{
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo){
        res.status(404).send('Todo with the given ID was not found');
    }
    else{
        res.send(todo);
    }
})

app.post('/api/todos', (req, res) => {
    if (!req.body.title){
        res.status(400).send('Title is required.');
        return;
    }

    const todo = {
        id: IDcounter + 1,
        
        title: req.body.title,
        completed: req.body.completed
    };
    IDcounter++;
    todos.push(todo);
    res.send(todo);
})

app.put('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo){
        res.status(404).send('Todo with the given ID was not found');
    }
    todo.completed = !todo.completed;
    res.send(todo);
})

app.delete('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo){
        res.status(404).send('Todo with the given ID was not found');
    }

    const index = todos.indexOf(todo);
    todos.splice(index, 1);

    res.send(todo);

})


//MEMOS
var memos = [
    {
        id: 1,
        title: "Sastanak",
        text: "Cetvrtak 18:00h"
    },
    {
        id: 2,
        title: "Hrana za macke",
        text: "Kupiti whiskas"
    }
];
var IDcounter2 = 10;


app.get('/api/memos', (req, res) => {
    res.send(memos);
})

app.get('/api/memos/:id', (req, res) =>{
    const memo = memos.find(t => t.id === parseInt(req.params.id));
    if(!memo){
        res.status(404).send('Memo with the given ID was not found');
    }
    else{
        res.send(memo);
    }
})

app.post('/api/memos', (req, res) => {
    if (!req.body.title){
        res.status(400).send('Title is required.');
        return;
    }

    const memo = {
        id: IDcounter2 + 1,
        title: req.body.title,
        text: req.body.text
    };
    IDcounter2++;
    memos.push(memo);
    res.send(memo);
})

app.delete('/api/memos/:id', (req, res) => {
    const memo = memos.find(t => t.id === parseInt(req.params.id));
    if(!memo){
        res.status(404).send('Memo with the given ID was not found');
    }

    const index = memos.indexOf(memo);
    memos.splice(index, 1);

    res.send(memo);

})

//PORT
const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listening on port ${port}...`));