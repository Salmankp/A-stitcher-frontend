import { PageSectionWrapper, Wrapper } from './PageSection.style'
import { TPageSectionProps } from './model'
import Footer from '../Footer'

const PageSection = (props: TPageSectionProps) => {
  const { children, footerItem, width } = props
  return (
    <PageSectionWrapper width={width}>
      {children != null && <Wrapper>{children}</Wrapper>}
      {footerItem != null && <Footer>{footerItem}</Footer>}
    </PageSectionWrapper>
  )
}

export default PageSection
