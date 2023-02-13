import React, { useState, useEffect, useMemo } from 'react'
import {
  PageSection,
  DataEditor,
  MultiSelect,
  CheckBoxWithLabel,
  SourceSelect,
  StatusSelect
} from '../../components'
import TabsHeader from '../TabsHeader'
import {
  Wrapper,
  SectionWrapper,
  StyledProjectToolbar,
  HeaderLabel
} from './DocumentDataSection.style'
import type { DocumentDataSectionProps, FocusConfig } from './model'
import {
  EntitiesRelatedBox,
  HousingComponentInformationBox,
  ProjectDescriptionBox,
  ProjectLocationBox
} from '../CollapseBox'
import {
  TABS,
  TABS_ENUM,
  NON_STANDARDIZED_FIELD_KEYS_MAP,
  excludeKeys
} from '../../utils/constants'
import { Line } from '../CollapseBox/CollapseBox.style'
import { TMultiSelectOption } from '../MultiSelect/model'

const DocumentDataSection = (props: DocumentDataSectionProps) => {
  const {
    createNewProperty,
    deletePropertyFromProject,
    entities,
    projectId,
    properties,
    selectedProject,
    updateProject,
    updateProperty
  } = props
  const [firstTab] = TABS
  const [tab, setTab] = useState(firstTab)
  const [options, setOptions] = useState<TMultiSelectOption[]>([])
  const [verbose, setVerbose] = useState(false)
  const [focus, setFocus] = useState<string | FocusConfig>('')

  const formatOptionLabel = (key: string) => {
    return key[0].toUpperCase() + key.slice(1).split('_').join(' ')
  }

  useEffect(() => {
    if (selectedProject) {
      setOptions(
        Object.keys(selectedProject).reduce(
          (acc: TMultiSelectOption[], key: string) => {
            if (!excludeKeys[key]) {
              acc.push({
                id: key,
                label: formatOptionLabel(key),
                selected: true
              })
            }
            return acc
          },
          [{ id: 'all', label: 'All', selected: true }]
        )
      )
    }
  }, [selectedProject.id])

  const selectFilterItem = (input: string) => {
    let newOptions
    if (input === 'all') {
      newOptions = options.map((option: TMultiSelectOption) => {
        return { ...option, selected: !options[0].selected }
      })
      return setOptions(newOptions)
    }

    newOptions = options.map((option: TMultiSelectOption) => {
      if (option.id === input) return { ...option, selected: !option.selected }
      return option
    })

    newOptions[0].selected = newOptions.every(
      (option) => option.selected || option.id === 'all'
    )

    setOptions(newOptions)
  }
  const getGroupAndLabel = (id: string, optionLabel: string) => {
    let group = 'other'
    let label = optionLabel

    if (id.startsWith('project_description')) {
      group = 'project_description'
      label = label.slice('project_description'.length + 1)
    } else if (
      id === 'projectDescriptionPresentUse' ||
      id === 'projectDescriptionProposedUse'
    ) {
      group = 'project_description'
      label = id
    } else if (id.startsWith('housing_component_information')) {
      group = 'housing_component_information'
      label = label.slice('housing_component_information'.length + 1)
    } else if (
      id === 'project_location_legal_description' ||
      id === 'project_location_total_lot_area_sq_feet'
    ) {
      group = 'project_description'
      label = label.slice('project_location'.length + 1)
    }
    return { group, label }
  }
  const DataGenerateForBoxes: Record<string, any> = useMemo(() => {
    const projectDescriptionData: Record<
    string,
    Record<
    string,
    {
      label: string
      selected: boolean
      value: any
      status: string
      source: string
      isStandardized: boolean
    }
    >
    > = {
      project_description: {},
      housing_component_information: {},
      other: {}
    }

    for (let i = 0; i < options.length; i++) {
      const option = options[i]
      const { id, label: optionLabel, selected } = option
      if (!selectedProject.hasOwnProperty(id) || id === 'all') continue
      const { group, label } = getGroupAndLabel(id, optionLabel)
      projectDescriptionData[group][id] = {
        label,
        selected,
        value: !NON_STANDARDIZED_FIELD_KEYS_MAP[id]
          ? selectedProject[id]?.text || ''
          : selectedProject[id],
        status: selectedProject[id]?.status,
        source: selectedProject[id]?.source,
        isStandardized: !NON_STANDARDIZED_FIELD_KEYS_MAP[id]
      }
    }
    return projectDescriptionData
  }, [options, selectedProject])

  const ProjectDescriptionDataExistFlag = Object.keys(
    DataGenerateForBoxes.project_description
  ).some(
    (key: string) => DataGenerateForBoxes.project_description[key]?.selected
  )

  const houseComponentDataExistFlag = Object.keys(
    DataGenerateForBoxes.housing_component_information
  ).some(
    (key: string) =>
      DataGenerateForBoxes.housing_component_information[key]?.selected
  )

  const otherDataExistFlag = Object.keys(DataGenerateForBoxes.other).some(
    (key: string) => DataGenerateForBoxes.other[key]?.selected
  )

  const getVerboseLabel = () => {
    const label = typeof focus === 'string' ? focus : focus.key
    return `${label[0].toUpperCase() + label.slice(1).split('_').join(' ')}.`
  }

  const getSelectedId = (selectType: 'status' | 'source'): string => {
    if (typeof focus === 'string') {
      return selectedProject[focus]?.[selectType]
    }
    return selectedProject[focus.key][focus.index]?.[selectType]
  }

  const updateSelectedId = (
    id: string,
    selectType: 'status' | 'source'
  ): void => {
    if (typeof focus === 'string') {
      void updateProject({
        [focus]: {
          ...selectedProject[focus],
          [selectType]: id
        }
      })
      return
    }

    const { key, index, type } = focus
    if (type === 'array') {
      const newValue = [...selectedProject[key]]
      newValue[index][selectType] = id
      void updateProject({ [key]: newValue })
    }
  }

  return (
    <PageSection>
      <SectionWrapper>
        <TabsHeader selectTab={setTab} selectedTab={tab} />
        {tab === TABS_ENUM.PROJECT && (
          <StyledProjectToolbar>
            <HeaderLabel>Fields:</HeaderLabel>

            <Line style={{ marginTop: 3 }}>
              <MultiSelect
                options={options}
                selectFilterItem={selectFilterItem}
                wrapWidth={'600px'}
                width={'100%'}
              />

              <CheckBoxWithLabel
                label={'Verbose mode'}
                selected={verbose}
                onClick={() => setVerbose(!verbose)}
                labelStyle={{ fontSize: 11, whiteSpace: 'nowrap' }}
              />
            </Line>

            {verbose && focus && (
              <div>
                <HeaderLabel>{getVerboseLabel()}</HeaderLabel>
                <Line style={{ marginTop: 3 }}>
                  <StatusSelect
                    selectedId={getSelectedId('status')}
                    selectFilterItem={(id) => updateSelectedId(id, 'status')}
                  />
                  <SourceSelect
                    selectedId={getSelectedId('source')}
                    selectFilterItem={(id) => updateSelectedId(id, 'source')}
                  />
                </Line>
              </div>
            )}
          </StyledProjectToolbar>
        )}
        {tab === TABS_ENUM.PROJECT && (
          <Wrapper>
            {ProjectDescriptionDataExistFlag && (
              <ProjectDescriptionBox
                data={DataGenerateForBoxes.project_description}
                verbose={verbose}
                setFocus={(input: string) => setFocus(input)}
              />
            )}
            {houseComponentDataExistFlag && (
              <HousingComponentInformationBox
                data={DataGenerateForBoxes.housing_component_information}
                verbose={verbose}
                setFocus={(input: string) => setFocus(input)}
              />
            )}

            {otherDataExistFlag && (
              <DataEditor
                data={DataGenerateForBoxes.other}
                verbose={verbose}
                setFocus={(input) => setFocus(input)}
              />
            )}
          </Wrapper>
        )}
        {tab === TABS_ENUM.MEETINGS && <Wrapper>Meetings</Wrapper>}
        {tab === TABS_ENUM.PROPERTIES && (
          <Wrapper>
            <ProjectLocationBox
              projectId={projectId}
              properties={properties}
              createNewProperty={createNewProperty}
              deletePropertyFromProject={deletePropertyFromProject}
              updateProperty={updateProperty}
            />
          </Wrapper>
        )}
        {tab === TABS_ENUM.ENTITIES && (
          <Wrapper>
            <EntitiesRelatedBox
              projectId={projectId}
              entities={entities}
              updateProject={updateProject}
            />
          </Wrapper>
        )}
        {tab === TABS_ENUM.DOCUMENT && <Wrapper>Document</Wrapper>}
      </SectionWrapper>
    </PageSection>
  )
}

export default DocumentDataSection
