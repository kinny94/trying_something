const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/codebase'));

const getFilesFromFolder = (path) => {
    return fs.readdirSync('./src/assets/programming/array/', (err, files) => {
        return files;
    });
} 

const getDirectories = (path) => {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }

app.get('/api/all-cards', (req, res) => {
    const folders = getDirectories('./src/assets/programming/');
    res.send({data: folders})

})

app.get('/api/files', (req, res) => {
    const files = getFilesFromFolder('./src/assets/programming/array/')
    res.send({ data: files});
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname));
});

app.listen(port, () => {
    console.log('server running on port : ' + port);
});
