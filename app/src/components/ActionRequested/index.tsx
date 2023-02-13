import React, { useEffect, useState } from 'react'
import { LocationOn } from '@styled-icons/material-outlined'
import { PlusOutlined } from '@ant-design/icons'
import { Line, Container } from '../CollapseBox/CollapseBox.style'
import { CollapseBox, SecondaryButton } from '../../components'
import { ProjectStore } from '../../store/mobx'
import ActionForm from './ActionForm'
import type { Action, ActionRequest, ActionRequestedProps } from './model'
import { StatusOptions } from '../../utils/constants'

const ActionRequested = ({ actions = [], setFocus }: ActionRequestedProps) => {
  const [actionsArray, setActionsArray] = useState<ActionRequest[]>(actions)
  const [newAction, setNewAction] = useState<ActionRequest | null>(null)
  const { selectedDocument, updateProject } = ProjectStore

  useEffect(() => {
    setActionsArray(actions)
  }, [actions])

  const handleChange = (payload: ActionRequest, index: number) => {
    const newActionRequested = [...actions]
    newActionRequested[index] = payload

    void updateProject({ action_requested: newActionRequested })
  }

  const addAction = () => {
    const actionObj: Action = { title: '', type: '', value: '' }
    const newAction: ActionRequest = {
      Action_Requested_Authorizing_Action_Requested: { ...actionObj },
      Action_Requested_Authorizing_Code_Section_Relief: { ...actionObj },
      Action_Requested_Authorizing_Section: { ...actionObj },
      source: selectedDocument.document._id,
      status: StatusOptions.READY
    }
    setNewAction(newAction)
  }

  const deleteAction = (index: number) => {
    const updatedActions = [...actionsArray]
    updatedActions.splice(index, 1)
    void updateProject({ action_requested: updatedActions })
  }

  const submitNewAction = async () => {
    try {
      await updateProject({ action_requested: [...actionsArray, newAction] })
      setNewAction(null)
    } catch (e) {}
  }

  return (
    <CollapseBox
      fixOpen={true}
      title="Actions Requested"
      TitleIcon={LocationOn}
    >
      <Container>
        {actionsArray.map((action, index) => (
          <ActionForm
            action={action}
            deleteAction={() => deleteAction(index)}
            handleChange={(actionUpdated) => handleChange(actionUpdated, index)}
            key={index}
            setFocus={() =>
              setFocus({ index, key: 'action_requested', type: 'array' })
            }
          />
        ))}

        {newAction != null
          ? (
          <ActionForm
            action={newAction}
            deleteAction={() => setNewAction(null)}
            handleChange={(action: ActionRequest) => setNewAction(action)}
            submitNewAction={submitNewAction}
          />
            )
          : (
          <Line>
            <SecondaryButton
              label="Add another"
              icon={<PlusOutlined />}
              onClick={() => addAction()}
            />
          </Line>
            )}
      </Container>
    </CollapseBox>
  )
}

export default ActionRequested
