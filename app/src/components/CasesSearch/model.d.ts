export interface TATCsearchSprops {
  visible: boolean
  loading: boolean
  setVisibleSuggestions?: React.Dispatch<React.SetStateAction<boolean>>
  suggestions?: any
  getCasesSuggestions: (...args: any) => void
  getCaseByCaseNumber: (input: string) => void
  closeSuggest: () => void
}
