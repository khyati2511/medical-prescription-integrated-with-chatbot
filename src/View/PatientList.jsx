/* eslint-disable react/prop-types */
import React from 'react';

const PatientList = ({ patientData }) => {
  return (
    <div>
      <div>
        <p>{patientData.name}</p>
      </div>
    </div>
  );
};

export default PatientList;
