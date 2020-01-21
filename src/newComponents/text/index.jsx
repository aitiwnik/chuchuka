import React from 'react'
import { Link } from 'react-router-dom'

export const Text = ({ children, block, link }) => {
  const Wrap = ({ children }) =>
    block ? <div>{children}</div> : <span>{children}</span>

  const LinkedWrap = ({ children }) =>
    link ? <Link to={link}>{children}</Link> : <>{children}</>

  return (
    <Wrap>
      <LinkedWrap>{children}</LinkedWrap>
    </Wrap>
  )
}
