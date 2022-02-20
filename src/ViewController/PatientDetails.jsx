/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import Chatbot from './Chatbot';

const patientDetails = () => {
  return (
    <div>
      <div>
        <p>jumana</p>
        <button type="button" value="bot" />
        <Chatbot msgArray={['msg', 'msg']} />
      </div>
    </div>
  );
};

export default patientDetails;
