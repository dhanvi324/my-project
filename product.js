const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
  ];
export function getProductById(id)
{
    let res=products.filter(obj=>obj.id===id)
    return res
}
export function getAllProducts()
{
    return products
}
export function getProductByCategory(category)
{
    let res=products.filter(obj=>obj.category===category)
    return res
}
export function searchProduct(query)
{

}
export function checkStock(productid,quantity)
{
    let res=products.filter(obj=>obj.id===productid)
    if(res.stock>=quantity)
    {
        return true
    }
    else
    {
        return false
    }
}
export function reduceStock(productid,quantity)
{
    let res=products.filter(obj=>obj.id===productid)
    res.stock=res.stock-quantity 
}