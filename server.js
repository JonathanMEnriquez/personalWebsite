var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public', '/dist')));
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/personalBlog');

app.all('*', (req, res, next)=> {
    res.sendFile(path.resolve('./public/dist/index.html'));
})

app.listen(8000, function() {
    console.log('listening on port 8000');
})