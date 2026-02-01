import exp from 'express'
export const productApp=exp.Router()
let products=[]
productApp.get('/products',(req,res)=>{
    res.status(200).json({message:"product created",payload:products})
  })
  productApp.get('/products-id/:id',(req,res)=>{
    let id=Number(req.params.id)
    let product=products.find(obj=>obj.id===id)
    if(!product)
    {
      return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"id",payload:product})
  })
  productApp.get('/products-brand/:brand',(req,res)=>{
    let product=products.find(obj=>obj.brand===req.params.brand)
    if(!product)
    {
      return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"brand",payload:product})
  })
  productApp.post('/products',(req,res)=>{
    let newproduct=req.body
    products.push(newproduct)
    res.status(201).json({message:"new product"})
    console.log("newproduct",newproduct)
  })
  productApp.put('/products/:id',(req,res)=>{
    let modifiy=req.body
    let id=Number(req.params.id)
    let product=products.findIndex(obj=>obj.id===id)
    if(product===-1)
    {
      return res.status(404).json({message:"product not found"})
    }
    let deletedProduct=products.splice(product,1,modifiy)
    res.status(200).json({message:"product updated"});
  })
  productApp.delete('/products/:id',(req,res)=>{
    let id=Number(req.params.id)
    let product=products.findIndex(obj=>obj.id===id)
    if(product===-1)
    {
      res.status(404).json({message:"product not found"})
    }
    let productDeleted=products.splice(product,1)
    res.status(200).json({message:"product deleted"})
  })