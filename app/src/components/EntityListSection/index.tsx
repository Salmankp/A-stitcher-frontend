import PageSection from '../PageSection'
import { Wrapper } from './EntityListSection.style'
import { AlphabetList, List } from '../'
import { TEntityListSectionProps } from './model'
import EntityItem from '../EntityItem'

const EntityListSection = (props: TEntityListSectionProps) => {
  const {
    filteredList,
    select,
    selected,
    setSelectedFilterLetter,
    selectedLetter,
    setPageNumber
  } = props

  return (
    <PageSection>
      <Wrapper>
        <AlphabetList
          select={setSelectedFilterLetter}
          selected={selectedLetter}
        />
        <div id="scrollableDiv" style ={{overflow:"auto",height:"auto",paddingBottom:'150px',    width: '100%'}}>
          <List
            select={select}
            selected={selected}
            Item={EntityItem}
            list={filteredList}
            setPageNumber={setPageNumber}
          />
        </div>
      </Wrapper>
    </PageSection>
  )
}

export default EntityListSection
