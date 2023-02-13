import { action, makeAutoObservable, observable } from 'mobx'
import { entitiesFilters } from '../../../utils/constants'
import { getEntities } from '../../../actions/entity'
import { EntitiesFilter } from '../../../models/types'

export class Entities_Store {
  @observable
  entitiesList: any[] = []

  filteredOptions: EntitiesFilter = entitiesFilters
  filteredList: any[] = []
  selectedEntity: any
  selectedFilterLetter: string = ''
  search: string = ''
  pageNumber: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  @action getEntities = async () => {
    if (this.pageNumber > 0) {
      this.entitiesList = [
        ...this.entitiesList,
        ...(await getEntities(this.selectedFilterLetter, this.pageNumber))
      ]
    } else {
      this.filteredList = []
      this.entitiesList = await getEntities(
        this.selectedFilterLetter,
        this.pageNumber
      )
    }

    this.generateEntityList()
  }

  @action generateEntityList = () => {
    let list = this.entitiesList.filter(
      (entity) => this.filteredOptions[entity.category]?.selected
    )

    if (this.search.length > 0) {
      list = list.filter((entity) => {
        return (
          entity?.name.includes(this.search) ||
          entity?.address.includes(this.search) ||
          entity?.email.includes(this.search)
        )
      })
    }

    if (this.selectedFilterLetter.length > 0) {
      list = list.filter((entity) => {
        return entity?.name.startsWith(this.selectedFilterLetter)
      })
    }

    this.filteredList = list.sort((a, b) => a.name.localeCompare(b.name))
  }

  @action selectEntityFilterItem = (id: string) => {
    const temp = { ...this.filteredOptions }
    const keys = Object.keys(temp)
    if (id === 'all') {
      const selected = !temp[id].selected
      for (let i = 0; i < keys.length; i++) {
        temp[keys[i]].selected = selected
      }

      this.filteredOptions = { ...temp }
      return this.generateEntityList()
    }

    temp[id].selected = !temp[id].selected

    temp.all.selected = !!Object.keys(temp).every(
      (key) => temp[key].selected || key === 'all'
    )

    this.filteredOptions = { ...temp }

    return this.generateEntityList()
  }

  @action selectEntity = (entity: any) => {
    this.selectedEntity = { ...entity }
  }

  @action setSearch = (searchInput: string) => {
    this.search = searchInput
    this.generateEntityList()
  }

  @action setSelectedFilterLetter = (letter: string) => {
    this.selectedFilterLetter = letter
    this.pageNumber = 0
    void this.getEntities()
  }

  @action setPageNumber = (pageNumber?: number) => {
    if (pageNumber) {
      this.pageNumber = pageNumber
    } else {
      this.pageNumber = this.pageNumber + 1
    }
    void this.getEntities()
  }
}

const EntitiesStore = new Entities_Store()

export default EntitiesStore
