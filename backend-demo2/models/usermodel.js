import { Schema,model } from "mongoose";
//create user schema
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"min ength shoud be 4"],
        maxLength:[6,"max ength exceeded"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    age:{
        type:Number,
        required:[true,"age is required"],
        min:[18,"age should be above 18"],
        max:[25,"age shouf be less than 25"]
    }
},{
    strict:"throw",//for new feid 
    timestamps:true//it will attach two timestamps one is created and updated
});
//create user mode with schema
export const UserModel=model("user",userSchema)//users plural ,if child then it lis children mongoose will pluralise


