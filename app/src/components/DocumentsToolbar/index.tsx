import { useEffect, useMemo, useState } from 'react'
import { SecondaryButton, MainToolbar, Select } from '../../components'
import { TDocumentToolbarProps } from './model'
import {
  Wrapper,
  StyledRefreshIcon,
  buttonStyle,
  SelectWrapper
} from './Documents.style'
import { debounce } from '../../utils/helpers'
import { getSuggestionsForByCases } from '../../actions/case'
import CasesSearch from '../CasesSearch'
import { useSearchParams } from 'react-router-dom'
import API_CALL from '../../actions/api'

const DocumentsToolbar = (props: TDocumentToolbarProps) => {
  const {
    documentsList,
    getCaseByCaseNumber,
    selectDocument,
    selectedCase,
    selectedDocument,
    selectedProject
  } = props

  const [loadingSuggestions, setLoadingSuggestions] = useState(false)
  const [visibleSuggestions, setVisibleSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [relatedCases, setRelatedCases] = useState<any[]>([])
  const [searchParams, setSearchParams] = useSearchParams()

  const options = useMemo(() => {
    return documentsList.map((document) => {
      return { id: document._id, label: document.docType || 'Unlabelled' }
    })
  }, [documentsList])

  useEffect(() => {
    if (!selectedCase) {
      return setRelatedCases([])
    }

    const cases: string[] = selectedCase?.projectReference?.caseReferences || []
    const promisesArr = cases.map(
      async (c) => await API_CALL('get', `cases/getOne/${c}`)
    )

    Promise.all(promisesArr).then((res) => {
      setRelatedCases(
        res.map(({ data }) => ({
          id: data.case.caseNbr,
          label: data.case.caseNbr || 'Unlabelled'
        }))
      )
    })
  }, [selectedCase])

  const getSuggestionsForCasesHandler = async (input: string) => {
    setVisibleSuggestions(true)
    setLoadingSuggestions(true)
    const res = await getSuggestionsForByCases(input)
    const newSuggestions = res.slice(0, 20).map((val: any) => val.caseNbr)
    setSuggestions(newSuggestions)
    setLoadingSuggestions(false)
  }

  const getCasesSuggestionsDebounce = debounce(
    getSuggestionsForCasesHandler,
    800
  )

  const closeSuggest = () => {
    setVisibleSuggestions(false)
  }

  const selectRelatedCase = (input: string) => {
    searchParams.set('case', input)
    setSearchParams(searchParams)
  }

  return (
    <MainToolbar>
      <Wrapper>
        <SecondaryButton
          icon={<StyledRefreshIcon />}
          customstyle={buttonStyle}
          // onClick={() => setSearch(search)}
        />
        <CasesSearch
          visible={visibleSuggestions}
          closeSuggest={closeSuggest}
          loading={loadingSuggestions}
          getCasesSuggestions={getCasesSuggestionsDebounce}
          suggestions={suggestions}
          getCaseByCaseNumber={getCaseByCaseNumber}
        />
        {selectedProject
          ? (
          <SelectWrapper>
            <Select
              selectFilterItem={selectRelatedCase}
              options={relatedCases}
              defaultTitle={
                relatedCases?.length > 0
                  ? 'Select Related Cases'
                  : 'No Related Cases yet'
              }
              selectedId={''}
              headerWidth={'336px'}
              width={'336px'}
            />
            {documentsList?.length > 0 && (
              <Select
                selectFilterItem={selectDocument}
                options={options}
                defaultTitle={'Select Document'}
                selectedId={selectedDocument?.document?._id}
                headerWidth={'336px'}
                width={'336px'}
              />
            )}
          </SelectWrapper>
            )
          : (
          <SelectWrapper />
            )}
      </Wrapper>
    </MainToolbar>
  )
}

export default DocumentsToolbar
