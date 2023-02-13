import { Select } from '../../components'
import { StatusOptions } from '../../utils/constants'
import type { StatusSelectProps } from './model'

const options = Object.values(StatusOptions).map((value) => ({
  id: value,
  label: value
}))

const StatusSelect = (props: StatusSelectProps) => {
  const { selectFilterItem, selectedId } = props
  return (
    <Select
      options={options}
      selectFilterItem={selectFilterItem}
      selectedId={selectedId}
      defaultTitle={'Choose status'}
    />
  )
}

export default StatusSelect
