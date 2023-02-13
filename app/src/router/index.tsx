import { Navigate, Route, Routes } from 'react-router-dom'
import { ATCServiceStore, EntitiesStore } from '../store/mobx'
import ProjectStore from '../store/mobx/ProjectStore'
import { PublicRoute, PrivateRoute } from './routeWrappers'
import { Home, Login, Project, Dashboard, Entities, Register } from '../pages'
import React from 'react'

const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoute atcServiceStore={ATCServiceStore} />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<PrivateRoute atcServiceStore={ATCServiceStore} />}>
        <Route element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="project"
            element={<Project projectStore={ProjectStore} />}
          />
          <Route
            path="entities"
            element={<Entities entitiesStore={EntitiesStore} />}
          />
          <Route path="*" element={<Navigate to={'dashboard'} replace />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
