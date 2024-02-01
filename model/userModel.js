const mongoose =require("mongoose");
const userSchema =mongoose.Schema({
    userName : {
        type:string,
        required:[true, "user name required"],
    },
    password :{
        type :password,
        required : [true, "password requierd"]
    }
},
{
timestamps: true,
});
user = mongoose.model("user", userSchema)