import React from 'react';
import { connect } from 'react-redux';

import './index.css';
import Button from '../../components/Button';
import { setCustomerInfo } from '../../reducers/Steps';

const SelectCustomer = (props) => {
  const { setCustomerInfo } = props;
  
  const nextStep = (customer) => setCustomerInfo(customer);

  return (
    <>
      <h1>Hi There - Welcome to your HMBradley customer Support Portal</h1>
      <h3>I would like to speak with</h3>
      <div className="mx-auto buttons-container">
        <Button onClick={nextStep.bind(null, 'James')} className="button" text='James'/>
        <Button onClick={nextStep.bind(null, 'William')}  className="button" text='William'/>
      </div>
    </>
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  setCustomerInfo: (payload) => dispatch(setCustomerInfo(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCustomer);
