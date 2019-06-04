const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');



//all routes of users
const users = require('./routes/users');

const app = express();

//cors middleware
app.use(cors());

//bodyparser middleware
app.use(bodyParser.json());

app.use('/users',users);

//set static folder
app.use(express.static(path.join(__dirname,'public')));

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Welcome");
});

app.listen(port,()=>{
    console.log("server started at port 3000");
});