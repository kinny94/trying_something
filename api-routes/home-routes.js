const express = require('express');
const fs = require('fs');
const ds_description = require('./ds-description');

const router = express.Router();

const getDirectories = (path) => {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isDirectory();
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

module.exports = router;