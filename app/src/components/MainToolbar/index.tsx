import { ToolbarWrapper } from './MainToolbar.style'
import { TMainToolbarProps } from './model'

const MainToolbar = (props: TMainToolbarProps) => {
  const { children, style } = props
  return <ToolbarWrapper style={style}>{children}</ToolbarWrapper>
}

export default MainToolbar
