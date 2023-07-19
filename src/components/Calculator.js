import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

function Button({ value, className, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  function handleButtonClick(buttonName) {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  }

  return (
    <div className="main">
      <h2>L3t$ D0 s0m3 M@th$</h2>
      <div className="cover">
        <div className="calculator">
          <div className="calculator__wrap">
            <div className="calculator__display">
              {calculatorData.next || calculatorData.total || '0'}
            </div>
            <div className="calculator__functions">
              <Button value="AC" onClick={() => handleButtonClick('AC')} />
              <Button value="+/-" onClick={() => handleButtonClick('+/-')} />
              <Button value="%" onClick={() => handleButtonClick('%')} />
              <Button value="÷" className="btn--opaque" onClick={() => handleButtonClick('÷')} />
              <Button value="7" onClick={() => handleButtonClick('7')} />
              <Button value="8" onClick={() => handleButtonClick('8')} />
              <Button value="9" onClick={() => handleButtonClick('9')} />
              <Button value="x" className="btn--opaque" onClick={() => handleButtonClick('x')} />
              <Button value="4" onClick={() => handleButtonClick('4')} />
              <Button value="5" onClick={() => handleButtonClick('5')} />
              <Button value="6" onClick={() => handleButtonClick('6')} />
              <Button value="-" className="btn--opaque" onClick={() => handleButtonClick('-')} />
              <Button value="1" onClick={() => handleButtonClick('1')} />
              <Button value="2" onClick={() => handleButtonClick('2')} />
              <Button value="3" onClick={() => handleButtonClick('3')} />
              <Button value="+" className="btn--opaque" onClick={() => handleButtonClick('+')} />
              <Button value="0" className="btn--large" onClick={() => handleButtonClick('0')} />
              <Button value="." onClick={() => handleButtonClick('.')} />
              <Button value="=" className="btn--opaque" onClick={() => handleButtonClick('=')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
