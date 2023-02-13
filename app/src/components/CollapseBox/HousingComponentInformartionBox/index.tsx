import { LocationOn } from '@styled-icons/material-outlined'
import { CollapseBox, ATCInput } from '../../../components'
import { Line, Container, LabelInputWrapper } from '../CollapseBox.style'
import InputWithLabel from '../../InputWithLabel'
import SecondaryLabelInput from '../../SecondaryLabelInput'
import { HouseComponentBoxProps } from './model'
import { ProjectStore } from '../../../store/mobx'

const HousingComponentInformationBox = (props: HouseComponentBoxProps) => {
  const { data, verbose, setFocus } = props
  const { updateProject, selectedProject } = ProjectStore
  const {
    housing_component_information_affordable_adding,
    housing_component_information_affordable_demolished,
    housing_component_information_affordable_existing,
    housing_component_information_affordable_total,
    housing_component_information_market_rate_adding,
    housing_component_information_market_rate_demolished,
    housing_component_information_market_rate_existing,
    housing_component_information_market_rate_total,
    housing_component_information_mixed_use_project,
    housing_component_information_residential_adding,
    housing_component_information_residential_demolished,
    housing_component_information_residential_existing,
    housing_component_information_residential_total
  } = data

  const numberOfResdentialFlag =
    housing_component_information_residential_total.selected ||
    housing_component_information_residential_existing.selected ||
    housing_component_information_residential_demolished.selected ||
    housing_component_information_residential_adding.selected

  const numberOfAffordableUnitsFlag =
    housing_component_information_affordable_adding.selected ||
    housing_component_information_affordable_demolished.selected ||
    housing_component_information_affordable_existing.selected ||
    housing_component_information_affordable_total.selected

  const numberOfMixedRateUnits =
    housing_component_information_market_rate_adding.selected ||
    housing_component_information_market_rate_demolished.selected ||
    housing_component_information_market_rate_existing.selected ||
    housing_component_information_market_rate_total.selected
  return (
    <CollapseBox
      title="Housing Component Information"
      TitleIcon={LocationOn}
      fixOpen={true}
    >
      <Container>
        {numberOfResdentialFlag && (
          <Line>
            <InputWithLabel
              customStyle={{ fontSize: 11 }}
              title={'Number of residential Units:'}
            >
              <LabelInputWrapper>
                {housing_component_information_residential_existing?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_residential_existing: {
                          ...selectedProject.housing_component_information_residential_existing,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_residential_existing'
                        )
                    }}
                    placeholder={''}
                    input={
                      housing_component_information_residential_existing.value
                    }
                    style={{ fontSize: 12, height: 32 }}
                    header={'Existing'}
                  />
                )}
                {housing_component_information_residential_demolished?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_residential_demolished: {
                          ...selectedProject.housing_component_information_residential_demolished,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_residential_demolished'
                        )
                    }}
                    input={
                      housing_component_information_residential_demolished.value
                    }
                    header={'DEMOLISH'}
                  />
                )}
                {housing_component_information_residential_adding?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_residential_adding: {
                          ...selectedProject.housing_component_information_residential_adding,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_residential_adding'
                        )
                    }}
                    input={
                      housing_component_information_residential_adding.value
                    }
                    style={{ fontSize: 12, height: 32 }}
                    header={'ADDING'}
                  />
                )}

                {housing_component_information_residential_total?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_residential_total: {
                          ...selectedProject.housing_component_information_residential_total,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_residential_total'
                        )
                    }}
                    input={
                      housing_component_information_residential_total.value
                    }
                    header={'TOTAL'}
                    style={{ fontSize: 12, height: 32 }}
                  />
                )}
              </LabelInputWrapper>
            </InputWithLabel>
          </Line>
        )}
        {numberOfAffordableUnitsFlag && (
          <Line>
            <InputWithLabel
              customStyle={{ fontSize: 11 }}
              title={'Number of Affordable Units:'}
            >
              <LabelInputWrapper>
                {housing_component_information_affordable_existing?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_affordable_existing: {
                          ...selectedProject.housing_component_information_affordable_existing,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_affordable_existing'
                        )
                    }}
                    input={
                      housing_component_information_affordable_existing.value
                    }
                    header={'Existing'}
                    style={{ fontSize: 12, height: 32 }}
                  />
                )}
                {housing_component_information_affordable_demolished?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_affordable_demolished: {
                          ...selectedProject.housing_component_information_affordable_demolished,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_affordable_demolished'
                        )
                    }}
                    input={
                      housing_component_information_affordable_demolished.value
                    }
                    header={'DEMOLISH'}
                    style={{ fontSize: 12, height: 32 }}
                  />
                )}
                {housing_component_information_affordable_adding?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_affordable_adding: {
                          ...selectedProject.housing_component_information_affordable_adding,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_affordable_adding'
                        )
                    }}
                    input={
                      housing_component_information_affordable_adding.value
                    }
                    header={'ADDING'}
                    style={{ fontSize: 12, height: 32 }}
                  />
                )}
                {housing_component_information_affordable_total?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_affordable_total: {
                          ...selectedProject.housing_component_information_affordable_total,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_affordable_total'
                        )
                    }}
                    input={housing_component_information_affordable_total.value}
                    header={'TOTAL'}
                    style={{ fontSize: 12, height: 32 }}
                  />
                )}
              </LabelInputWrapper>
            </InputWithLabel>
          </Line>
        )}
        {numberOfMixedRateUnits && (
          <Line>
            <InputWithLabel
              customStyle={{ fontSize: 11 }}
              title={'Number of Market Rate Units:'}
            >
              <LabelInputWrapper>
                {housing_component_information_market_rate_existing?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_market_rate_existing: {
                          ...selectedProject.housing_component_information_market_rate_existing,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_market_rate_existing'
                        )
                    }}
                    input={
                      housing_component_information_market_rate_existing.value
                    }
                    header={'Existing'}
                    style={{ fontSize: 12, height: 32 }}
                  />
                )}
                {housing_component_information_market_rate_demolished?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_market_rate_demolished: {
                          ...selectedProject.housing_component_information_market_rate_demolished,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_market_rate_demolished'
                        )
                    }}
                    input={
                      housing_component_information_market_rate_demolished.value
                    }
                    header={'DEMOLISH'}
                    style={{ fontSize: 12, height: 32 }}
                  />
                )}
                {housing_component_information_market_rate_adding?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_market_rate_adding: {
                          ...selectedProject.housing_component_information_market_rate_adding,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_market_rate_adding'
                        )
                    }}
                    input={
                      housing_component_information_market_rate_adding.value
                    }
                    header={'ADDING'}
                    style={{ fontSize: 12, height: 32 }}
                  />
                )}
                {housing_component_information_market_rate_total?.selected && (
                  <SecondaryLabelInput
                    onChange={async (input) =>
                      await updateProject({
                        housing_component_information_market_rate_total: {
                          ...selectedProject.housing_component_information_market_rate_total,
                          text: input
                        }
                      })
                    }
                    onFocus={() => {
                      verbose &&
                        setFocus(
                          'housing_component_information_market_rate_total'
                        )
                    }}
                    input={
                      housing_component_information_market_rate_total.value
                    }
                    header={'TOTAL'}
                    style={{ fontSize: 12, height: 32 }}
                  />
                )}
              </LabelInputWrapper>
            </InputWithLabel>
          </Line>
        )}

        {housing_component_information_mixed_use_project?.selected && (
          <Line>
            <InputWithLabel
              customStyle={{ fontSize: 11 }}
              title={'Mixed Use Projects, Amount of Non-Residential Floor Area'}
            >
              <ATCInput
                onChange={async (input) =>
                  await updateProject({
                    housing_component_information_mixed_use_project: {
                      ...selectedProject.housing_component_information_mixed_use_project,
                      text: input
                    }
                  })
                }
                onFocus={() => {
                  verbose &&
                    setFocus('housing_component_information_mixed_use_project')
                }}
                placeholder={'Type a description'}
                style={{ fontSize: 12, height: 32 }}
                input={housing_component_information_mixed_use_project.value}
              />
            </InputWithLabel>
          </Line>
        )}
      </Container>
    </CollapseBox>
  )
}

export default HousingComponentInformationBox
