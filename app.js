const express= require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')

const app=express();
const userRoutes = require('./routes/user')

require('dotenv').config();
// import mongoose
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true 
})
.then(() => console.log('DB Connected'))
 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

app.use('/api', userRoutes);

const port=process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});