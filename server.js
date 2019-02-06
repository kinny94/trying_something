const express = require('express');
const path = require('path');
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/codebase'));

app.get('/api/files', (req, res) => {
  res.send({data: 'Hello'});
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname));
});

app.listen(port, () => {
    console.log('server running on port : ' + port);
});
