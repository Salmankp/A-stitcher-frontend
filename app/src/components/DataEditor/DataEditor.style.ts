import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;
  margin-bottom: 10px;
  > * {
    margin-right: 16px;
  }

  *:last-child {
    margin-right: 0;
  }
`
