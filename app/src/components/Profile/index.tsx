import {
  ProfileWrapper,
  ProfileHeader,
  ProfileHeading,
  ProfileSubHeading,
  ProfileBody,
  ProfileItem,
  ProfileSubHeadingWrapper,
  ProfileItemHeader,
  ProfileItemLink,
  ProfileItemValue
} from './Profile.style'
import { ProfileProps } from './model'

const Profile = (props: ProfileProps) => {
  const { title, subtitle, items } = props
  return (
    <ProfileWrapper>
      <ProfileHeader>
        <ProfileHeading>{title}</ProfileHeading>
        {subtitle && (
          <ProfileSubHeadingWrapper>
            <ProfileSubHeading>{subtitle}</ProfileSubHeading>
          </ProfileSubHeadingWrapper>
        )}
      </ProfileHeader>
      <ProfileBody>
        {items.map((item) => {
          const { link, header, value } = item
          return (
            <ProfileItem key={header + value}>
              <ProfileItemHeader>{header}</ProfileItemHeader>
              {link
                ? (
                <ProfileItemLink>{value}</ProfileItemLink>
                  )
                : (
                <ProfileItemValue>{value}</ProfileItemValue>
                  )}
            </ProfileItem>
          )
        })}
      </ProfileBody>
    </ProfileWrapper>
  )
}
export default Profile
