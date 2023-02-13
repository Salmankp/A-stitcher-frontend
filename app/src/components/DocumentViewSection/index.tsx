import { PageSection, DocumentViewBody } from '../../components'
import { DocumentDisplayWrapper, Wrapper } from './DocumentViewSection.style'
import { DocumentViewSectionProps } from './model'

const DocumentViewSection = (props: DocumentViewSectionProps) => {
  const { selectedDocument } = props

  return (
    <PageSection width="55%">
      <DocumentDisplayWrapper>
        {selectedDocument?.document?.file_location && (
          <Wrapper>
            <DocumentViewBody
              file_location={selectedDocument?.document?.file_location}
            />
          </Wrapper>
        )}
      </DocumentDisplayWrapper>
    </PageSection>
  )
}

export default DocumentViewSection
