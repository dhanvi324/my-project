import {getProductById,checkStock} from './product'
const cart=[]
export function addToCart(productid,quantity)
{
    let res=products.find(obj=>obj.id===productid)
    if(!res) return 'error'
    if(res.stock<quantity) return 'error'
    for(let x of cart)//in reurn indexs and of returns value
        {
            if(x.id===productid)
                {
                    x.needquantity+=quantity
                }
        }
            let ans={
            id: productid,
            needquantity:quantity,
            price: res.price,
            }
        cart.push(ans)
        return 'success'
}
export function removeFromCart(productid)
{
    /*let res=cart.find(obj=>obj.id===productid)   find return an object not a property dete is used to remove property
    delete cart.res*/
    cart=cart.filter(obj=>obj.id!=productid)
}
export function updateQuantity(productid,newQuantity)
{
    /*let res=products.find(obj=>obj.id===productid)
    res.stock=res.stock+newQuantity */
    let res=products.find(obj=>obj.id===productid)
    if(!res) return false
    if(res.stock<newQuantity) return false
    let res1=cart.find(obj=>obj.id===productid)
    if(!res1) return false
    else
    res1.needquantity=newQuantity
}
export function getCartItems()
{
    return cart
}
export function getCartTotal()
{
    let total;
    for(let x of cart)
    {
        total+=x.price*x.needquantity
    }
    return total
}
export function clearCart()
{
    cart.length=0
}