/* eslint-disable react/prop-types */
import React from 'react';
import profile from '../Images/person.png';

const RightMsgUI = ({ msg }) => {
  return (
    <div className="d-flex flex-row p-3 left">
      <div className="bg-white mr-2 p-3">
        <span className="text-muted">{msg}</span>
      </div>
      <img src={profile} width="30" height="30" alt="" />
    </div>
  );
};

export default RightMsgUI;
