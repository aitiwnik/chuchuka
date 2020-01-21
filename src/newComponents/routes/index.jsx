import React from 'react'
import { Route } from 'react-router-dom'

export const Routes = arr =>
  arr.map(({ component, path }) => (
    <Route key={path} path={path} component={component} />
  ))
