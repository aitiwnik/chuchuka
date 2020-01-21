import React from 'react'

export const Button = ({ event, text, children }) => {
  return <button onClick={event}>{text || children}</button>
}
