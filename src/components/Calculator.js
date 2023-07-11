import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

function Button({ value, className }) {
  return <button type="button" className={className}>{value}</button>;
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Default props for Button component
Button.defaultProps = {
  className: '',
};

// Calculator component
function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator__wrap">
        <div className="calculator__display">0</div>
        <div className="calculator__functions">
          <Button value="AC" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="/" className="btn--opaque" />
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="*" className="btn--opaque" />
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="-" className="btn--opaque" />
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" className="btn--opaque" />
          <Button value="0" className="btn--large" />
          <Button value="." />
          <Button value="=" className="btn--opaque" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
