/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"









ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"







ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"










ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"









ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/


const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
  ];
  let arr=[]
  let res=cart.filter(cartObj=>(cartObj.inStock==true))
  let res1=cart.map(cartObj=>arr.push({name:cartObj.name, totalPrice:cartObj.price}))
  let res2=cart.find(cartObj=>{
    if(cartObj.name=='Mouse')
    {
        return cartObj
    }
}
)
let res3=cart.findIndex(cartObj=>cartObj.name==='Keyboard')
let res4=cart.reduce((acc,cartObj)=>acc+(cartObj.price*cartObj.quantity),0)
console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
//
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
let res5=students.filter(studobj=>studobj.marks>=40)
let res6=students.map(studobj=>
{
  if(studobj.marks>=90)
  {
    grade='A'
  }
  else if(studobj.marks>=75)
  {
    grade='B'
  }
  else if(studobj.marks>=60)
  {
    grade='C'
  }
  else
  {
    grade='D'
  }
  return { ...studobj, grade }; 
})
let res7=students.reduce((acc,studobj)=>acc+studobj.marks,0)
let avg=res7/students.length
let res8=students.find(studobj=>studobj.marks===92)
let res9=students.findIndex(studobj=>studobj.name==="kiran")
console.log(res5)
console.log(res6)
console.log(res7)
console.log(res8)
console.log(res9)
//

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
let res10=employees.filter(studobj=>studobj.department=="IT")
let res11=employees.map(studobj=>
  {
  netsalalry=(studobj.salary+studobj.salary*10)/100
  return {...studobj,netsalalry};
  })
let res12=employees.reduce((acc,studobj)=>acc+studobj.netsalalry,0)
let res13=employees.find(studobj=>studobj.salary===30000)
let res14=employees.findIndex(studobj=>studobj.name==="Neha")
console.log(res10)
console.log(res11)
console.log(res12)
console.log(res13)
console.log(res14)
//

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
let res15=movies.filter(mov=>mov.genre=="Sci-Fi")
let res16=movies.reduce((acc,mov)=>mov.rating+acc,0)
let avgrating=res16/movies.length
let res17=movies.find(mov=>mov.title==="Joker")
let res18=movies.findIndex(mov=>mov.title==="Avengers")
let res19=movies.map(mov=>
{
  if(mov.title=="Inception"&&mov.rating==8.8)
  {
    return "Inception (8.8)"
  }
})
console.log(res15)
console.log(res16)
console.log(res17)
console.log(res18)
console.log(res19)
//

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
let res20=transactions.filter(tran=>tran.type=="credit")
let res21=transactions.map(tran=>tran.amount)
let res22=transactions.findIndex(tran=>tran.amount===10000)
let res23=transactions.reduce((acc,tran)=>
{
  if(tran.type==="credit")
  {
    acc=acc+tran.amount
  }
  else
  {
    acc=acc-tran.amount
  }
  return acc;
},0)
let res24=transactions.find(tran=>tran.type==="debit")
console.log(res20)
console.log(res21)
console.log(res22)
console.log(res23)
console.log(res24)