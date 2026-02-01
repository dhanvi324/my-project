import exp from 'express'
import { ProductModel } from '../models/productmodel.js' 
export const productApp=exp.Router()

productApp.get('/products',async(req,res)=>{
    let productList=await ProductModel.find()
    console.log(productList)
    res.status(200).json({message:"product is",payload:productList})
})
productApp.post('/products',async(req,res)=>{
    let product=req.body
    let newProductDoc=new ProductModel(product)
    console.log(newProductDoc)
    await newProductDoc.save()
    res.status(201).json({message:"product created"})
})
productApp.put('/product/:id',async(req,res)=>{
    let objId=req.params.id
    let ModifyProduct=req.body
    let UpdateProduct=await ProductModel.findByIdAndUpdate(objId,{$set:{...ModifyProduct}},{new:true})
    res.status(200).json({message:"product updated",payload:UpdateProduct})
})