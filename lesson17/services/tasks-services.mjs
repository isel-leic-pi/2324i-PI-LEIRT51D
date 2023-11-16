
import * as usersServices from './users-services.mjs'
import * as tasksData from '../data/tasks-data.mjs'

export function getAllTasks(userToken) {
    const userId = usersServices.getUserId(userToken)
    return tasksData.getAllTasks(userId)
}

export function getTask(taskId, userToken) {
    const userId = usersServices.getUserId(userToken)
    
    
    return tasksData.getTask(taskId, userId)
    
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


