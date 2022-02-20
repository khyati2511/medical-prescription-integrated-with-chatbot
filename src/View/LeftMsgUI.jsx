/* eslint-disable react/prop-types */
import React from 'react';
import profile from '../images/person.png';

const LeftMsgUI = ({ msg }) => {
  return (
    <div className="d-flex flex-row p-3">
      <img src={profile} width="30" height="30" alt="hsg" />
      <div className="chat ml-2 p-3">
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default LeftMsgUI;
