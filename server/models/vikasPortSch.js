const mongoose = require("mongoose");

const VikasportSch = new mongoose.Schema({
    id:{
        type:String,
    },
    Introsec:
    {title: {
            type:String
        },
        description:{
            type : String,
        },}
    ,
    standFor:
        {
            StandForId:{
                type:String,
            },
            StandForDesc:{
                type:String,
            }
        }
    ,
    profileSec:
        {
            profileImage:{
                type:String
            },
            profiletitle:{
                type:String,
            },
            profileName:{
                type:String,
            },
            profiledesc:{
                type:String,
            },
        }
    ,
    ServiceSec:
        {
            ServicesId:{
                type:Number,
            },
            ServiTitle:{
                type:String,
            },
            ServDesc:{
                type: String
            }
        },
    testimonialsSec:{
        testimonialsImage:{
            type:String,
        },
        testimoals:{
            type:String,
        },
        testimoAuthor:{
            type:String,
        }
    }
});

module.exports=mongoose.model('vikasPort', VikasportSch);