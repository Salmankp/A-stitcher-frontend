import { useCallback } from 'react'
import {
  ItemWrapper,
  LineWrapper,
  CaseLabel,
  DateLabel
} from './CaseItem.style'

const CaseItem = (props: any) => {
  const { item } = props
  const { documents, caseId, createdAt } = item

  const date = useCallback(() => {
    return new Date(createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit'
    })
  }, [createdAt])()

  return (
    <ItemWrapper>
      <LineWrapper>
        <CaseLabel>{caseId}</CaseLabel>
        <DateLabel>{date}</DateLabel>
      </LineWrapper>
      <LineWrapper>
        <CaseLabel>{`${documents?.length} documents`}</CaseLabel>
      </LineWrapper>
    </ItemWrapper>
  )
}

export default CaseItem
