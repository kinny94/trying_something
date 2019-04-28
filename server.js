const express = require('express');
const path = require('path');
const request = require('request');

const app = express();
const router = express.Router();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/codebase'));

router.get('/api', (req, res) => {
  res.send({content});
}); 

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname));
});

app.listen(port, () => {
    console.log('server running on port : ' + port);
});