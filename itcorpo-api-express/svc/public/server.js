const express = require('express')
import { getProjectWithEmployees } from  "./api/public"
import { getProject } from "./api/projects"
const app = express()

// TODO: npmjs:yargs
const PORT = 3010

app.get('/', (req, res, next) => {
    console.log('facade')
})

app.get('/projects/:id', async (req, res, next) => {
    const projectId = req.params.id
    console.log(`received request with projectId: ${projectId}`)
    //res.send({ hello: "world" })
    const project = await getProjectWithEmployees(projectId)
    console.log(project)
    res.send(project)
    next() // podaj dalej
})

app.get('/employees/:id', (req, res, next) => {
    const employeeId = req.params.id
    next()
})

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})