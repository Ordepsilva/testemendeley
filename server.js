const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/testmendeley'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/testmendeley/index.html'));
});

app.listen(4200);

console.log('LISTNING');