import React, { useCallback } from 'react'
import { ATCTable } from '../../components'

const tableHeaders = [
  {
    id: 'a',
    display: <label>a</label>,
    style: { width: '150px' }
  },
  {
    id: 'b',
    display: <label>b</label>,
    style: { width: '150px' }
  },
  {
    id: 'c',
    display: <label>c</label>,
    style: { width: '150px' }
  },
  {
    id: 'd',
    display: <label>d</label>,
    style: { width: '150px' }
  },
  {
    id: 'e',
    display: <label>e</label>,
    style: {}
  }
]

const tableRows = [
  { a: 'assa', b: 'sdadas', c: 'dsada', d: 'asdadasd', e: ' asdasdasd' },
  { a: 'sdadas', b: 'sdadas', c: 'dsada', d: 'asdadasd', e: ' asdasdasd' },
  { a: 'asssa', b: 'sdadas', c: 'dsada', d: 'asdadasd', e: ' asdasdasd' },
  { a: 'ass2a', b: 'sdadas', c: 'dsada', d: 'asdadasd', e: ' asdasdasd' },
  { a: 'asfsa', b: 'sdadas', c: 'dsada', d: 'asdadasd', e: ' asdasdasd' },
  { a: 'as234sa', b: 'sdadas', c: 'dsada', d: 'asdadasd', e: ' asdasdasd' }
]
const DashboardCasesTable = (props: any) => {
  const { options } = props

  const constructTableRows = useCallback(() => {
    if (!options) return tableRows
    return tableRows.map((row) => {
      const newRow = {}
      options.forEach((option: any) => {
        const { id, selected } = option
        if (selected) {
          // @ts-expect-error
          newRow[id] = row[id]
        }
      })
      return newRow
    })
  }, [options])

  const constructTableHeaders = useCallback(() => {
    if (!options) return tableHeaders
    return tableHeaders.filter((header) => {
      const optionHeader = options.find(
        (option: any) => option.id === header.id
      )

      if (optionHeader.selected) return true
      return false
    })
  }, [options])

  const tableWidth = useCallback(() => {
    const selectedOptions = options.reduce((acc: number, option: any) => {
      if (option.selected) acc = acc + 1
      return acc
    }, 0)
    return (selectedOptions / options.length) * 100 + '%'
  }, [options])()

  return (
    <ATCTable
      rows={constructTableRows()}
      headers={constructTableHeaders()}
      tableWidth={tableWidth}
    />
  )
}

export default DashboardCasesTable
