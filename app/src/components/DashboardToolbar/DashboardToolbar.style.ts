import styled from 'styled-components'

export const DashbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  > :first-child {
    margin-bottom: 16px;
  }
`

export const PageTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  line-height: 24px;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`

export const Wrapper = styled.div`
  display: flex;
`
