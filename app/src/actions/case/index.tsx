import API_CALL from '../api'

export const getSuggestionsForByCases = async (
  startingCharacter: string
): Promise<any> => {
  const res = await API_CALL('get', 'case/startsWith', undefined, undefined, {
    starting_character: startingCharacter
  }).catch((e) => {})

  if (res?.status !== 200) return []
  return res?.data?.caseNumbers
}

export const getCaseByCaseNumber = async (caseNbr: string): Promise<any> => {
  const res = await API_CALL('get', `cases/case/${caseNbr}`)

  const data = res.data.data[0]

  if (!data) return null
  if (!data.projectReference.projectDescriptionPresentUse) {
    data.projectReference.projectDescriptionPresentUse = {
      values: [],
      source: data.id,
      status: 'Ready'
    }
  }
  if (!data.projectReference.projectDescriptionProposedUse) {
    data.projectReference.projectDescriptionProposedUse = {
      values: [],
      source: data.id,
      status: 'Ready'
    }
  }
  return data
}

export const getAllowedValues = async (fieldName: string) => {
  const res = await API_CALL('get', `typeahead/${fieldName}`)
  return res?.data
}
