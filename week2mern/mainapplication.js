import {addTask,getAllTask,completeTask} from './task.js'
addTask('competeAssignment','high','2026-01-27')
addTask('returnBook','medium','2026-01-30')
console.log(getAllTask())
completeTask(1)
console.log(getAllTask())
