const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
  ];
export function getProductById(id)
{
    let res=products.find(obj=>obj.id===id)
    return res
}
export function getAllProducts()
{
    return products
}
export function getProductsByCategory(category)
{
    let res=products.filter(obj=>obj.category===category)
    return res
}
export function searchProduct(query)
{
    return products.filter(obj=>obj.name.toLowerCase()===query.toLowerCase())
}
export function checkStock(productid,quantity)
{
    let res=products.find(obj=>obj.id===productid)
    /*if(res.stock>=quantity) if res is undefined it will throw error
    {
        return true
    }
    else
    {
        return false
    }*/
   if(!res){//undefined means false !res means true
    return false
   }
   else{
    return res.stock>=quantity
   }
}
export function reduceStock(productid,quantity)
{
    let res=products.find(obj=>obj.id===productid)
    if(!res) return false
    if(res.stock<quantity) return false
    res.stock=res.stock-quantity 
    return true
}