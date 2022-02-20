/* eslint-disable react/prop-types */
import React from 'react';

const PatientList = ({ patientData }) => {
  return (
    <li className="list-group-item">
      <p>{patientData.name}</p>
    </li>
  );
};

export default PatientList;
