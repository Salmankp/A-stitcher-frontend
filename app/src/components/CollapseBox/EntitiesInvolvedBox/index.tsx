import {
  ContainerBox,
  ContainerInnerSegment,
  Line,
  Container
} from '../CollapseBox.style'
import { useCallback, useState, useEffect } from 'react'
import {
  CollapseBox,
  SecondaryLabelInput,
  SecondaryButton,
  Select
} from '../../../components'
import { PlusOutlined } from '@ant-design/icons'
import { EntitiesInvolvedIcon } from '../../../assets/icons'
import { entitiesFilters } from '../../../utils/constants'
import { EntitiesRelatedBoxProps } from './model'
import PrimaryButton from '../../PrimaryButton'
import { DeleteIcon } from '../../DeleteIcon/DeleteIcon.style'
import { v4 as uuidv4 } from 'uuid'
import { ProjectStore } from '../../../store/mobx'

const EntitiesRelatedBox = (props: EntitiesRelatedBoxProps) => {
  const { entities } = props
  const { deleteEntityFromProject, updateEntity, createNewEntity } =
    ProjectStore
  const [entityArray, setEntityArray] = useState(entities)

  useEffect(() => {
    setEntityArray(entities)
  }, [entities])

  const categoryOptions = useCallback(() => {
    const filters = entitiesFilters
    if (filters.all) delete filters.all
    return Object.keys(filters).map((key) => {
      return { id: key, label: filters[key].label }
    })
  }, [])()

  // const handleChange = (payload: any) => {
  //   const newEntities = entityArray.map((entity) => {
  //     if (entity.id === payload.id) return { ...entity, ...payload }
  //     return entity
  //   })
  //
  //   setEntityArray(newEntities)
  // }

  const deleteEntity = (entity: any) => {
    if (entity.non_submitted) {
      return setEntityArray(
        entities.filter((elem: any) => elem.id !== entity.id)
      )
    }

    return deleteEntityFromProject(entity.id)
  }

  const addEntity = () => {
    const newEntities = [
      ...entityArray,
      {
        id: uuidv4(),
        name: 'New Entity',
        zip_code: '',
        address: '',
        companyFirm: '',
        city: '',
        email: 'email@emailexample.com',
        category: entitiesFilters.applicant.label,
        non_submitted: true
      }
    ]
    setEntityArray(newEntities)
  }

  const createNewEntityHandler = (entity: any) => {
    delete entity.non_submitted
    void createNewEntity(entity)
  }

  const handleChangeInEntities = (payload: any) => {
    if (payload.non_submitted) {
      const newEntities = entityArray.map((property: any) => {
        if (property.id === payload.id) return { ...property, ...payload }
        return property
      })

      return setEntityArray(newEntities)
    }

    void updateEntity(payload)
  }

  return (
    <CollapseBox
      fixOpen={true}
      title="Entities Related"
      TitleIcon={EntitiesInvolvedIcon}
    >
      <Container>
        {entityArray.map((entity) => {
          return (
            <Line key={entity.id}>
              <ContainerBox>
                <Line>
                  <Select
                    key={entity.id + 'category'}
                    selectFilterItem={(input) =>
                      handleChangeInEntities({
                        ...entity,
                        category: input
                      })
                    }
                    options={categoryOptions}
                    defaultTitle={'Select Category'}
                    selectedId={
                      typeof entity?.category === 'string' &&
                      entity.category.toLowerCase()
                    }
                    headerWidth={'133px'}
                    width={'133px'}
                  />
                  <DeleteIcon
                    onClick={() =>
                      confirm('Are you sure you want to delete the entity from the project?') &&
                      deleteEntity(entity)
                    }
                  />
                </Line>
                <ContainerInnerSegment>
                  <Line>
                    <SecondaryLabelInput
                      key={entity.id + 'name'}
                      input={entity.name || ''}
                      header={'name'}
                      onChange={(input) =>
                        handleChangeInEntities({
                          ...entity,
                          name: input
                        })
                      }
                    />
                  </Line>
                  <Line>
                    <SecondaryLabelInput
                      key={entity.id + 'companyFirm'}
                      input={entity.companyFirm || ''}
                      header={'firm'}
                      onChange={(input) =>
                        handleChangeInEntities({
                          ...entity,
                          companyFirm: input
                        })
                      }
                    />
                  </Line>
                  <Line>
                    <SecondaryLabelInput
                      key={entity.id + 'address'}
                      input={entity.address || ''}
                      header={'address'}
                      onChange={(input) =>
                        handleChangeInEntities({
                          ...entity,
                          address: input
                        })
                      }
                    />
                  </Line>
                  <Line>
                    <SecondaryLabelInput
                      key={entity.id + 'city'}
                      input={entity.city || ''}
                      header={'city'}
                      onChange={(input) =>
                        handleChangeInEntities({
                          ...entity,
                          city: input
                        })
                      }
                    />
                  </Line>
                  <Line>
                    <SecondaryLabelInput
                      key={entity.id + 'state'}
                      input={entity.state || ''}
                      header={'state'}
                      onChange={(input) =>
                        handleChangeInEntities({
                          ...entity,
                          state: input
                        })
                      }
                    />
                  </Line>
                  <Line>
                    <SecondaryLabelInput
                      key={entity.id + 'zipCode'}
                      input={entity.zipCode || ''}
                      header={'zip'}
                      onChange={(input) =>
                        handleChangeInEntities({
                          ...entity,
                          zipCode: input
                        })
                      }
                    />
                  </Line>
                  <Line>
                    <SecondaryLabelInput
                      key={entity.id + 'primaryContact'}
                      input={entity.primaryContact || ''}
                      header={'telephone'}
                      onChange={(input) =>
                        handleChangeInEntities({
                          ...entity,
                          primaryContact: input
                        })
                      }
                    />
                  </Line>
                  <Line>
                    <SecondaryLabelInput
                      key={entity.id + 'email'}
                      input={entity.email || ''}
                      header={'email'}
                      onChange={(input) =>
                        handleChangeInEntities({
                          ...entity,
                          email: input
                        })
                      }
                    />
                  </Line>
                  <Line>
                    <SecondaryLabelInput
                      key={entity.id + 'unit'}
                      input={entity.unit || ''}
                      header={'Unit Space Number'}
                      onChange={(input) =>
                        handleChangeInEntities({
                          ...entity,
                          unit: input
                        })
                      }
                    />
                  </Line>

                  {entity.non_submitted && (
                    <Line>
                      <PrimaryButton
                        label={'Submit'}
                        onClick={() => createNewEntityHandler(entity)}
                      />
                    </Line>
                  )}
                </ContainerInnerSegment>
              </ContainerBox>
            </Line>
          )
        })}
        <Line>
          <SecondaryButton
            customstyle={{ marginLeft: 'auto' }}
            label={'Add another'}
            icon={<PlusOutlined />}
            onClick={() => addEntity()}
          />
        </Line>
      </Container>
    </CollapseBox>
  )
}

export default EntitiesRelatedBox
