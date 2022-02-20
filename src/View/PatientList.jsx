/* eslint-disable react/prop-types */
import React from 'react';

const PatientList = ({ patientData }) => {
  return (
    <li className="list-group-item">
      <p>
        <b>Patient Condition :</b>
        {' '}
        {patientData.Condition}
      </p>
      <p>
        <b>Drug :</b>
        {' '}
        {patientData.Drug}
      </p>
      <p>
        <b>Review :</b>
        {' '}
        {patientData.Reviews}
      </p>
    </li>
  );
};

export default PatientList;
