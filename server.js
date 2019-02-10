const express = require('express');
const path = require('path');
const fs = require('fs')
const ds_description = require('./api-routes/ds-description');

const homeRoutes = require('./api-routes/routes');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/codebase'));

app.use(homeRoutes);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname));
});

app.listen(port, () => {
    console.log('server running on port : ' + port);
});
