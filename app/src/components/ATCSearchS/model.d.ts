import { TATCsearchProps } from '../ATCSearchInput/model'

export interface TATCsearchSprops {
  searchProps: TATCsearchProps
  visible?: boolean
  loading?: boolean
  setVisibleSuggestions?: React.Dispatch<React.SetStateAction<boolean>>
  suggestions: string[]
  onItemClick: (input: string) => void
}

export interface ATCSuggestItemProps {
  selected?: boolean
}
