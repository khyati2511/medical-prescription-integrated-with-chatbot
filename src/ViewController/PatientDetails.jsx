/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import Chatbot from './Chatbot';

const patientDetails = ({ patientData }) => {
  return (
    <div>
      <div>
        <p>{patientData.name}</p>
        <button type="button" value="bot" />
        <Chatbot msgArray={[]} />
      </div>
    </div>
  );
};

export default patientDetails;
