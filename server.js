const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/codebase'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname));
});
    
app.get('/files', (req, res) => {
    fs.re
});

app.listen(port, () => {
    console.log('server running on port : ' + port);
});