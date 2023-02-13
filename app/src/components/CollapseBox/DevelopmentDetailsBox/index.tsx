import { LocationOn } from '@styled-icons/material-outlined'
import { Line, Container } from '../CollapseBox.style'
import { CollapseBox, ATCInput, CheckBoxWithLabel } from '../../../components'
import InputWithLabel from '../../InputWithLabel'
import ATCTextArea from '../../ATCTextArea'

const DevelopmentDetailsBox = () => {
  return (
    <CollapseBox title="Development Details" TitleIcon={LocationOn}>
      <Container>
        <Line>
          <InputWithLabel title={'Project Name'}>
            <ATCInput
              onChange={() => {}}
              onKeyDown={() => {}}
              autoFocus={false}
              placeholder={'Enter Project Name'}
              input={
                "Camino Nuevo Charter Academy's Dalzell Lance Campus Plan Approval"
              }
            />
          </InputWithLabel>
        </Line>
        <Line>
          <InputWithLabel title={'Project Description'}>
            <ATCTextArea
              onChange={() => {}}
              onKeyDown={() => {}}
              autoFocus={false}
              style={{ height: 66 }}
              placeholder={'Enter Project Description'}
              input={
                "Establish operating conditions for the existing Athetic Field and modify the High School's pick-up/drop-off operations." +
                'No construction of physical changes or ' +
                'improvements are proposed, nor are any changes in enrollment.'
              }
            />
          </InputWithLabel>
        </Line>
        <Line>
          <CheckBoxWithLabel label={'Is Additional Info. Attached?'} />
        </Line>
      </Container>
    </CollapseBox>
  )
}

export default DevelopmentDetailsBox
