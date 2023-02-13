import type { FocusConfig } from '../DocumentDataSection/model'

export interface DataEditorProps {
  data: any
  updateData?: (input: any) => void
  verbose?: boolean
  setFocus: (payload: string | FocusConfig) => void
}
