const mongoose =require("mongoose");
const userSchema =mongoose.Schema({
    userName : {
        type:String,
        required:[true, "user name required"],
    },
    email : {
        type : String,
        required: true,
        unique: true
    },
    password :{
        type :String,
        required : [true, "password required"]
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    }
},
{
timestamps: true,
});
const user = mongoose.model("user", userSchema)
module.exports = user