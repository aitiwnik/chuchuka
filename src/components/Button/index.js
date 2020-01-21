import React from 'react'

import './index.css'

const Button = props => {
  const { text, className, onClick } = props
  return (
    <div
      onClick={onClick}
      className={`button-container cursor-pointer ${className}`}>
      {text}
    </div>
  )
}

export default Button
