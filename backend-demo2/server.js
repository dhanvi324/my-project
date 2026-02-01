import exp from 'express'
import {userApp} from './api/userapi.js'
import { productApp } from './api/productapi.js'
import {connect} from 'mongoose'
const app=exp()

//connect to db sever
/*function connectDB(){
    connect('mongoadb://locahost:27017')
    .then(()=>console.log("connecd to db"))
    .catch(()=>console.log("error in connecting to db",err))
}*/
async function connectDB(){
    try{
    let dbres=await connect('mongodb://localhost:27017/anuragdb2')
    console.log("DB connection successfu")
    //assign port
    const port=4000
    app.listen(port,()=>console.log("server istening on port 4000"))
    }
    catch(err){
        console.log("err in db",err)
    }
}
connectDB()
app.use(exp.json())
//forward req to userApp
app.use('/user-api', userApp)
app.use('/product-api',productApp)
//error handing middeware
/*function errorHandler(err,req,res,next){
    res.json({message:"error",reason:err})
}*/
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err.message})
})
//aways put this at end of server
