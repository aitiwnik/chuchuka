import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import './index.css';
import Input from '../../components/Input';
import { resetSteps, setVerified } from '../../reducers/Steps';
import { getCodeRequest } from '../../reducers/Code';

const VerificationCode = (props) => {
  const { 
    setVerified,
    resetSteps,
    code,
    error,
    verified,
    getCodeRequest,
    phoneNumber,
    customer 
  } = props;
  
  const nextStep = () => setVerified();
  
  useEffect(() => {
    phoneNumber && getCodeRequest(phoneNumber, customer)
  }, [customer, phoneNumber, getCodeRequest]);

  error && resetSteps();
  verified && nextStep();

  return (
    <>
      <h1>We're Calling you Now</h1>
      <div className="mx-auto input-container">
        <h4>Please enter the following code on your phone's dial-pad when you receice a call</h4>
        <Input placeholder="Generating..." className="text-center" disabled={true} value={code}></Input>
        <div className="copy-link-wrapper">
          <CopyToClipboard text={code} onCopy={() => toast.success('Copied!')}>
            <span className="cursor-pointer">click to copy</span>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  code: state.Code.code,
  loading: state.Code.loading,
  error: state.Code.error,
  verified: state.Code.verified,
  customer: state.Steps.customer,
  phoneNumber: state.Steps.phoneNumber
});
const mapDispatchToProps = dispatch => ({
  setVerified: () => dispatch(setVerified()),
  resetSteps: () => dispatch(resetSteps()),
  getCodeRequest: (...payload) => dispatch(getCodeRequest(...payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(VerificationCode);
