import { getProject } from './projects'
import { getEmployee } from './employees'

export const getProjectWithEmployees = async (projectId) => {
    const project = await getProject(projectId)
    const membersId = project.team.map(member => member.id)
    const employees = await getEmployee(`id=${membersId.join('&id=')}`)
    project['team'] = employees
    return project
}