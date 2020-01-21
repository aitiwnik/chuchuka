import React from 'react'
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'

import styles from './ContactUs.module.scss'

// import contactUs from '../../tools/mockup/routes/contactUs'
import { Login } from '../Login'
import { Initial } from './initial'

const ContactUs = () => {
  const { url } = useRouteMatch()

  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route path={url} component={Initial} />
        <Route path={`${url}/login`} component={Login} />
        <Redirect to={url} />
      </Switch>
    </div>
  )
}

export default ContactUs
