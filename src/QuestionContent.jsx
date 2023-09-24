import React from 'react';

const QuestionContent = ({selectAnswer, questionIndex, questionData, score}) => {
  return (
    <>
      <div className='question-content'>
        <h2>{questionData[questionIndex].question}</h2>
        <h4 className='score-el'>score: {score}</h4>
      </div>
      <div className='answer-content'>
        {questionData[questionIndex].answers.map((answer, index) => (
          <button
            key={index}
            data-correct={answer.isCorrect}
            className='answer-list'
            onClick={selectAnswer}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuestionContent;
