const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

const connectDB = (url)=>{
    try{
         mongoose.connect(url,{    
            useNewUrlParser: true,
            useUnifiedTopology :true ,
        });
        console.log(`mongo database is connected!!! `)
        console.log(process.env.MONGODB_URL);

    }catch(error){
        console.error(`Error: ${error} `)
    }
};

module.exports=connectDB;