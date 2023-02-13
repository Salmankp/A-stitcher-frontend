import { LocationOn } from '@styled-icons/material-outlined'
import { Line, Container } from '../CollapseBox.style'
import {
  CollapseBox,
  ATCInput,
  CheckBoxWithLabel,
  MultipleSelectChip
} from '../../../components'
import InputWithLabel from '../../InputWithLabel'
import ATCTextArea from '../../ATCTextArea'
import { ProjectDescriptionBoxProps } from './model'
import { ProjectStore } from '../../../store/mobx'
import React from 'react'

const ProjectDescriptionBox = (props: ProjectDescriptionBoxProps) => {
  const { data, verbose, setFocus } = props
  const { updateProject, selectedProject } = ProjectStore
  const {
    project_description_addition_information_attached,
    project_description_details,
    projectDescriptionPresentUse,
    project_description_project_name,
    projectDescriptionProposedUse,
    project_location_legal_description,
    project_location_total_lot_area_sq_feet
  } = data

  const legalFlag =
    project_location_legal_description?.selected ||
    project_location_total_lot_area_sq_feet?.selected

  return (
    <CollapseBox
      fixOpen={true}
      title="Project Description"
      TitleIcon={LocationOn}
    >
      <Container>
        {legalFlag && (
          <Line>
            {project_location_legal_description?.selected && (
              <InputWithLabel
                title={'Legal Description'}
                customStyle={{ fontSize: 11 }}
              >
                <ATCInput
                  placeholder={'Type a description'}
                  onFocus={() => {
                    verbose && setFocus('project_location_legal_description')
                  }}
                  input={project_location_legal_description.value}
                  onChange={(input) => {
                    updateProject({
                      project_location_legal_description: {
                        ...selectedProject.project_location_legal_description,
                        text: input
                      }
                    })
                  }}
                  style={{ fontSize: 12, height: 32 }}
                />
              </InputWithLabel>
            )}

            {project_location_total_lot_area_sq_feet?.selected && (
              <InputWithLabel
                customStyle={{ fontSize: 11 }}
                title={'Total Lot Area'}
                width={'40%'}
              >
                <ATCInput
                  placeholder={'Type Lot Area'}
                  input={project_location_total_lot_area_sq_feet.value}
                  onFocus={() => {
                    verbose &&
                      setFocus('project_location_total_lot_area_sq_feet')
                  }}
                  onChange={(input) => {
                    updateProject({
                      project_location_total_lot_area_sq_feet: {
                        ...selectedProject.project_location_total_lot_area_sq_feet,
                        text: input
                      }
                    })
                  }}
                  style={{ fontSize: 12, height: 32 }}
                />
              </InputWithLabel>
            )}
          </Line>
        )}
        {projectDescriptionProposedUse?.selected && (
          <Line
            key={'projectDescriptionProposedUse'}
            onClick={() => {
              verbose && setFocus('projectDescriptionProposedUse')
            }}
          >
            <MultipleSelectChip
              propKey={'projectDescriptionProposedUse'}
              typeAheadName="project.presentUse" // TODO: Added the same values for the projectDescriptionProposedUse, need to get back to this for better experience.
              // typeAheadName="project.proposedUse"
              inputMeta={projectDescriptionProposedUse}
              verbose
              setFocus={setFocus}
            />
          </Line>
        )}
        {projectDescriptionPresentUse?.selected && (
          <Line
            key={'projectDescriptionPresentUse'}
            onClick={() => {
              verbose && setFocus('projectDescriptionPresentUse')
            }}
          >
            <MultipleSelectChip
              propKey={'projectDescriptionPresentUse'}
              typeAheadName="project.presentUse"
              inputMeta={projectDescriptionPresentUse}
              verbose
              setFocus={setFocus}
            />
          </Line>
        )}
        {project_description_project_name?.selected && (
          <Line>
            <InputWithLabel
              customStyle={{ fontSize: 11 }}
              title={'Project Name'}
            >
              <ATCInput
                onChange={(input) => {
                  updateProject({
                    project_description_project_name: {
                      ...selectedProject.project_description_project_name,
                      text: input
                    }
                  })
                }}
                onFocus={() => {
                  verbose && setFocus('project_description_project_name')
                }}
                placeholder={'Enter Project Name'}
                input={project_description_project_name.value}
                style={{ fontSize: 12, height: 32 }}
              />
            </InputWithLabel>
          </Line>
        )}
        {project_description_details?.selected && (
          <Line>
            <InputWithLabel
              customStyle={{ fontSize: 11 }}
              title={'Project Description'}
            >
              <ATCTextArea
                onChange={(input) => {
                  updateProject({
                    project_description_details: {
                      ...selectedProject.project_description_details,
                      text: input
                    }
                  })
                }}
                onFocus={() => {
                  verbose && setFocus('project_description_details')
                }}
                style={{ fontSize: 12, height: 66 }}
                placeholder={'Enter Project Description'}
                input={project_description_details.value}
              />
            </InputWithLabel>
          </Line>
        )}

        {project_description_addition_information_attached?.selected && (
          <Line
            onClick={() => {
              verbose &&
                setFocus('project_description_addition_information_attached')
            }}
          >
            <CheckBoxWithLabel
              label={'Is Additional Info. Attached?'}
              selected={project_description_addition_information_attached.value}
              onClick={async () =>
                await updateProject({
                  project_description_addition_information_attached: {
                    ...selectedProject.project_description_addition_information_attached,
                    text: !project_description_addition_information_attached.value
                  }
                })
              }
              labelStyle={{ fontSize: 11 }}
            />
          </Line>
        )}
      </Container>
    </CollapseBox>
  )
}

export default ProjectDescriptionBox
