import React from 'react'
import { Route, Switch, Redirect, useRouteMatch, Link } from 'react-router-dom'

import styles from './ContactUs.module.scss'

import contactUs from '../../tools/mockup/routes/contactUs'
import Login from '../Login'

const ContactUs = () => {
  const { url } = useRouteMatch()

  return (
    <div className={styles.wrapper}>
      Hello it's Contact Us screen.
      <Link to='/contactUs/login'>LOGIN</Link>
      <Switch>
        <Route path={`${url}/login`} component={Login} />
        <Redirect to='/contactUs' />
      </Switch>
    </div>
  )
}

export default ContactUs
