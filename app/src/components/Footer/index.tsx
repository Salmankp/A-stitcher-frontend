import { FooterProps } from './model'
import { FooterWrapper } from './Footer.style'

const Footer = (props: FooterProps) => {
  const { children } = props

  return <FooterWrapper>{children}</FooterWrapper>
}

export default Footer
