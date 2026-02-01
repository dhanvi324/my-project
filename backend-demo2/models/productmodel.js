import { Schema,model } from "mongoose";
const productSchema=new Schema({
    pid:{
        type:Number,
        required:[true,"product id is required"]
    },
    productname:{
        type:String,
        required:[true,"product name is required"]
    },
    cost:{
        type:Number,
        require:[true,"cost is required"],
        max:[1000,"do not exceed 1000"],
        min:[100,"not ess than 100"]
    }},{
        strict:"throw",
        timestamps:true
    })
    export const ProductModel=model("product",productSchema)