import styled, { css } from 'styled-components'
import { Refresh } from '@styled-icons/boxicons-regular'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  > * {
    margin-right: 10px;
  }

  > *:last-child {
    margin-right: 0;
  }
`

export const StyledRefreshIcon = styled(Refresh)`
  width: 24px;
  height: 24px;
`

export const buttonStyle = css`
  padding: 4px;
  background: #ffffff;
  border: 1px solid #b7bac6;
  border-radius: 4px;
`

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  min-width: 49.5%;
  margin-left: 5px;
`
