const express = require("express")
const cors = require("cors")
const connectDb = require("./config/db")
const userRoutes = require('./router/user')
const authRoutes = require('./router/auth')
const errorHandler = require('./middleware/globalErrorHandler')
const passport = require('passport')
const session = require("express-session")
require("dotenv").config();
require('./config/passport')

const app = express()

app.use(passport.session({
    secret : "your+secret_key",
    resave:false,
    saveUninitialized : false,
    cookie : { secure : false }
}));

app.use(express.json())
app.use(cors())
app.use(passport.initialize());
connectDb();

app.use('/auth', userRoutes);
app.use('/api/auth', authRoutes);
app.use(errorHandler);

app.listen(5000,()=>{
    console.log("server is running on 5000")
})