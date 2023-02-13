import API_CALL from '../api'

export const getEntities = async (
  letter: string,
  pageNumber: number
): Promise<any> => {
  let url =  `entities?page_number=${pageNumber}`
  if (letter) {
    url = `${url}&&starting_character=${letter}`
  }

  const res = await API_CALL('get', url)
  return res?.data?.entities?.docs?.map((val: any) => {
    if (val?.category !== false) return { ...val, category: 'other' }
    return val
  })
}
export const getEntitiesCategory = async (): Promise<any> => {
  const res = await API_CALL('get', 'entities/getCategories')
  return res.data
}

export const updateEntity = async (entity: any): Promise<any> => {
  const { id = '' }: { id: string } = entity
  return await API_CALL('put', `entities/${id}`, {}, { entity })
}

export const unlinkEntityFromProject = async (
  entityId: string,
  projectId: string
): Promise<any> => {
  return await API_CALL(
    'post',
    `entities/${entityId}/project/${projectId}/unlink`,
    {}
  )
}

export const insertAndCreateEntityInProject = async (
  projectId: string,
  entity: any
): Promise<any> => {
  return await API_CALL(
    'post',
    `entities/project/${projectId}/entity`,
    {},
    { entity }
  )
}
