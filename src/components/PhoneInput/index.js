import React from 'react';
import InputMask from 'react-input-mask';

import './index.css';

const PhoneInput = (props) => {
  const {
    value,
    onChange,
    className
  } = props;

  const handleChange = (event) => {
    const number = event.target.value.replace(/[_()-\s]/g, '');
    onChange(number);
  }

  return (
    <InputMask alwaysShowMask mask="+9 (999) 999-9999" value={value} onChange={handleChange}>
      {(inputProps) => <input className={className} {...inputProps} type="text" />}
    </InputMask>
  )
};

export default PhoneInput;
