import { useEffect, useState } from 'react'
import { ATCSearchS } from '..'
import { TATCsearchSprops } from './model'
import { useSearchParams } from 'react-router-dom'

const CasesSearch = (props: TATCsearchSprops) => {
  const {
    suggestions,
    getCasesSuggestions,
    visible,
    loading,
    getCaseByCaseNumber,
    closeSuggest
  } = props

  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const caseNumber = searchParams.get('case')

  useEffect(() => {
    setSearch(caseNumber || '')
    getCaseByCaseNumber(caseNumber || '')
  }, [caseNumber, getCaseByCaseNumber])

  const handleSearchChange = (input: string) => {
    setSearch(input)
    getCasesSuggestions(input)
  }

  const itemSuggestOnClick = (input: string) => {
    searchParams.set('case', input)
    setSearchParams(searchParams)
    setSearch(input)
    closeSuggest()
  }

  return (
    <ATCSearchS
      visible={visible}
      loading={loading}
      searchProps={{
        placeholder: 'Insert project Id',
        search,
        onChange: (input) => handleSearchChange(input)
      }}
      suggestions={suggestions}
      onItemClick={itemSuggestOnClick}
    />
  )
}

export default CasesSearch
