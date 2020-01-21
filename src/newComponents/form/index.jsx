import React from 'react'
import styles from './form.module.scss'

export const Form = ({ onSubmit, children }) => {
  const handleSubmit = event => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
