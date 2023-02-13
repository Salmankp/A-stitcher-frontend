import { useCallback } from 'react'
import { openFolder } from '../../assets/images'
import {
  PageSection,
  IconTitle,
  Profile,
  CaseItem,
  Footer,
  SecondaryButton
} from '../'
import {
  EntityDisplayWrapper,
  IconTitleImg,
  Wrapper,
  StyledEditIcon
} from './EntityDisplaySection.style'
import { EntityDisplayProps } from './model'
import { ListWrapper } from '../List/EntitiesList.style'

const EntityDisplaySection = (props: EntityDisplayProps) => {
  const { selectedEntity } = props
  const {
    address,
    email,
    category,
    name,
    companyFirm,
    projects,
    primaryContact = ''
  } = selectedEntity || {}
  const profileItems = useCallback(() => {
    return [
      { header: 'Address', value: address },
      { header: 'Phone Number', value: primaryContact },
      { header: 'Email', value: email },
      { header: 'Website', value: 'www.myWebsite.com', link: true } // Todo need to clarify this field
    ]
  }, [address, email])()
  const displayName = name || companyFirm
  return (
    <PageSection>
      <EntityDisplayWrapper>
        {displayName && (
          <Wrapper>
            <Profile
              items={profileItems}
              title={displayName}
              subtitle={category.toUpperCase()}
            />
            <IconTitle
              icon={<IconTitleImg src={openFolder} />}
              title={'Cases'}
            />
            <ListWrapper>
              {projects?.length > 0 &&
                projects.map((item: any) => (
                  <CaseItem key={item.id} item={item} />
                ))}
            </ListWrapper>
          </Wrapper>
        )}
        {displayName && (
          <Footer>
            <SecondaryButton
              label={'Edit'}
              icon={<StyledEditIcon />}
              width="90px"
            />
          </Footer>
        )}
      </EntityDisplayWrapper>
    </PageSection>
  )
}

export default EntityDisplaySection
