import React from 'react'
import { TPageProps } from './model'
import { PageWrapper } from './Page.style'

const Page = (props: TPageProps): JSX.Element => {
  const { children } = props
  return <PageWrapper>{children}</PageWrapper>
}

export default Page
