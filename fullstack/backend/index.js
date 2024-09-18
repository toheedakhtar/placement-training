const express = require("express");
const cors = require("cors");
const conncectDb = require('./config/db');
// const { connect } = require("mongoose");


const app = express();

app.use(express.json());
app.use(cors());

conncectDb();

app.listen(5000,()=>{
    console.log("server is running on 5000");
})