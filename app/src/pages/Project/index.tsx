import {
  Page,
  DocumentsToolbar,
  DocumentDataSection,
  DocumentViewSection
} from '../../components'
import { PageBody } from './Project.style'

import { observer } from 'mobx-react-lite'
import { TProjectPageProps } from './model'
import React from 'react'

const Project = observer((props: TProjectPageProps) => {
  const { projectStore } = props
  const {
    searchCaseNumber,
    setSearchCaseNumber,
    selectedProject,
    selectedDocument,
    documentsList,
    selectDocument,
    updateDocumentMeta,
    updateProject,
    getCaseByCaseNumber,
    selectedCase,
    createNewProperty,
    deletePropertyFromProject,
    updateProperty
  } = projectStore

  return (
    <Page>
      <DocumentsToolbar
        documentsList={documentsList}
        getCaseByCaseNumber={getCaseByCaseNumber}
        selectDocument={selectDocument}
        selectedCase={selectedCase}
        search={searchCaseNumber}
        setSearch={setSearchCaseNumber}
        selectedDocument={selectedDocument}
        selectedProject={selectedProject}
      />
      {selectedProject && (
        <PageBody>
          <DocumentDataSection
            createNewProperty={createNewProperty}
            deletePropertyFromProject={deletePropertyFromProject}
            entities={selectedProject.entityReferences}
            projectId={selectedProject.id}
            properties={selectedProject.propertyReferences}
            selectedProject={selectedProject}
            updateProject={updateProject}
            updateDocumentMeta={updateDocumentMeta}
            updateProperty={updateProperty}
          />
          <DocumentViewSection selectedDocument={selectedDocument} />
        </PageBody>
      )}
    </Page>
  )
})

export default Project
