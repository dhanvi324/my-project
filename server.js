//create http server
  //import express module
  import exp from 'express'
  import { userApp } from './api/userapi.js'
  import { productApp } from './api/productapi.js'
  //create server
  const app=exp()

  app.use(exp.json())
  //assign port number
  app.use('/user-api',userApp)
  app.use('/product-api',productApp)
  app.listen(3000,()=>console.log('http server listening on port 3000'))
//body passing midde ware
 //forward req to userapp when path start with /user-api
 
 //forwad req to productapp when path starts with /product-api
 
/*
//create culstolm middeware
function middleware1(req,res,next){
  console.log("middeware-1 executed")
  //res.json({message:"res from middeware"})//can make request
  next()
}
function middleware2(req,res,next){
  console.log("middeware-1 executed")
  //res.json({message:"res from middeware"})//can make request
  next()
}
//to excecute every incoming req
app.use(middleware1)
app.use(middleware2)
  //create api(req handlers - route),request made by frontend 
  //test loca data
  let users=[];
  //get req handling route(read user)

  app.get('/users',middleware2,(req,res)=>{
    //send res to client
    res.status(200).json({"message":"every user",payload:users});//after handling request responding
  })//(path,call back function) are arguments
  //post req handling route(create user)l

  app.post('/users',middleware1,(req,res)=>{
    let newuser=req.body
    //insert new user into array
    users.push(newuser);
    res.status(201).json({ message: "user created" });
    console.log("new user",newuser)
  })
  //put req handling route(update user)
  app.put('/users',(req,res)=>{
    //get user to be modified from req
    let modified=req.body
    console.log(modified)
    //find whwther the user exist in array or not
    let user=users.findIndex(obj=>obj.id===modified.id)
    //if user not found send response as user not found
    if(user==-1)
    {
       return res.status(404).json({message: "user not found"})
    }
    //if user found modify the user send response as user modified
    let deletedUsers=users.splice(user,1,modified)
    res.status(200).json({message:"user found",payload:deletedUsersl})

  })
  app.get('/users/:id',(req,res)=>{
    //read id from url parameter
    console.log(req.params)
    let userId=Number(req.params.id)//{id:100} returns obj string
    let user=users.find(obj=>obj.id===userId)
    if(!user){
      return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user",payload:user});

  })
  app.delete('/users/:id',(req,res)=>{
    let userId=Number(req.params.id)//{id:100} returns obj string
    let user=users.findIndex(obj=>obj.id===userId)
    if(user==-1)
      {
         return res.status(404).json({message: "user not found"})
      }
      //if user found modify the user send response as user modified
      let deletedUsers=users.splice(user,1)
      res.status(200).json({message:"user found",payload:deletedUsers})

  })
  //delete req handling route(delete )
  








//product api
let products=[]
app.get('/products',(req,res)=>{
  res.status(200).json({message:"product created",payload:products})
})
app.get('/products-id/:id',(req,res)=>{
  let product=products.find(obj=>obj.id===req.id)
  if(!products)
  {
    return req.json()
  }
  {
  res.status(200).json({message:"id",payload:req.params.id})
  }
})
app.get('/products-brand/:brand',(req,res)=>{
  res.status(200).json({message:"brand",payload:req.params.brand})
})
app.post('/products',(req,res)=>{
  let newproduct=req.body
  products.push(newproduct)
  res.status(202).json({message:"new product"})
  console.log("newproduct",newproduct)
})
app.put('/products/<id>',(req,res)=>{

})*/
