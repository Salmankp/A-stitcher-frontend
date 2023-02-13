export interface ProjectLocationBoxProps {
  projectId: string
  properties: any
  createNewProperty: (payload: any) => Promise<void>
  deletePropertyFromProject: (propertyId: string) => Promise<void>
  updateProperty: (payload: updateProjectinput) => Promise<void>
}
