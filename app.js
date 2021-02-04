const express= require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const cors = require('cors');

const app=express();

const dotenv = require('dotenv');
dotenv.config()
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const braintreeRoutes = require('./routes/braintree')
const orderRoutes = require('./routes/order')



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
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', braintreeRoutes);
app.use('/api',orderRoutes);


const port=process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});