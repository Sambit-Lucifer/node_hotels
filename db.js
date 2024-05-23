
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOURI, {
            // useNewURLParser : true,
            // useUnifiedTopology : true,
            // useFindAndModify : false
        });
        console.log("MongoDB Connected....");
    }catch(err){
        console.error('ERROR HAS BEEN GENERATED : ', err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
