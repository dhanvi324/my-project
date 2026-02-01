/*🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t*/
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",
      language: "en"
    }
  };
let userCopy={...user};
user.name='dhanvi';
user.preferences.theme='brown';
console.log(user);
console.log(userCopy);
/*🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/
const order = {
    orderId: "ORD1001",
    customer: {
      name: "Anita",
      address: {
        city: "Hyderabad",
        pincode: 500085
      }
    },
    items: [
      { product: "Laptop", price: 70000 }
    ]
  };
let orderCopy=structuredClone(order);
order.customer.address.city='nirmal';
order.items[0].price=6000;
console.log(order);
console.log(orderCopy);
