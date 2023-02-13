import { LocationOn } from '@styled-icons/material-outlined'
import {
  ContainerBox,
  ContainerInnerSegment,
  Line,
  Container
} from '../CollapseBox.style'
import React, { useCallback, useState } from 'react'
import {
  CollapseBox,
  InputWithLabel,
  Select,
  ATCCheckbox
} from '../../../components'
import { DeleteOutlined } from '@ant-design/icons'
import { InputLabel, DeleteIconWrapper } from './RelatedDocuments.style'
import ATCInput from '../../ATCInput'

const options: any = [
  { id: '01', label: 'Document One' },
  { id: '02', label: 'Document Two' },
  { id: '03', label: 'Document Three' },
  { id: '04', label: 'Document Four' }
]

const RelatedDocumentsBox = () => {
  const [segments] = useState([1])
  const [inputFields, setInputFields] = useState([
    {
      id: '01',
      title: 'Specialized Requirement Form',
      input: 'Specialized Requirement Form'
    },
    {
      id: '02',
      title: 'Geographic Project Planning Referral',
      input: 'Vermont/Western Station Neighborhood Area Plan'
    },
    {
      id: '03',
      title: 'Builiding Permits and Certificates of Occupancy',
      input: 'Attached'
    }
  ])

  let InputFields = [
    {
      id: '01',
      title: 'Specialized Requirement Form',
      input: 'Specialized Requirement Form'
    },
    {
      id: '02',
      title: 'Geographic Project Planning Referral',
      input: 'Vermont/Western Station Neighborhood Area Plan'
    },
    {
      id: '03',
      title: 'Builiding Permits and Certificates of Occupancy',
      input: 'Attached'
    }
  ]

  const deleteInput = (id: any) => {
    setInputFields(inputFields.filter((input) => input.id !== id))
    InputFields = InputFields.filter((input) => input.id !== id)
  }

  const ContainerBoxSegment = useCallback(() => {
    return (
      <ContainerBox>
        {segments.map((val) => (
          <ContainerInnerSegment key={val}>
            <InputLabel>Document</InputLabel>
            <Line>
              <Select
                selectedId={undefined}
                selectFilterItem={() => undefined}
                options={options}
                defaultTitle={'Add Document'}
                headerWidth={'571px'}
                width={'571px'}
              />
            </Line>

            {InputFields.map((input) => (
              <Line key={input.id}>
                <InputWithLabel title={input.title}>
                  <ATCInput input={input.input} onChange={() => {}} />
                </InputWithLabel>

                <DeleteIconWrapper>
                  <DeleteOutlined
                    style={{ fontSize: '16px' }}
                    onClick={() => deleteInput(input.id)}
                  />
                </DeleteIconWrapper>
              </Line>
            ))}

            <Line>
              <ATCCheckbox />
              <Line>
                Recorded Covenants, affidavits or easements on this property (if
                yes, provide copy)
              </Line>
            </Line>
          </ContainerInnerSegment>
        ))}
      </ContainerBox>
    )
  }, [segments])

  return (
    <CollapseBox title="Related Documents" TitleIcon={LocationOn}>
      <Container>
        <Line>
          <ContainerBoxSegment />
        </Line>
      </Container>
    </CollapseBox>
  )
}

export default RelatedDocumentsBox
