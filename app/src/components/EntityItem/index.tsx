import { useCallback } from 'react'
import {
  EntityItemWrapper,
  LetterIcon,
  ItemLabel,
  ItemEndLabel
} from './EntityItem.style'

const EntityItem = (props: any) => {
  const { item, select, selected } = props
  const { id, name, category, companyFirm } = item || {}
  const itemLogoText = useCallback(() => {
    try {
      const words = name.split(' ')
      if (name.length === 0) return ''
      if (words.length === 0) return ''
      if (words.length === 1) return words[0][0].toUpperCase()

      return words[0][0].toUpperCase() + words[1][0].toUpperCase()
    } catch (error) {
      console.error(error)
    }
  }, [name])()

  return (
    <EntityItemWrapper
      selected={selected?.id === id}
      onClick={() => select({ ...item })}
    >
      <LetterIcon selected={selected?.id === id}>
        <label>{itemLogoText}</label>
      </LetterIcon>
      <ItemLabel>{name || companyFirm}</ItemLabel>
      <ItemEndLabel>{category.toUpperCase()}</ItemEndLabel>
    </EntityItemWrapper>
  )
}

export default EntityItem
