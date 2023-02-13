import { TabsHeaderWrapper, Tab } from './TabsHeader.style'
import { TabsHeaderProps } from './model'
import { TABS } from '../../utils/constants'
import React from 'react'

const TabsHeader = (props: TabsHeaderProps) => {
  const { selectTab, selectedTab } = props
  return (
    <TabsHeaderWrapper>
      {TABS.map((tab) => (
        <Tab
          key={tab}
          selected={tab === selectedTab}
          onClick={() => selectTab(tab)}
        >
          {tab}
        </Tab>
      ))}
    </TabsHeaderWrapper>
  )
}

export default TabsHeader
