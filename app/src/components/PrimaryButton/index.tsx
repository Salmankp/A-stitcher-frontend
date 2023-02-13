import { ButtonProps } from './model'
import { StyledButton } from './PrimaryButton.style'

const PrimaryButton = (props: ButtonProps) => {
  const { label, icon, onClick } = props
  return (
    <StyledButton type="primary" icon={icon} onClick={onClick}>
      {label}
    </StyledButton>
  )
}

export default PrimaryButton
