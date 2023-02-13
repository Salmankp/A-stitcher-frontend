import type { FocusConfig } from '../DocumentDataSection/model'

interface Action {
  title: string
  type: string
  value: string
}

interface ActionRequest {
  Action_Requested_Authorizing_Action_Requested: Action
  Action_Requested_Authorizing_Code_Section_Relief: Action
  Action_Requested_Authorizing_Section: Action
  source: string
  status: string
}

export interface ActionRequestedProps {
  actions: ActionRequest[]
  setFocus: (config: FocusConfig) => void
}
