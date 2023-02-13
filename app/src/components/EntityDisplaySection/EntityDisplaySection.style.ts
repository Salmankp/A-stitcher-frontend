import styled from 'styled-components'
import { Edit } from '@styled-icons/material-outlined'

export const EntityDisplayWrapper = styled.div`
  flex: 1;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-left: 4px solid #e4e5eb;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.03),
    0px 16px 24px 2px rgba(0, 0, 0, 0.1);
`

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 22px 22px 0 22px;
`

export const IconTitleImg = styled.img`
  margin-right: 10px;
`

export const StyledEditIcon = styled(Edit)`
  width: 18px;
  height: 18px;
`
