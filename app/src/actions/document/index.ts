import API_CALL from '../api'

export const getDocumentById = async (id: string): Promise<any> => {
  const res = await API_CALL('get', `documents/${id}`)
  const { data = null } = res
  return data
}

export const updateDocument = async (document: any): Promise<any> => {
  const id: string = document._id
  delete document._id

  const res = await API_CALL('put', `documents/update/${id}`, {}, { document })

  if (res?.data?.new_document !== false) {
    throw new Error('Error updating document')
  }

  return res
}
