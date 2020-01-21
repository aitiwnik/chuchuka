import React, { useState } from 'react';
import { connect } from 'react-redux';

import './index.css';
import PhoneInput from '../../components/PhoneInput';
import { setPhoneNumber } from '../../reducers/Steps';

const EnterNumber = (props) => {
  const { setPhoneNumber } = props;
  const [phoneNumber, changePhoneNumber] = useState('');

  const nextStep = () => setPhoneNumber(phoneNumber);

  phoneNumber.length === 12 && nextStep();

  return (
    <>
      <h1>Where should we call you?</h1>
      <div className="mx-auto input-container">
        <h4>We'll call you in just a moment. Please provide the number where you want us to call you.</h4>
        <PhoneInput className="text-center" value={phoneNumber} onChange={changePhoneNumber}/>
      </div>
    </>
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  setPhoneNumber: (payload) => dispatch(setPhoneNumber(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterNumber);
