import React from 'react'
import {
  StyledTable,
  StyledRow,
  StyledHeader,
  StyledData,
  StyledTableHeader,
  StyledTBody
} from './ATCTable.style'

const ATCTable = (props: any) => {
  const { rows, headers, tableWidth } = props
  return (
    <StyledTable style={{ width: tableWidth }}>
      <StyledTableHeader>
        <StyledRow>
          {headers.map((head: any, key: string) => {
            return <StyledHeader key={key}>{head.display}</StyledHeader>
          })}
        </StyledRow>
      </StyledTableHeader>
      <StyledTBody>
        {rows.map((data: any, key: string) => {
          return (
            <StyledRow key={key}>
              {Object.keys(data).map((key) => {
                return <StyledData key={key}>{data[key]}</StyledData>
              })}
            </StyledRow>
          )
        })}
      </StyledTBody>
    </StyledTable>
  )
}

export default ATCTable
