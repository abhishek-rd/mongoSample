const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

//MIDDLEWARE
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);



//DB CONNECT
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true } , () => console.log('connected to DB!'));

// PORT
const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on Port ${port}`));