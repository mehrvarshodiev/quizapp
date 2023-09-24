import { React, useState } from 'react';

const ResultContent = ({ score, questionData }) => {
  const linePercentage = Math.round((score / questionData.length) * 100);
  return (
    <div className='result-content'>
      <div className='percent-num-content'>
        <strong
          className='percentNum'
          style={
            linePercentage == 100
              ? {
                  left: '95%',
                }
              : { left: `${linePercentage}%` }
          }
        >{`${linePercentage}%`}</strong>
      </div>
      <div className='progres-line-content'>
        <div className='progres-line' style={{ width: `${linePercentage}%` }}>
          {' '}
        </div>
      </div>
      <p className='result-text-content'>
        You have got <span>{score}</span> score out of {questionData.length}{' '}
        question!
      </p>
      <button className='restart-btn' onClick={() => document.location.reload()}>
        Restart
      </button>
    </div>
  );
};

export default ResultContent;
