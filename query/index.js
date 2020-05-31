const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes} = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts/:id/comments', (req, res) => {

});
app.post('/posts/:id/comments', async (req, res) => {

});

app.listen(4002, () => {
    console.log('Listening on 4002 query')
});

