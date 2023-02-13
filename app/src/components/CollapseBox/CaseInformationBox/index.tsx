import { LocationOn } from '@styled-icons/material-outlined'
import React, { useState, useCallback } from 'react'
import {
  CollapseBox,
  SecondaryButton,
  ATCInput,
  CheckBoxWithLabel,
  CheckBoxLabelWithInput
} from '../../../components'
import {
  ContainerBox,
  ContainerInnerSegment,
  Line,
  Container
} from '../CollapseBox.style'
import InputWithLabel from '../../InputWithLabel'
import { PlusOutlined } from '@ant-design/icons'
import MultiSelect from '../../MultiSelect'

const CaseInformationBox = (): JSX.Element => {
  const [segments, setSegments] = useState([1])
  const ContainerBoxSegment = useCallback(() => {
    return (
      <ContainerBox>
        {segments.map((val) => (
          <ContainerInnerSegment key={val}>
            <Line>
              <InputWithLabel title={'Authorizing Code Section?'}>
                <ATCInput
                  onChange={() => {}}
                  onKeyDown={() => {}}
                  autoFocus={false}
                  placeholder={'Type a description'}
                  input={''}
                />
              </InputWithLabel>
            </Line>
            <Line>
              <InputWithLabel
                title={'Code Section from which relief is requested:'}
              >
                <ATCInput
                  onChange={() => {}}
                  onKeyDown={() => {}}
                  autoFocus={false}
                  placeholder={'Type a description'}
                  input={''}
                />
              </InputWithLabel>
            </Line>
            <Line>
              <InputWithLabel title={'Action Requested, Narrative?'}>
                <ATCInput
                  onChange={() => {}}
                  onKeyDown={() => {}}
                  autoFocus={false}
                  placeholder={'Type a description'}
                  input={''}
                />
              </InputWithLabel>
            </Line>
            <Line>
              <CheckBoxWithLabel label={'Additional Request Attached?'} />
            </Line>
            <Line>
              <CheckBoxLabelWithInput
                Checkboxlabel="Are there previous or pending cases/decisions/environmental clearances on the project site?"
                inputLabel={'List all case numbers'}
                onChange={() => {}}
                onKeyDown={() => {}}
                input={''}
                placeholder={'Type a description'}
              />
            </Line>
            <Line></Line>
          </ContainerInnerSegment>
        ))}
      </ContainerBox>
    )
  }, [segments])

  return (
    <CollapseBox title="Case Information" TitleIcon={LocationOn}>
      <Container>
        <Line>
          <CheckBoxWithLabel
            label={'Have you submitted the Planning Case Referral Form to BOE?'}
          />
        </Line>
        <Line>
          <CheckBoxWithLabel
            label={
              'Is your project required to dedicate land to the public right-of-way?'
            }
          />
        </Line>
        <Line>
          <InputWithLabel
            title={'If so, what is/are your dedication requirements?'}
          >
            <ATCInput
              onChange={() => {}}
              onKeyDown={() => {}}
              autoFocus={false}
              placeholder={'Type a description'}
              input={''}
            />
          </InputWithLabel>
        </Line>
        <Line>
          <InputWithLabel
            title={
              'If you have dedication requirements on multiple streets, please indicate?'
            }
          >
            <ATCInput
              onChange={() => {}}
              onKeyDown={() => {}}
              autoFocus={false}
              placeholder={'Type a description'}
              input={''}
            />
          </InputWithLabel>
        </Line>
        <Line>
          <CheckBoxWithLabel
            label={
              'Does the project include Multiple Approval Requests per LAMC 12.36?'
            }
          />
        </Line>
        <Line>
          <CheckBoxWithLabel
            label={'Have you submitted the Planning Case Referral Form to BOE?'}
          />
        </Line>
        <Line>
          <ContainerBoxSegment />
        </Line>
      </Container>
      <Line>
        <SecondaryButton
          label={'Add another'}
          icon={<PlusOutlined />}
          onClick={() => setSegments([...segments, segments.length + 1])}
        />
      </Line>
      <Line>
        <InputWithLabel title={'Case No. or Ordinance No. Selection'}>
          <MultiSelect
            options={[{ id: 'option 1', label: 'option 1', selected: false }]}
            selectFilterItem={(id) => {}}
            wrapWidth={'100%'}
            width={'100%'}
            placeholder={'Select all that apply'}
          />
        </InputWithLabel>
      </Line>
      <Line>
        <InputWithLabel
          title={
            'If you have dedication requirements on multiple streets, please indicate?'
          }
        >
          <ATCInput
            onChange={() => {}}
            onKeyDown={() => {}}
            autoFocus={false}
            placeholder={'Type a description'}
            input={''}
          />
        </InputWithLabel>
      </Line>
    </CollapseBox>
  )
}

export default CaseInformationBox
