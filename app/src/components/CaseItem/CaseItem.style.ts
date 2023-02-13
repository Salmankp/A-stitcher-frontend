import styled from 'styled-components'

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 370px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #e4e5eb;
  box-shadow: 0px 4px 18px 3px rgba(46, 50, 52, 0.08);
  border-radius: 6px;
  padding: 8px 16px;
`

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const CaseLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  color: #0c3bb9;
  margin-right: auto;
`

export const DateLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #56626e;
`
