import React, { useCallback } from 'react'
import { Container, Line } from './DataEditor.style'
import { DataEditorProps } from './model'
import { CheckBoxWithLabel, InputWithLabel, ATCInput } from '../../components'
import { ProjectStore } from '../../store/mobx'
import {BOOLEAN_FIELDS, NON_STANDARDIZED_FIELD_KEYS} from '../../utils/constants'
import ActionRequested from '../../components/ActionRequested'


const DataEditor = (props: DataEditorProps) => {
  const { selectedProject, updateProject } = ProjectStore
  const { data, verbose, setFocus } = props

  const ProcessDataRecursively = useCallback(
    (key: string, inputMeta: any) => {
      if (!inputMeta[key]?.selected) return

      if (key === 'action_requested') {
        return (
          <ActionRequested
            key={key}
            actions={selectedProject.action_requested}
            setFocus={(config) => verbose && setFocus(config)}
          />
        )
      }

      if (typeof inputMeta[key].value === 'boolean' || BOOLEAN_FIELDS[key]) {
        return (
          <Line
            key={key}
            onClick={() => {
              verbose && setFocus(key)
            }}
          >
            <CheckBoxWithLabel
              label={inputMeta[key].label}
              selected={inputMeta[key].value}
              onClick={async () =>
                await updateProject({
                  [key]: {
                    ...selectedProject[key],
                    text: !inputMeta[key].value
                  }
                })
              }
              labelStyle={{ fontSize: 11 }}
            />
          </Line>
        )
      }
      if (
        key === NON_STANDARDIZED_FIELD_KEYS.SUFFIX_CATEGORIES ||
        key === NON_STANDARDIZED_FIELD_KEYS.PREFIX_CATEGORIES ||
        key === NON_STANDARDIZED_FIELD_KEYS.BASE_CASES
      ) {
        return (
          <Line key={key}>
            <InputWithLabel
              customStyle={{ fontSize: 11 }}
              title={inputMeta[key].label}
            >
              <ATCInput
                onChange={async (input) =>
                  await updateProject({
                    [key]: input.split(',').map((e) => e.trim())
                  })
                }
                input={inputMeta[key].value}
                style={{ fontSize: 12, height: 32 }}
                placeholder="Please insert data here"
              />
            </InputWithLabel>
          </Line>
        )
      }
      return (
        <Line key={key}>
          <InputWithLabel
            customStyle={{ fontSize: 11 }}
            title={inputMeta[key].label}
          >
            <ATCInput
              onChange={async (input) =>
                await updateProject({
                  [key]: {
                    ...selectedProject[key],
                    text: input
                  }
                })
              }
              onFocus={() => {
                verbose && setFocus(key)
              }}
              input={inputMeta[key].value || ''}
              style={{ fontSize: 12, height: 32 }}
              placeholder="Please insert data here"
            />
          </InputWithLabel>
        </Line>
      )
    },
    [data, selectedProject, verbose]
  )

  return (
    <Container style={{ paddingBottom: '100px' }}>
      {data &&
        Object.keys(data).map((key) => {
          return ProcessDataRecursively(key, data)
        })}
    </Container>
  )
}

export default DataEditor
