import { Outlet, Navigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { ATC_Store } from '../../../store/mobx/ATCStore'
import React from 'react'

const PrivateRoute = observer(
  ({ atcServiceStore }: { atcServiceStore: ATC_Store }) => {
    const { authenticated, initialLoading } = atcServiceStore

    if (initialLoading) return <></>

    if (!authenticated) return <Navigate to="/login" replace />
    return <Outlet />
  }
)

export default PrivateRoute
