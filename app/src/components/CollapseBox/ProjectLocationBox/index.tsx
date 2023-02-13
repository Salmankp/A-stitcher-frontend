import { LocationOn } from '@styled-icons/material-outlined'
import {
  ContainerBox,
  ContainerInnerSegment,
  Line,
  Container
} from '../CollapseBox.style'
import React, { useEffect, useState } from 'react'
import {
  CollapseBox,
  InputWithLabel,
  SecondaryButton,
  ATCInput,
  PrimaryButton
} from '../../../components'
import { PlusOutlined } from '@ant-design/icons'
import { ProjectLocationBoxProps } from './model'
import { v4 as uuidv4 } from 'uuid'
import { DeleteIcon } from '../../DeleteIcon/DeleteIcon.style'

const ProjectLocationBox = (props: ProjectLocationBoxProps) => {
  const {
    properties,
    createNewProperty,
    deletePropertyFromProject,
    updateProperty
  } = props

  const [propertyArray, setPropertyArray] = useState(properties)

  useEffect(() => {
    setPropertyArray(properties)
  }, [properties])

  const handleChangeInProperties = (payload: any) => {
    if (payload.non_submitted) {
      const newProperties = propertyArray.map((property: any) => {
        if (property.id === payload.id) return { ...property, ...payload }
        return property
      })

      return setPropertyArray(newProperties)
    }

    updateProperty(payload)
  }

  const addProperty = () => {
    const newProperties = [
      ...propertyArray,
      {
        id: uuidv4(),
        addressTxt: 'New Entity',
        assrPrclNbr: '',
        unitNbr: '',
        non_submitted: true
      }
    ]
    setPropertyArray(newProperties)
  }

  const deletePropertyHandler = (property: any) => {
    if (property.non_submitted) {
      return setPropertyArray(
        properties.filter((elem: any) => elem.id !== property.id)
      )
    }

    return deletePropertyFromProject(property.id)
  }

  const createNewPropertyHandler = (property: any) => {
    delete property.non_submitted
    createNewProperty(property)
  }

  return (
    <CollapseBox
      fixOpen={true}
      title="Properties Listed"
      TitleIcon={LocationOn}
    >
      <Container>
        {propertyArray?.length &&
          propertyArray?.map((property: any) => (
            <Line key={property.id}>
              <ContainerBox>
                <ContainerInnerSegment>
                  <Line>
                    <DeleteIcon
                      onClick={() =>
                        confirm(
                          'Are you sure you want to delete the Property?'
                        ) && deletePropertyHandler(property)
                      }
                    />
                  </Line>
                  <Line>
                    <InputWithLabel title={'Street Address'}>
                      <ATCInput
                        input={property.addressTxt}
                        onChange={(input) =>
                          handleChangeInProperties({
                            ...property,
                            addressTxt: input
                          })
                        }
                      />
                    </InputWithLabel>
                  </Line>
                  <Line>
                    <InputWithLabel title={'Assessor Parcel Number'}>
                      <ATCInput
                        input={property.assrPrclNbr}
                        onChange={(input) =>
                          handleChangeInProperties({
                            ...property,
                            assrPrclNbr: input
                          })
                        }
                      />
                    </InputWithLabel>
                    <InputWithLabel title={'Unit/Space Number '} width={'40%'}>
                      <ATCInput
                        input={property.unitNbr}
                        onChange={(input) =>
                          handleChangeInProperties({
                            ...property,
                            unitNbr: input
                          })
                        }
                      />
                    </InputWithLabel>
                  </Line>
                  {property.non_submitted && (
                    <Line>
                      <PrimaryButton
                        label={'Submit'}
                        onClick={() => createNewPropertyHandler(property)}
                      />
                    </Line>
                  )}
                </ContainerInnerSegment>
              </ContainerBox>
            </Line>
          ))}

        <Line>
          <SecondaryButton
            label={'Add another'}
            icon={<PlusOutlined />}
            onClick={() => addProperty()}
          />
        </Line>
      </Container>
    </CollapseBox>
  )
}

export default ProjectLocationBox
