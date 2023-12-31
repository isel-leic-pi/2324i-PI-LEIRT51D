
import swaggerUi from 'swagger-ui-express'
import yaml from 'yamljs'

import cors from 'cors'
import express from 'express'


import tasksApiInit from './web/api/tasks-web-api.mjs'
import taskServicesInit from './services/tasks-services.mjs'
import userServicesInit from './services/users-services.mjs'
import usersApiInit from './services/users-services.mjs'
import tasksDataInit from './data/tasks-data.mjs'
//import usersDataInit from './data/users-data.mjs'

const tasksData = tasksDataInit()
//const usersData = usersDataInit()
//const usersServices = userServicesInit(usersData)
const usersServices = userServicesInit()
const tasksServices = taskServicesInit(usersServices, tasksData)
const tasksApi = tasksApiInit(tasksServices)
const usersApi = usersApiInit(usersServices)


const PORT = 1904
const swaggerDocument = yaml.load('./docs/tasks-api.yaml')

console.log("Setting up server")
let app = express()

// Contained resources
// - Tasks: /tasks
// - Task:  /tasks/:id


app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json())



// Get All Tasks: GET /tasks

app.use(foo)

app.get('/foo', foo, fooEnd)

app.get('/tasks', foo, tasksApi.getAllTasks)

function foo(req, rsp, next) {
    console.log("Foo called")
    //rsp.end("Foo called")
    next()
}

function fooEnd(req, rsp, next) {
    console.log("FooEnd called")
    //rsp.end("Foo called")
    next()
}


// Get one Task: GET /tasks/:id
app.get('/tasks/:id', tasksApi.getTask)

// Insert Task: POST /tasks
app.post('/tasks', tasksApi.insertTask)

// Update Task: PUT /tasks/:id
app.put('/tasks/:id', tasksApi.updateTask)

// Delete Task: DELETE /tasks/:id
app.delete('/tasks/:id', tasksApi.deleteTask)


// Create User: POST /users
app.post('/users', usersApi.insertUser)


app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`))

console.log("End setting up server")
