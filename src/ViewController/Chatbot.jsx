/* eslint-disable react/prop-types */
import React from 'react';
import LeftMsgUI from '../View/LeftMsgUI';
import RightMsgUI from '../View/RightMsgUI';

const Chatbot = ({ msgArray }) => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card mt-5">
        <div className="d-flex flex-row justify-content-between p-3 adiv text-white">
          <span className="pb-3">Live chat</span>
        </div>
        {msgArray.map((msg, index) => {
          if (index % 2 === 0) {
            return <LeftMsgUI msg={msg} />;
          }
          return <RightMsgUI msg={msg} />;
        })}
      </div>
    </div>
  );
};

export default Chatbot;
