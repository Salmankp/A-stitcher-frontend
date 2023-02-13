export interface EntitiesRelatedBoxProps {
  entities: any[]
  projectId: string
  updateProject: (payload: updateProjectinput) => Promise<void>
}
