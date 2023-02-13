import { useMemo, useState } from 'react'
import {
  SelectContainer,
  SelectListWrapper,
  SelectHeader,
  SelectList,
  SelectItem,
  Wrapper,
  SelectItemLabel
} from './Select.style'
import { SelectProps } from './model'

const Select = (props: SelectProps) => {
  const [visible, setVisible] = useState(false)
  const {
    options,
    width,
    selectFilterItem,
    selectedId,
    defaultTitle,
    headerWidth
  } = props

  const onSelectItemClickHandler = (id: string) => {
    selectFilterItem(id)
    setVisible(false)
  }

  const title = useMemo(
    () =>
      options.find((option) => option.id === selectedId)?.label || defaultTitle,
    [options, selectedId, defaultTitle]
  )

  return (
    <Wrapper>
      <SelectContainer width={headerWidth}>
        <SelectHeader onClick={() => setVisible(!visible)}>
          {title}
        </SelectHeader>
        {visible && (
          <SelectListWrapper width={width}>
            <SelectList>
              {options.map((option) => (
                <SelectItem
                  role="select-item"
                  key={option.id}
                  onClick={() => onSelectItemClickHandler(option.id)}
                >
                  <SelectItemLabel>{option.label}</SelectItemLabel>
                </SelectItem>
              ))}
            </SelectList>
          </SelectListWrapper>
        )}
      </SelectContainer>
    </Wrapper>
  )
}

export default Select
