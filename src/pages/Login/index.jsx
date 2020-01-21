import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Login.module.scss'

import { login } from '../../services/signUser/operation'

import { Button } from '../../newComponents/button'
import { Form } from '../../newComponents/form'
import { Input } from '../../newComponents/input'

export const Login = () => {
  const dispatch = useDispatch()

  const [state, updateState] = useState({
    username: 'bogdan@gmail.com',
    password: '',
  })

  const setState = obj => updateState(prevState => ({ ...prevState, ...obj }))
  const { username, password } = state

  const handleUsername = ({ target: { value } }) =>
    setState({ username: value })
  const handlePassword = ({ target: { value } }) =>
    setState({ password: value })
  const handleSubmit = () => dispatch(login(state))

  return (
    <div className={styles.wrapper}>
      Hello it's a login screen!
      <Link to="/">GO HOME</Link>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleUsername}
          value={username}
          type="text"
          placeholder="username"
        />
        <Input
          onChange={handlePassword}
          value={password}
          type="password"
          placeholder="password"
        />
        <Button>Submit</Button>
      </Form>
    </div>
  )
}
