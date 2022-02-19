import React, { useEffect, useState } from 'react';
import Navbar from '../View/Navbar';
import PatientList from '../View/PatientList';

const Home = () => {
  const [patientData, setPatientData] = useState([]);
  useEffect(() => {
    fetch().then((res) => {
      console.log(res);
      setPatientData(res.Data);
    }).catch((err) => {
      console.log(err);
    });
  });

  return (
    <div>
      <Navbar />
      {patientData.map((pd) => (
        <PatientList patientData={pd} />
      ))}
    </div>
  );
};

export default Home;
