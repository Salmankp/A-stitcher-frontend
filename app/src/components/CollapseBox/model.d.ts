import { StyledIcon } from '@styled-icons/styled-icon'
export interface TCollapseBoxProps {
  title: string
  TitleIcon: StyledIcon
  children: ReactElement<any, any>
  fixOpen?: boolean
}

export interface CollapseBoxStyleProps {
  fixOpen?: boolean
}
