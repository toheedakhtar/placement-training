const express = require('express');

const app = express();

app.arguments(express.json());
app.use(cors());


app.listen(5000,()=>{
    console.log('Server is running on 5000');
});