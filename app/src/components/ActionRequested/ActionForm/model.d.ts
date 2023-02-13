import type { ActionRequest } from '../model'

export interface ActionFormProps {
  action: ActionRequest
  deleteAction: () => void
  handleChange: (action: ActionRequest) => void
  setFocus?: () => void
  submitNewAction?: () => void
}
