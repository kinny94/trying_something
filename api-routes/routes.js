const express = require('express');
const fs = require('fs');
const ds_description = require('./ds-description');

const router = express.Router();

const getDirectories = (path) => {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isDirectory();
    });
}   

const getFilesFromFolder = (path) => {
    return fs.readdirSync(path, (err, files) => {
        return files;
    });
} 

const getFleContent = (path) => {
    return fs.readFileSync(path, 'utf8', (err, content) => {
        return content;
    });
}

router.get('/api/cards', (req, res) => {
    const folders = getDirectories('./src/assets/programming/');
    let data = [];
    folders.forEach(element => {
        const ds_obj = new Object();
        ds_obj["name"] = element;
        ds_obj["desc"] = ds_description[element]
        data.push(ds_obj);
    });
    res.send(data);
});


router.get('/api/:topic', (req, res) => {
    const files = getFilesFromFolder(`./problems/${req.params.topic}/`)
    res.send({ data: files});
});

router.get('/api/:topic/:problem', (req, res) => {
    const path = `./problems/${req.params.topic}/${req.params.problem}.java`;
    const content = getFleContent(path);
    res.send(content);
}); 


module.exports = router;