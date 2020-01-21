import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const Verified = (props) => {
  const { customer } = props;
  
  return (
    <>
      <h4>Thank you - we are now forwarding you to {customer}</h4>
    </>
  );
}

const mapStateToProps = state => ({
  customer: state.Steps.customer
});

export default connect(mapStateToProps)(Verified);
