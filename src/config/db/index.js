const mongoose = require('mongoose');

async function connectDB() {
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect DB successfully');
    }
    catch(err){
        console.log('Connect DB failure');
    }
}

module.exports = { connectDB };