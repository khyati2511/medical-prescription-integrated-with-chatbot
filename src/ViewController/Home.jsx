import React, { useEffect, useState } from 'react';
import Navbar from '../View/Navbar';
import PatientList from '../View/PatientList';
import data from '../utils/data.json';

const Home = () => {
  const [patientData, setPatientData] = useState([]);
  console.log(data);
  useEffect(() => {
    setPatientData(data);
  }, []);
  // useEffect(async () => {
  //   fetch('utils/data.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   }).then((jsonRes) => jsonRes.json())
  //     .then((res) => {
  //       console.log(res);
  //       setPatientData(res.Data);
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <div>
      <Navbar />
      <div>
        {patientData.map((pd) => (
          <PatientList patientData={pd} />
        ))}
      </div>
    </div>
  );
};

export default Home;
