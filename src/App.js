import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="calculator-container">
        <Calculator />
      </div>
      <div className="quote-container">
        <Quote />
      </div>
    </div>
  );
}

export default App;
