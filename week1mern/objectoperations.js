/*Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.

Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

Tasks:
    1. Read and print the user’s name and email
    2. Add a new property lastLogin: "2026-01-01"
    3. Update role from "student" to "admin"
    4. Delete the isActive property
    5. Use Object.keys() to list all remaining fields









Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90














Assignment 3: Application Settings Controller
---------------------------------------------
Scenario : A web app stores user preferences as settings.

Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified*/




const user={
    id:101,
    name:'ravi',
    email:'ravi@gmail.com',
    role:'user',
    isActive:true
};
console.log(user.name,user.email)
user.lastLogin='2026-01-01'
user.role='admin'
delete user.isActive
console.log(Object.keys(user))
const marks={
    maths:78,
    physics:65,
    chemistry:82,
    english:55,
    getTotal:function()
    {
        let sum=0;
        for(let v in marks )
        {
            if(typeof(marks[v])=='number')
                {
                    sum=sum+marks[v]
                }
        }
        console.log(sum)
    },
    getAvg:function()
    {
        let sum=0,i=0;
        for(let v in marks )
        {
            if(typeof(marks[v])=='number')
                {
                    sum=sum+marks[v]
                    i=i+1
                }
        }
        sum=sum/i
        console.log(sum)
    },
    getHighest:function()
    {
        let max=-1
        for(let v in marks )
        {
            if(typeof(marks[v])=='number')
                {
                    if(marks[v]>max)
                    {
                        max=marks[v]
                    }
                }
        }
        console.log(max)
    }
}
marks.getTotal()
marks.getAvg()
marks.getHighest()
const settings = {
    theme: "light",
    notifications: true,
    autoSave: false,
    language: "en"
  };
  settings.theme="dark"
  settings.autoSave=true
  delete settings.notifications
  Object.freeze(settings)