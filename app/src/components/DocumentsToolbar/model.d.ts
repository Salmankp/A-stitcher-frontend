export interface TDocumentToolbarProps {
  search: string
  setSearch: (searchInput: string) => void
  selectedDocument: any
  selectDocument: (id: string) => void
  documentsList: any[]
  selectedProject: any
  getCaseByCaseNumber: (caseNmber: string) => Promise<void>
  selectedCase: any
}

export interface DocumentOption {
  id: string
  label: string
}

export type DocumentFilters = DocumentOption[]
