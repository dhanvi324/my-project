//asss1
//Assignment 1: Date Creation & Extraction (Beginner)
//---------------------------------------------------
//Tasks:
//     1. Create a Date object for current date & time.
//     2. Extract and display:
//                    * Year
//                  * Month (human readable)
//                  * Date
//                  * Day of week
//                  * Hours, minutes, seconds
//  3. Display the date in this format:
//                    DD-MM-YYYY HH:mm:ss
let d1=new Date(Date.now())
console.log(d1.getFullYear());
let month=d1.toLocaleString('default',{month:'long'});//default system timing
console.log(month);
console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getDay());
let ans=d1.toLocaleString('en-GB',{
    day:'2-digit',
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});
let res=ans.replace(',',' ').replaceAll('/','-');
console.log(d1.toString());
console.log(d1.toLocaleString());
console.log(res)
//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
//--------------------------------------------------------------------

 //Given:
 //     let enrollmentDeadline = new Date("2026-01-20");

//Tasks:
//  1.Check if:
//      * Today is before deadline → "Enrollment Open"
//      * Today is after deadline → "Enrollment Closed"

//  2. Validate user input date:
//      * Input: "2026-02-30"
//      * Detect whether the date is valid or invalid
let  d2= new Date("2026-01-20");
function todayenrollment(d2)
{
    let d3=new Date(Date.now());
    if(d2>d3)
    {
        console.log('enrollment open');
    }
    else{
        console.log('enrollment close');
    }
}
todayenrollment(d2);
let d4="2026-02-30";
function validdate(date)
{
    let parts=date.split("-");//string 
    let year=Number(parts[0]);
    let month=Number(parts[1]);
    let day=Number(parts[2]);
    function getDaysInMonth(year,month){
        return new Date(year,month,0).getDate();
    }
    if(year<0){
        return false;
    }
    else if(month<1||month>12)
    {
        return false;
    }
    else{
        let maxdays=getDaysInMonth(year,month);
        if(day<1||day>maxdays)
        {
            return false;
        }
    }
    return true;
}
let c=validdate(d4);
console.log(c);
//Input:
//    let dob = "2000-05-15";


//Tasks:
//    1. Calculate exact age in years
let dob = "2000-05-15"
function age(date)
{
    let parts=date.split('-');
    let year=parts[0];
    let month=parts[1]-1;
    let day=parts[2];
    let d=new Date(Date.now())
    let presentyear=d.getFullYear();
    let presentmonth=d.getMonth();
    let presentday=d.getDay();
    let res=presentyear-year;
    if(month<=presentmonth&&day<=presentday){
        return res;
    }
    return res-1;
}
console.log(age(dob));