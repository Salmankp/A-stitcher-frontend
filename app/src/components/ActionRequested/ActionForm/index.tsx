import {
  ContainerBox,
  ContainerInnerSegment,
  Line
} from '../../CollapseBox/CollapseBox.style'
import { InputWithLabel, ATCInput, PrimaryButton } from '../../../components'
import { DeleteIcon } from '../../DeleteIcon/DeleteIcon.style'
import { ActionFormProps } from './model'
import ATCTextArea from '../../ATCTextArea'

const ActionForm = (props: ActionFormProps) => {
  const { action, deleteAction, handleChange, setFocus, submitNewAction } =
    props

  return (
    <Line>
      <ContainerBox>
        <ContainerInnerSegment>
          <Line>
            <DeleteIcon
              onClick={() =>
                confirm(
                  'Are you sure you want to delete the action?'
                ) && deleteAction()
              }
            />
          </Line>
          <Line>
            <InputWithLabel title="Action Requested">
              <ATCTextArea
                input={
                  action.Action_Requested_Authorizing_Action_Requested.value
                }
                onChange={(input) => {
                  const newAction = { ...action }
                  newAction.Action_Requested_Authorizing_Action_Requested.value =
                    input
                  handleChange(newAction)
                }}
                style={{ fontSize: 12, height: 66 }}

                onFocus={setFocus}
              />
            </InputWithLabel>
          </Line>
          <Line>
            <InputWithLabel title="Code Section Relief">
              <ATCInput
                input={
                  action.Action_Requested_Authorizing_Code_Section_Relief.value
                }
                onChange={(input) => {
                  const newAction = { ...action }
                  newAction.Action_Requested_Authorizing_Code_Section_Relief.value =
                    input
                  handleChange(newAction)
                }}
                onFocus={setFocus}
              />
            </InputWithLabel>
            <InputWithLabel title="Section">
              <ATCInput
                input={action.Action_Requested_Authorizing_Section.value}
                onChange={(input) => {
                  const newAction = { ...action }
                  newAction.Action_Requested_Authorizing_Section.value = input
                  handleChange(newAction)
                }}
                onFocus={setFocus}
              />
            </InputWithLabel>
          </Line>
          {submitNewAction != null && (
            <Line>
              <PrimaryButton label="Submit" onClick={submitNewAction} />
            </Line>
          )}
        </ContainerInnerSegment>
      </ContainerBox>
    </Line>
  )
}

export default ActionForm
