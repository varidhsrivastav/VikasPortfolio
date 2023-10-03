const vikasPort = require("../models/vikasPortSch");

const allvikasPort = async(req, res)=>{
    const queryObject={};
    const vikasPortSchema = await vikasPort.find(queryObject)
    res.status(200).json({
        vikasPortSchema,
    })
};

module.exports = allvikasPort
