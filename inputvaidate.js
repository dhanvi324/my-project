export function validateTitle(title)
{
    if(title.length>=3)
    {
        return true
    }
    else
    {
        return false
    }
}
export function validatePriority(priority)
{
    if(priority=='low'||priority=='medium'||priority=='high')
    {
        return true
    }
    else
    {
        return false
    }
}
export function validdate(date)
{
    let [year,month,day]=date.split('-').map(Number)
    let due=new Date(year,month-1,day)
    let today=new Date()
    return due>today
}