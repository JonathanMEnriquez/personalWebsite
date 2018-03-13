import { Schema } from 'mongoose';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public', '/dist')));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/personalBlog');
var messageSchema = new mongoose.Schema({
    email: {type: String, required: true},
    message: {type: String, required: true}
});
mongoose.model('Messages', messageSchema);
var Message = mongoose.model('Messages');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jonathancanhelp@gmail.com',
      pass: '&Password7!'
    }
  });
  

app.post('/api/message', function (req, res) {
    console.log(req.body);
    res.json({ message: "Success" });
})

app.all('*', (req, res, next)=> {
    res.sendFile(path.resolve('./public/dist/index.html'));
})

app.listen(8000, function() {
    console.log('listening on port 8000');
})