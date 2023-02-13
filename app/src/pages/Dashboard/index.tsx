import React, { useState } from 'react'
import { DashboardToolbar, Page, DashboardCasesTable } from '../../components'
import { TMultiSelectOption } from '../../components/MultiSelect/model'
import { PageBody } from './Dashboard.style'

const options: TMultiSelectOption[] = [
  { id: 'a', label: 'a', selected: true },
  { id: 'b', label: 'b', selected: true },
  { id: 'c', label: 'c', selected: true },
  { id: 'd', label: 'd', selected: true },
  { id: 'e', label: 'e', selected: true }
]

const Dashboard = (): JSX.Element => {
  const [filtersArray, setFiltersArray] = useState(options)

  const selectOptionItem = (id: string): void => {
    setFiltersArray(
      filtersArray.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    )
  }

  return (
    <Page>
      <DashboardToolbar options={filtersArray} selectItem={selectOptionItem} />
      <PageBody>
        <DashboardCasesTable options={filtersArray} />
      </PageBody>
    </Page>
  )
}

export default Dashboard
