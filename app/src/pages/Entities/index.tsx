import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import {
  EntitiesToolbar,
  EntityDisplaySection,
  EntityListSection,
  Page
} from '../../components'

import { PageBody } from './Entities.style'
import { TEntitiesPageProps } from './model'

const Entities = observer((props: TEntitiesPageProps) => {
  const { entitiesStore } = props
  const {
    filteredOptions,
    selectEntityFilterItem,
    getEntities,
    filteredList,
    selectedEntity,
    selectEntity,
    search,
    setSearch,
    selectedFilterLetter,
    setSelectedFilterLetter,
    setPageNumber
  } = entitiesStore

  useEffect(() => {
    void getEntities()
  }, [])

  return (
    <Page>
      <EntitiesToolbar
        filteredOptions={filteredOptions}
        selectEntityFilterItem={selectEntityFilterItem}
        search={search}
        setSearch={setSearch}
      />
      <PageBody>
        <EntityListSection
          selectedLetter={selectedFilterLetter}
          setSelectedFilterLetter={setSelectedFilterLetter}
          select={selectEntity}
          selected={selectedEntity}
          filteredList={filteredList}
          setPageNumber={setPageNumber}
        />
        <EntityDisplaySection selectedEntity={selectedEntity} />
      </PageBody>
    </Page>
  )
})

export default Entities
