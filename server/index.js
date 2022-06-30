//Express App Setup

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


//Express route handlers
app.get('/', (req, res) => { res.send('Hi');});

app.get('/message', (req, res) => {
    res.send('This is a message api!')
})

app.get('/alternative', (req, res) =>{
    res.send('alternative message')
})

app.listen(5000, err => {
    console.log('Listening');
});

