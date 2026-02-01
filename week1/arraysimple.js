/*HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;

Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message





HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:
     let price = 1299;

Tasks:
   1. If price < 500 → "Budget Course"
   2. If price between 500–1000 → "Standard Course"
   3. If price > 1000 → "Premium Course"
   4. Store label in courseTag
   5. Print the label



HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message*/





const temp = [32, 35, 28, 40, 38, 30, 42];
let res=temp.filter(element=>element>35)
let res1=temp.map(element=>(element*(9/5))+32)
let res2=temp.reduce((acc,temp)=>acc+temp)/temp.length
let res3=temp.find(temp=>temp>40)
let res4=temp.findIndex(temp=>temp==28)
console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
//
const cou= ["javascript", "react", "node", "mongodb", "express"];
let ans=cou.filter(element=>element.length>5)
let ans1=cou.map(element=>element.toUpperCase())
let ans2=cou.reduce((acc,cou)=>acc.toUpperCase()+' | '+cou.toUpperCase())
let ans3=cou.find(cou=>cou==="react")
let ans4=cou.findIndex(cou=>cou=="node")
console.log(ans)
console.log(ans1)
console.log(ans2)
console.log(ans3)
console.log(ans4)
//
const mar = [78, 92, 35, 88, 40, 67];
let a=mar.filter(mar=>mar>=40)
let a1=mar.map(mar=>mar+5)
let a2=mar.reduce((acc,mar)=>acc>mar?acc:mar)
let a3=mar.find(mar=>mar<40)
let a4=mar.findIndex(mar=>mar==92)
console.log(a)
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
