import exp from 'express'
export const userApp=exp.Router()
let users=[];
userApp.get('/users',(req,res)=>{
    //send res to client
    res.status(200).json({"message":"every user",payload:users});//after handling request responding
  })//(path,call back function) are arguments
  //post req handling route(create user)l

  userApp.post('/users',(req,res)=>{
    let newuser=req.body
    //insert new user into array
    users.push(newuser);
    res.status(201).json({ message: "user created" });
    console.log("new user",newuser)
  })
  //put req handling route(update user)
  userApp.put('/users/:id',(req,res)=>{
    //get user to be modified from req
    let modified=req.body
    console.log(modified)
    let id=Number(req.params.id)
    //find whwther the user exist in array or not
    let user=users.findIndex(obj=>obj.id===id);
    //if user not found send response as user not found
    if(user==-1)
    {
       return res.status(404).json({message: "user not found"});
    }
    //if user found modify the user send response as user modified
    let deletedUsers=users.splice(user,1,modified)
    res.status(200).json({message:"user found and updated",payload:deletedUsers})

  })
  userApp.get('/users/:id',(req,res)=>{
    //read id from url parameter
    console.log(req.params)
    let userId=Number(req.params.id)//{id:100} returns obj string
    let user=users.find(obj=>obj.id===userId)
    if(!user){
      return res.status(404).json({message:"user not found"});
    }
    res.status(200).json({message:"user found by id"});

  })
  userApp.delete('/users/:id',(req,res)=>{
    let userId=Number(req.params.id)//{id:100} returns obj string
    let user=users.findIndex(obj=>obj.id===userId)
    if(user==-1)
      {
         return res.status(404).json({message: "user not found"})
      }
      //if user found modify the user send response as user modified
      let deletedUsers=users.splice(user,1)
      res.status(200).json({message:"user deleted"})

  })