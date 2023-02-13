import MainToolbar from '../MainToolbar'
import { DashbarWrapper, PageTitle, Wrapper } from './DashboardToolbar.style'
import { ATCSearch, MultiSelect } from '../../components'
import { useState } from 'react'

const DashboardToolbar = (props: any) => {
  const { options, selectItem } = props
  const [search, setSearch] = useState('')
  return (
    <MainToolbar style={{ height: 'fit-content' }}>
      <DashbarWrapper>
        <PageTitle>Documents waiting analysis</PageTitle>
        <Wrapper>
          <ATCSearch
            placeholder="Search for a case number"
            search={search}
            onChange={setSearch}
            style={{ maxWidth: 400 }}
          />
          <MultiSelect
            selectFilterItem={selectItem}
            options={options}
            width={'200px'}
          />
        </Wrapper>
      </DashbarWrapper>
    </MainToolbar>
  )
}

export default DashboardToolbar
