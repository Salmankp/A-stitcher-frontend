export interface TEntityListSectionProps {
  filteredList: any[]
  selected: any
  select: any
  selectedLetter: string
  setSelectedFilterLetter: (letter: string) => void,
  setPageNumber: (pageNumber?: number) => void,
}
