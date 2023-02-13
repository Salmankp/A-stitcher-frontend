import { observer } from 'mobx-react-lite'
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { ATC_Store } from '../../../store/mobx/ATCStore'

const PublicRoute = observer(
  ({ atcServiceStore }: { atcServiceStore: ATC_Store }) => {
    const { authenticated } = atcServiceStore

    return authenticated ? <Navigate to="/dashboard" replace /> : <Outlet />
  }
)
export default PublicRoute
