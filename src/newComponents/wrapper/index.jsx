import React from 'react'

export const Wrapper = ({ children, margin, padding }) => {
  return <div style={{ margin, padding }}>{children}</div>
}
