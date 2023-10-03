const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const connectDB = require("./db/connect");
const schema = require("./models/vikasPortSch");
// Json data 
const portfjson = require("./VikasPortSchema.json");
// const jobDescJson = require("./jobdec.json");
const start =async ()=>{
    try{
        await  connectDB(process.env.MONGODB_URL);
        await schema.create(portfjson);
        console.log("succ")
        
    }catch(error){
        console.log(error)
    }
}
start();