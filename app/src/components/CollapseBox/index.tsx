import {
  BoxWrapper,
  BoxHeader,
  BoxHeaderIconWrapper,
  BoxHeaderLabel,
  ArrowLabel
} from './CollapseBox.style'
import { TCollapseBoxProps } from './model'
import { useState } from 'react'
import ProjectLocationBox from './ProjectLocationBox'
import RelatedDocumentsBox from './RelatedDocumentBox'
import ProjectDescriptionBox from './ProjectDescriptionBox'
import DevelopmentDetailsBox from './DevelopmentDetailsBox'
import EntitiesRelatedBox from './EntitiesInvolvedBox'
import CaseInformationBox from './CaseInformationBox'
import HousingComponentInformationBox from './HousingComponentInformartionBox'

const CollapseBox = (props: TCollapseBoxProps) => {
  const [collapse, setCollapse] = useState(false)
  const { title, TitleIcon, children, fixOpen } = props

  const collapseBoxOnClick = () => {
    if (fixOpen) return
    setCollapse(!collapse)
  }

  return (
    <BoxWrapper>
      <BoxHeader fixOpen={fixOpen} onClick={() => collapseBoxOnClick()}>
        <BoxHeaderIconWrapper>
          <TitleIcon />
        </BoxHeaderIconWrapper>
        <BoxHeaderLabel>{title}</BoxHeaderLabel>
        {!fixOpen && <ArrowLabel>{collapse ? '▼' : '▲'} </ArrowLabel>}
      </BoxHeader>
      {fixOpen || collapse ? children : <></>}
    </BoxWrapper>
  )
}

export {
  ProjectLocationBox,
  ProjectDescriptionBox,
  DevelopmentDetailsBox,
  EntitiesRelatedBox,
  CaseInformationBox,
  RelatedDocumentsBox,
  HousingComponentInformationBox
}
export default CollapseBox
