export interface HouseComponentBoxProps {
  data: Record<
  string,
  {
    label: string
    selected: boolean
    value: any
    source: string
    status: string
  }
  >
  verbose?: boolean
  setFocus: (payload: any) => void
}
