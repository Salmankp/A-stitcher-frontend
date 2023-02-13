import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { HomeWrapper } from './Home.style'
import { navbarData } from '../../utils/constants'
import React from 'react'

const Home = (): JSX.Element => {
  return (
    <HomeWrapper>
      <Navbar items={navbarData} />
      <Outlet />
    </HomeWrapper>
  )
}

export default Home
