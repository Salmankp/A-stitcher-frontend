import { action, makeAutoObservable, observable } from 'mobx'
import { getProjectByCaseNumber, updateProject } from '../../../actions/project'
import { getDocumentById, updateDocument } from '../../../actions/document'
import { debounce, updatingActionWrapper } from '../../../utils/helpers'
import { getCaseByCaseNumber } from '../../../actions/case'
import {
  updateProperty,
  insertPropertyInProject,
  unlinkPropertyFromProject
} from '../../../actions/property'
import {
  updateEntity,
  unlinkEntityFromProject,
  insertAndCreateEntityInProject
} from '../../../actions/entity'

export class Project_Store {
  @observable
    selectedProject: any

  selectedCase: any
  searchCaseNumber: string = ''
  selectedDocument: any
  documentsList: any[] = []
  reverseDocument: any
  cachedProject: any

  constructor () {
    makeAutoObservable(this)
  }

  @action getProjectByCaseNbr = async () => {
    const res = await getProjectByCaseNumber(this.searchCaseNumber)

    if (!res) return
    this.selectedProject = res
    this.documentsList = this.selectedProject?.documents
    this.selectedDocument = await getDocumentById(this.documentsList[0]._id)
    this.reverseDocument = { ...this.selectedDocument }
    // getEntitiesCategory(); // TODO check why it's commented
  }

  updatEntityDebounce = debounce(
    async (entity: any) => await this.updateEntityHandler(entity),
    200
  )

  updatePropertyDebounce = debounce(
    async (property: any) => await this.updatePropertyHandler(property),
    200
  )

  updateProjectDebounce = debounce(
    async (projectPayload: any) =>
      await this.updateProjectHandler(projectPayload),
    200
  )

  @action getCaseByCaseNumber = async (caseNmber: string) => {
    if (caseNmber) {
      const res = await getCaseByCaseNumber(caseNmber)

      this.selectedCase = res
      this.selectedProject = res?.projectReference
      this.cachedProject = res?.projectReference
      this.documentsList = res?.projectReference?.documentReferences.sort(
        (a: any, b: any) => {
          return a.docType.localeCompare(b.docType)
        }
      )
      this.selectedDocument = await getDocumentById(this.documentsList[0]._id)
    } else {
      this.selectedCase = null
      this.selectedProject = null
      this.cachedProject = null
      this.documentsList = []
    }
  }

  getProjectByCaseNbrDebounce = debounce(
    async () => await this.getProjectByCaseNbr(),
    500
  )

  updateDocumentDebounce = debounce(
    async (document: any) => await updateDocument(document),
    500
  )

  @action setSelectedDocument = (document: any) => {
    this.selectedDocument = document
  }

  @action setSelectedProject = (project: any) => {
    this.selectedProject = project
  }

  @action setSearchCaseNumber = (searchInput: string) => {
    this.searchCaseNumber = searchInput
    if (this.searchCaseNumber.length < 6) return
    this.getProjectByCaseNbrDebounce()
  }

  @action selectDocument = async (id: string) => {
    const res = await getDocumentById(id)
    if (res) this.selectedDocument = res
  }

  @action updateDocumentMeta = async (payload: any) => {
    const cachedValue = { ...this.reverseDocument }

    const newDocument = {
      ...this.selectedDocument,
      meta: { ...this.selectedDocument.meta, ...payload }
    }

    this.setSelectedDocument(newDocument)

    const res = await updatingActionWrapper(
      () => this.setSelectedDocument(cachedValue),
      async () => await updateDocument(newDocument),
      1,
      100
    )

    if (!res) return
    this.reverseDocument = { ...this.selectedDocument }
  }

  @action updateEntityHandler = async (entityInput: any) => {
    const res = await updatingActionWrapper(
      () => this.setSelectedProject(this.cachedProject),
      async () => await updateEntity(entityInput),
      1,
      100
    )

    if (res) this.cachedProject = this.selectedProject
  }

  @action updatePropertyHandler = async (propertyInput: any) => {
    const res = await updatingActionWrapper(
      () => this.setSelectedProject(this.cachedProject),
      async () => await updateProperty(propertyInput),
      1,
      100
    )

    if (res) this.cachedProject = this.selectedProject
  }

  @action updateProjectHandler = async (projectInput: any) => {
    const res = await updatingActionWrapper(
      () => this.setSelectedProject(this.cachedProject),
      async () => await updateProject(this.selectedProject?.id, projectInput),
      1,
      100
    )

    if (res) this.cachedProject = this.selectedProject
  }

  @action updateProperty = async (propertyInput: any) => {
    const newProject = {
      ...this.selectedProject,
      propertyReferences: this.selectedProject.propertyReferences.map(
        (property: any) => {
          if (property.id === propertyInput.id) return { ...propertyInput }
          return property
        }
      )
    }

    this.setSelectedProject(newProject)

    this.updatePropertyDebounce(propertyInput)
  }

  @action updateEntity = async (entityInput: any) => {
    const newProject = {
      ...this.selectedProject,
      entityReferences: this.selectedProject.entityReferences.map(
        (entity: any) => {
          if (entity.id === entityInput.id) return { ...entityInput }
          return entity
        }
      )
    }

    this.setSelectedProject(newProject)

    this.updatEntityDebounce(entityInput)
  }

  @action createNewEntity = async (entity: any) => {
    const newProject = {
      ...this.selectedProject
    }
    newProject.entityReferences.push(entity)
    this.setSelectedProject(newProject)

    updatingActionWrapper(
      () => this.setSelectedProject(this.cachedProject),
      async () => await insertAndCreateEntityInProject(newProject.id, entity),
      1,
      100
    )
  }

  @action createNewProperty = async (property: any) => {
    const newProject = {
      ...this.selectedProject
    }
    newProject.propertyReferences.push(property)
    this.setSelectedProject(newProject)

    const res = await updatingActionWrapper(
      () => this.setSelectedProject(this.cachedProject),
      async () => await insertPropertyInProject(newProject.id, property),
      1,
      100
    )

    if (res) this.cachedProject = this.selectedProject
  }

  @action deleteEntityFromProject = async (entityId: any) => {
    const newProject = {
      ...this.selectedProject,
      entityReferences: this.selectedProject.entityReferences.filter(
        (entity: any) => entity.id !== entityId
      )
    }

    this.setSelectedProject(newProject)

    const res = await updatingActionWrapper(
      () => this.setSelectedProject(this.cachedProject),
      async () => await unlinkEntityFromProject(entityId, newProject.id),
      1,
      100
    )

    if (res) this.cachedProject = this.selectedProject
  }

  @action deletePropertyFromProject = async (propertyId: any) => {
    const newProject = {
      ...this.selectedProject,
      propertyReferences: this.selectedProject.propertyReferences.filter(
        (property: any) => property.id !== propertyId
      )
    }

    this.setSelectedProject(newProject)

    const res = await updatingActionWrapper(
      () => this.setSelectedProject(this.cachedProject),
      async () => await unlinkPropertyFromProject(newProject.id, propertyId),
      1,
      100
    )
    if (res) this.cachedProject = this.selectedProject
  }

  @action updateProject = async (payload: any) => {
    const newProject = {
      ...this.selectedProject,
      ...payload
    }

    this.setSelectedProject(newProject)
    this.updateProjectDebounce(payload)
  }
}

const ProjectStore = new Project_Store()

export default ProjectStore
