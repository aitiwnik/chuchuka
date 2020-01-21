import React from 'react';

import './index.css';

const Input = (props) => {
  const { value, disabled, placeholder, className, onChange } = props;
  return (
    <input 
      value={value} 
      disabled={disabled} 
      placeholder={placeholder} 
      onChange={onChange} 
      className={className}/>
  );
}

export default Input;
