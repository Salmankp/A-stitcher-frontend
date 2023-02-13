import API_CALL from '../api'

export const getProjectByCaseNumber = async (caseNbr: string): Promise<any> => {
  const res = await API_CALL('get', `projects/${caseNbr}`)

  return res?.data?.data[0] !== false ? res?.data?.data[0] : null
}

export const updateProject = async (
  projectId: string,
  projectInput: any
): Promise<any> => {
  return await API_CALL('put', `projects/${projectId}`, undefined, projectInput)
}
