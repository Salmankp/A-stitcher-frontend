import { Select } from '../../components'
import { SourceSelectProps } from './model'
import { ProjectStore } from '../../store/mobx'
import { useCallback } from 'react'

const SourceSelect = (props: SourceSelectProps) => {
  const { selectFilterItem, selectedId } = props

  const { documentsList } = ProjectStore

  const options = useCallback(() => {
    return documentsList.map((doc) => {
      return { id: doc._id, label: doc.docType }
    })
  }, [documentsList])()

  return (
    <Select
      options={options}
      selectFilterItem={selectFilterItem}
      selectedId={selectedId}
      defaultTitle={'Source'}
    />
  )
}

export default SourceSelect
