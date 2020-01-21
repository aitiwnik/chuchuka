import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { signUserSelectors } from '../services/globalSelectors'

import steps from './steps'
import { Routes } from '../newComponents/routes'

const App = () => {
  const isAuth = useSelector(signUserSelectors.isAuth)
  const routesView = Routes(steps)

  return (
    <div className="app-container mx-auto text-center">
      {isAuth && <h2>Hello, you signed up!</h2>}
        <Switch>
          {routesView}
          <Redirect to="/select-customer" />
        </Switch>
      <ToastContainer />
    </div>
  )
}

// const mapStateToProps = state => ({
//   step: state.Steps.step,
//   customer: state.Steps.customer,
// })

export default App
