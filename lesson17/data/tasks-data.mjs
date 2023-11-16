
import * as usersServices from './users-services.mjs'

const NUM_TASKS = 6

const TASKS = new Array(NUM_TASKS)
                .fill(0).map((v, idx) => { 
                    return { 
                        id: (idx+1), 
                        name: `Task ${idx+1}`, 
                        description: `Task ${idx+1} description`,
                        userId: (idx % 2) + 1
                     }
                })

let nextId = TASKS.length+1

export function getAllTasks(userToken) {
    const userId = usersServices.getUserId(userToken)
    console.log(userId)
    return Promise.resolve(TASKS.filter(t => t.userId == userId))
}

export function getTask(taskId, userToken) {
    const userId = usersServices.getUserId(userToken)
    const id = req.params.id 
    const task = TASKS.find(t => t.id == id)
    if(task)
        return Promise.resolve(rsp.json(task))
    
}

export function insertTask(newTask, userToken) {
    // Validate token ang get User
    const userId = usersServices.getUserId(userToken)
    
    const task = {
        id: nextId++,
        title: newTask.title,
        description: newTask.description,
        userId: userId

    }
    TASKS.push(task)
    return Promise.resolve(task)
}

export function updateTask(taskId, newTask, userToken) {
    // Validate token ang get User
    const userId = usersServices.getUserId(userToken)
    
    const task = TASKS.find(t => t.id == taskId)
    
    task.title = newTask.title
    task.description = newTask.description

    TASKS.push(task)
    return Promise.resolve(task)
}

export function deleteTask(req, rsp) {
    const id = req.params.id
    const taskIdx = TASKS.findIndex(t => t.id == id)
    if(taskIdx != -1) {
        TASKS.splice(taskIdx,1)
        return rsp.json(`Task with id ${id} deleted`)
    }
    rsp.status(404).json(`Task with id ${id} not found`)
}


