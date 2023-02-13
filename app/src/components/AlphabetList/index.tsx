import { getAlphaList } from '../../utils/constants'
import { AlphaListWrapper, AlphaChar, AlphaCharWrapper } from './Alphabet.style'
import { AlphabetListProps } from './model'

const alphaList = getAlphaList()

const AlphabetList = (props: AlphabetListProps) => {
  const { select, selected } = props
  return (
    <AlphaListWrapper>
      {alphaList.map((letter) => (
        <AlphaCharWrapper key={letter} selected={selected === letter}>
          <AlphaChar
            key={letter}
            onClick={() => select(letter === selected ? '' : letter)}
            selected={selected === letter}
          >
            {letter}
          </AlphaChar>
        </AlphaCharWrapper>
      ))}
    </AlphaListWrapper>
  )
}

export default AlphabetList
