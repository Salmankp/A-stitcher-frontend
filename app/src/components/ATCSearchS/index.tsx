import React, { useEffect, useState } from 'react'
import { ATCSearch, Spinner } from '../../components'
import {
  ATCSearchSWrapper,
  ATCSuggest,
  ATCSuggestItem,
  SpinWrapper
} from './ATCSearchS.style'
import { TATCsearchSprops } from './model'

const ATCSearchS = (props: TATCsearchSprops): JSX.Element => {
  const { searchProps, visible, loading, suggestions, onItemClick } = props

  const [highlighted, setHighlighted] = useState('')
  const { onChange, style, placeholder, search, onKeyDown } = searchProps

  useEffect(() => {
    if (suggestions?.length > 0) setHighlighted(suggestions[0])
  }, [suggestions])

  const onKeyPressHandler = (key: string): void => {
    if (visible === false) return

    if (suggestions?.length === 0) return

    if (key === 'ArrowUp') {
      const index = suggestions.findIndex((item) => item === highlighted)
      setHighlighted(
        index === 0
          ? suggestions[suggestions.length - 1]
          : suggestions[index - 1]
      )
    }

    if (key === 'ArrowDown') {
      const index = suggestions.findIndex((item) => item === highlighted)
      setHighlighted(
        index === suggestions.length - 1
          ? suggestions[0]
          : suggestions[index + 1]
      )
    }

    if (key === 'Enter') {
      onItemClick(highlighted)
    }
  }

  return (
    <ATCSearchSWrapper
      onKeyDown={(e) => {
        onKeyPressHandler(e.key)
      }}
    >
      <ATCSearch
        onChange={onChange}
        style={style}
        autoFocus={false}
        placeholder={placeholder}
        search={search}
        onKeyDown={onKeyDown}
      />
      {visible && (
        <ATCSuggest>
          {suggestions?.map((item: string) => (
            <ATCSuggestItem
              key={item}
              onClick={() => onItemClick(item)}
              onMouseEnter={() => setHighlighted(item)}
              selected={highlighted === item}
            >
              {item}
            </ATCSuggestItem>
          ))}
          {loading && (
            <SpinWrapper>
              <Spinner />
            </SpinWrapper>
          )}
        </ATCSuggest>
      )}
    </ATCSearchSWrapper>
  )
}

export default ATCSearchS
