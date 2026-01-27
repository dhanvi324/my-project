import {validatePriority,validateTitle,validdate} from './inputvaidate.js'
const task=[]
let id=1; 
export function addTask(title,priority,date)
{
    if(validateTitle(title)&&validatePriority(priority)&&validdate(date))
    {
        let t={
            id:id++,
            Title:title,
            Priority:priority,
            Date:date,
            completed:false
        }
        task.push(t)
        return "success"
    }
    else
    {
        return "error";
    }
} 
export function getAllTask()
{
    return task
} 
export function completeTask(id)
{
    for(let x of task)
    {
        if(x.id===id)
        {
            x.completed=true
        }
    }
}
