import styled from 'styled-components'

export const ProfileWrapper = styled.div``

export const ProfileHeading = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.25px;
  color: #212b36;
  margin-right: 20px;
  line-height: 36px;
`

// made some differences here because design was too big
export const ProfileSubHeadingWrapper = styled.div`
  padding: 4px;
  margin: auto 0;
  background: #e4e5eb;
  border-radius: 4px;
`

export const ProfileSubHeading = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  color: #192129;
  line-height: 16px;
`

export const ProfileBody = styled.div``

export const ProfileItem = styled.div`
  border-bottom: 1px solid #e4e5eb;
  display: flex;
  padding-bottom: 8px;
  padding-top: 8px;
`

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e4e5eb;
  padding-bottom: 12px;
`

export const ProfileItemHeader = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  width: 186px;
  color: #212b36;
  margin: auto 0;
  margin-right: 48px;
`

export const ProfileItemLink = styled.a`
  margin-right: auto;
`

export const ProfileItemValue = styled.label`
  margin-right: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #192129;
  margin: auto 0;
`
