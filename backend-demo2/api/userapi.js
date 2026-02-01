import exp from 'express'
import { UserModel } from '../models/usermodel.js' 
export const userApp=exp.Router()

/*userApp.get('/test',(req,res)=>{
    res.json({message:"test server"});
})*/

//user api routes
userApp.get('/users',async (req,res)=>{
    //read users from database
    let usersList=await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:usersList})
})


userApp.post('/users',async(req,res)=>{
    //create user from req
    let newUser=req.body
    console.log(newUser)
    //create new user document
    let newUserDoc=new UserModel(newUser)
    console.log(newUserDoc)
    //save in db
    await newUserDoc.save()
    //send response
    res.status(201).json({message:"user created"})
})
//read users
userApp.get('/users/:id',async(req,res)=>{
    //get objid from ur
    let objId=req.params.id
    //find user in userdatabase
    let userObj=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})

})
//update user
userApp.put('/users/:id',async(req,res)=>{
    //get objid from params
    let objId=req.params.id
    //get modified user from re
    let modifiedUser=req.body
    //make update
    /*await UserModel.updateOne({},{})
    findOne()*/
    let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new :true,runValidators:true})//validators for update
    //send response
    res.status(200).json({message:"user modified",payload:latestUser})
})

//delete user
userApp.delete('/users/:id',async(req,res)=>{
    let objId=req.params.id;
    let deletedUser=await UserModel.findByIdAndDelete(objId,{new:true})
    res.status(200).json({message:"user deleted",payload:deletedUser})
})