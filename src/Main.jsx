import { React, useState } from 'react';
import QuestionContent from './QuestionContent';
import ResultContent from './ResultContent';

const questionData = [
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Cascading Style Sheets', isCorrect: true },
      { text: 'Computer System Styles', isCorrect: false },
      { text: 'Creative Style Structure', isCorrect: false },
      { text: 'None of the above', isCorrect: false },
    ],
  },
  {
    question: 'Which country is the largest in the world?',
    answers: [
      { text: 'China', isCorrect: false },
      { text: 'Russia', isCorrect: true },
      { text: 'Germany', isCorrect: false },
      { text: 'USA', isCorrect: false },
    ],
  },
  {
    question: 'Which programming language was created by Guido van Rossum?',
    answers: [
      { text: 'Ruby', isCorrect: false },
      { text: 'Python', isCorrect: true },
      { text: 'C#', isCorrect: false },
      { text: 'JavaScript', isCorrect: false },
    ],
  },
];

const Main = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const selectAnswer = (evt) => {
    const el = evt.target;
    const correctAnswer = el.dataset.correct === 'true';

    if (correctAnswer) {
      el.classList.add('correct');
      setScore(score + 1);
    } else {
      el.classList.add('wrong');
    }
    const answerContent = el.closest('.answer-content');
    const progressBar = answerContent.parentNode.previousSibling.firstChild;

    const answerBtns = el.closest('.answer-content').childNodes;
    if (el.classList.contains('correct') || el.classList.contains('wrong')) {
      setTimeout(() => {
        setQuestionIndex(questionIndex + 1);
        let percentage = Math.round(
          ((questionIndex + 1) / questionData.length) * 100
        );
        progressBar.style.width = `${percentage}%`;
      }, 1600);

      setTimeout(() => {
        answerBtns.forEach((element) => {
          element.classList.remove('disabled');
          element.classList.remove('correct');
          element.classList.remove('wrong');
        });
      }, 1200);

      answerBtns.forEach((element) => {
        element.classList.add('disabled');
      });
    }

    answerBtns.forEach((element) => {
      if (element.dataset.correct === 'true') {
        setTimeout(() => {
          element.classList.add('correct');
        }, 500);
      }
    });
  };

  return (
    <main className='main'>
      {questionIndex < questionData.length ? (
        <QuestionContent
          selectAnswer={selectAnswer}
          questionIndex={questionIndex}
          questionData={questionData}
          score={score}
        />
      ) : (
        <ResultContent score={score} questionData={questionData} />
      )}
    </main>
  );
};

export default Main;