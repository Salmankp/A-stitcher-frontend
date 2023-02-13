import { IconTitleWrapper, Title } from './IconTitle.style'
import { IconTitleProps } from './model'

const IconTitle = (props: IconTitleProps) => {
  const { icon, title } = props
  return (
    <IconTitleWrapper>
      {icon}
      <Title>{title}</Title>
    </IconTitleWrapper>
  )
}

export default IconTitle
