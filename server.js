const express = require('express');
const path = require('path');
const fs = require('fs')

const homeRoutes = require('./api-routes/home-routes');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/codebase'));

const getFilesFromFolder = (path) => {
    return fs.readdirSync(path, (err, files) => {
        return files;
    });
} 

app.use(homeRoutes);
app.get('/api/cards', (req, res) => {
    const folders = getDirectories('./problems/');
    res.send({data: folders})
})

app.get('/api/:topic', (req, res) => {
    const files = getFilesFromFolder(`./problems/${req.params.topic}/`)
    res.send({ data: files});
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname));
});

app.listen(port, () => {
    console.log('server running on port : ' + port);
});
