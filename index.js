const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const cors = require('cors')

app.get('/',(req, res)=>{
    res.end('Hello World');
});

app.use(cors());

app.get("/list_movies",(req,res)=>{
    fs.readFile(__dirname + '/' + 
    'movies.json',(err, data)=>{
        res.end(data);
    });
});

app.listen(port, ()=>{
    console.log(`App is listening on ${port}`);
});