import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1-way of rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// 2-way of rendering
// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// );