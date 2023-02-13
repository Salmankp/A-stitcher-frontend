export interface FocusConfig {
  index: number
  key: string
  type: string
}

export interface DocumentDataSectionProps {
  updateDocument?: (input: any) => {}
  updateDocumentMeta: (payload: any) => void
  entities: any[]
  properties: any[]
  projectId: string
  updateProject: (payload: updateProjectinput) => Promise<void>
  selectedProject: any
  createNewProperty: (payload: any) => Promise<void>
  deletePropertyFromProject: (propertyId: string) => Promise<void>
  updateProperty: (payload: updateProjectinput) => Promise<void>
}
