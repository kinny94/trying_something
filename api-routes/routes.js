const express = require('express');
const fs = require('fs');
const ds_description = require('./ds-description');

const router = express.Router();

const getDirectories = (path) => {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isDirectory();
    });
}   

const getFleContent = (path) => {
    return fs.readFileSync(path, 'utf8', (err, content) => {
        return content;
    });
}

router.get('/api/:topic/:problem', (req, res) => {
    const path = `./problems/${req.params.topic}/${req.params.problem}.java`;
    const content = getFleContent(path);
    res.send({content});
}); 

router.get('/api', (req, res) => {
    const folders = getDirectories('./problems/');
    let data = [];
    folders.forEach(element => {
        const ds_obj = new Object();
        ds_obj["name"] = element;
        ds_obj["desc"] = ds_description[element]
        data.push(ds_obj);
    });
    res.send(data);
});



module.exports = router;