import { useMemo } from 'react'
import { PrimaryButton, SecondaryButton } from '..'
import { DocumentFooterWrapper } from './DocumentDataFooter.style'
const DocumentDataFooter = () => {
  return useMemo(
    () => (
      <DocumentFooterWrapper>
        <PrimaryButton label={'Save and Next Case'} />
        <SecondaryButton label={'Save Draft'} />
      </DocumentFooterWrapper>
    ),
    []
  )
}

export default DocumentDataFooter
