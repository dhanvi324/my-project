import {getProductById,checkStock} from './product'
const cart=[]
export function addToCart(productid,quantity)
{
    let res=products.filter(obj=>obj.id===productid)
    let stock=res.stock-quantity
    if(stock>=0)
        {
            for(let x in cart)
            {
                if(x.productid)
                {
                    needquantity=+quantity
                }
                else{
                    let ans={
                        id: productid,
                        needquantity:quantity,
                        price: res.price,
                    }
                    return 'success'
                }
            }
        } 
    return 'error' 
}
export function removeFromCart(productid)
{
    let res=products.filter(obj=>obj.id===productid)
    delete cart.res
}
export function updateQuantity(productid,newQuantity)
{
    let res=products.filter(obj=>obj.id===productid)
    res.stock=res.stock+newQuantity   
}
export function getCartItems()
{
    return cart
}
export function getCartTotal()
{
    let ans;
    for(let x in cart)
    {
        ans+=x.price*x.needquantity
    }
    return ans
}
export function clearCart()
{
    
}