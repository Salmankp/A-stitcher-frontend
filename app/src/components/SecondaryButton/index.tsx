import { ButtonProps } from './model'
import { StyledButton } from './SecondaryButton.style'

const SecondaryButton = (props: ButtonProps) => {
  const { label, icon, width, customstyle, onClick } = props
  return (
    <StyledButton
      type="default"
      icon={icon}
      width={width}
      label={label}
      customstyle={customstyle}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  )
}

export default SecondaryButton
