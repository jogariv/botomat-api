const response = require('./data');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
 
const app = express();
 
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
    res.json({
        message: 'Bot-O-Mat Api is up and running!'
    });
});

app.get('/robots', (req, res) => {
    res.json({
        response
    });
});
 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});