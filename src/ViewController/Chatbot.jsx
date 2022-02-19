/* eslint-disable react/prop-types */
import React from 'react';
import LeftMsgUI from '../View/LeftMsgUI';
import RightMsgUI from '../View/RightMsgUI';

const Chatbot = ({ msgArray }) => {
  return (
    <div>
      <div>
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
