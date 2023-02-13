import { useState, useCallback } from 'react'
import {
  SelectContainer,
  SelectListWrapper,
  SelectHeader,
  SelectList,
  SelectItem,
  Wrapper,
  SelectItemLabel
} from './MultiSelect.style'
import { MultiSelectProps } from './model'
import ATCCheckbox from '../../components/ATCCheckBox'

const MultiSelect = (props: MultiSelectProps) => {
  const [visible, setVisible] = useState(false)
  const { options, width, selectFilterItem, wrapWidth, placeholder } = props

  const headerDefault = placeholder || 'Select Category'

  const onSelectItemClickHandler = (id: string) => {
    selectFilterItem(id)
  }

  const title = useCallback(() => {
    const title =
      options[0]?.selected && options[0].id === 'all'
        ? options[0]?.label
        : options.reduce((acc, val) => {
          return val.selected
            ? acc.length === 0
              ? `${acc}${val.label}`
              : `${acc}, ${val.label}`
            : acc
        }, '')

    return title.length > 0 ? title : headerDefault
  }, [options, headerDefault])()

  return (
    <Wrapper>
      <SelectContainer width={wrapWidth}>
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
                  <ATCCheckbox selected={option.selected} />
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

export default MultiSelect
