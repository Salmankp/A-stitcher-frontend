import API_CALL from '../api'

export const updateProperty = async (property: any): Promise<any> => {
  const id: string = property.id
  return await API_CALL('put', `property/${id}`, {}, { property })
}

export const unlinkPropertyFromProject = async (
  projectId: string,
  propertyId: string
): Promise<any> => {
  return await API_CALL(
    'post',
    `property/project/${projectId}/unlink`,
    {},
    { removeProperties: [propertyId] }
  )
}

export const insertPropertyInProject = async (
  projectId: string,
  property: any
): Promise<any> => {
  return await API_CALL(
    'post',
    `property/project/${projectId}`,
    {},
    { property }
  )
}
