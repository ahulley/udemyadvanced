//Main starting point of the application
const express = require('express');
const http = require('http');
//**********
//config.js will have to be put into gitignore... that house the jwt secret
//**********
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB setup
//auth/auth... the second auth is the name of the database
mongoose.connect('mongodb://localhost:27017/auth');

//App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on ', port);