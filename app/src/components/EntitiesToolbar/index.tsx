import { TEntitiesToolbarProps } from './model'
import ATCSearch from '../ATCSearchInput'
import MainToolbar from '../MainToolbar'
import { Wrapper } from './EntitiesToolbar.style'
import MultiSelect from '../MultiSelect'
import { PlusOutlined } from '@ant-design/icons'
import PrimaryButton from '../PrimaryButton'
import { useCallback } from 'react'
import { TMultiSelectOption } from '../MultiSelect/model'

const EntitiesToolbar = (props: TEntitiesToolbarProps) => {
  const { filteredOptions, selectEntityFilterItem, search, setSearch } = props

  const options = useCallback(() => {
    return Object.keys(filteredOptions).reduce(
      (acc: TMultiSelectOption[], key: string) => {
        acc.push({ id: key, ...filteredOptions[key] })
        return acc
      },
      []
    )
  }, [filteredOptions])()
  return (
    <MainToolbar>
      <Wrapper>
        <MultiSelect
          selectFilterItem={selectEntityFilterItem}
          options={options}
          width={'277px'}
        />

        <ATCSearch
          placeholder={'Search for Entity'}
          search={search}
          onChange={(input) => setSearch(input)}
        />

        <PrimaryButton label={'Add a new Entity'} icon={<PlusOutlined />} />
      </Wrapper>
    </MainToolbar>
  )
}

export default EntitiesToolbar
