const express= require('express');
const app=express();
const userRoutes = require('./routes/user')

require('dotenv').config();
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true, 
  useCreateIndex: true
})
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});



app.use('/api', userRoutes);

const port=process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});