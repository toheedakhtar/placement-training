const mongoose = require('mongoose');

const conncectDb = async () => {
    try{
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/tr4')
        console.log('Database is connected');
    }catch(error)
    {
        console.log(error)
    }
}

module.exports = conncectDb;