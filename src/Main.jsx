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
    question:
      'Which of the following is the correct way to link an external CSS file to an HTML document?',
    answers: [
      { text: '<link rel="style.css" href="stylesheet">', isCorrect: false },
      { text: '<link rel="stylesheet" href="style.css">', isCorrect: true },
      { text: '<link src="style.js" type="text/html">', isCorrect: false },
      { text: ' <link type="text/js" alt="style.html">', isCorrect: false },
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
  {
    question:
      'Which of the following is the correct syntax for creating a new variable in JavaScript?',
    answers: [
      { text: 'let = myVariable', isCorrect: false },
      { text: 'myVariable = let', isCorrect: false },
      { text: 'let myVariable', isCorrect: true },
      { text: 'func myVariable', isCorrect: false },
    ],
  },
  {
    question: 'What does the acronym "SEO" stand for in web development?',
    answers: [
      { text: 'System Error Occurrence', isCorrect: false },
      { text: 'Server Environment Optimization', isCorrect: false },
      { text: 'Secure Encryption Online', isCorrect: false },
      { text: 'Search Engine Optimization', isCorrect: true },
    ],
  },
  {
    question:
      'Which of the following is a commonly used version control system in web development?',
    answers: [
      { text: 'SVN', isCorrect: false },
      { text: 'Git', isCorrect: true },
      { text: 'Mercurial', isCorrect: false },
      { text: 'All of the above', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is not a JavaScript data type?',
    answers: [
      { text: 'Character', isCorrect: true },
      { text: 'Number', isCorrect: false },
      { text: 'String', isCorrect: false },
      { text: 'Boolean', isCorrect: false },
    ],
  },
  {
    question:
      'What is the difference between "==" and "===" operators in JavaScript?',
    answers: [
      {
        text: '"==" compares only values, while "===" compares values and types.',
        isCorrect: true,
      },
      {
        text: '"==" compares values and types, while "===" compares only values.',
        isCorrect: false,
      },
      {
        text: '"==" and "===" are interchangeable and can be used interchangeably.',
        isCorrect: false,
      },
      {
        text: '"==" and "===" are not valid operators in JavaScript.',
        isCorrect: false,
      },
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
