import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [buffer, setBuffer] = useState('');
  const [operator, setOperator] = useState(null);
  const [isResult, setIsResult] = useState(false);

  const handleNumberClick = (number) => {
    if (isResult) {
      setDisplayValue(number);
      setIsResult(false);
    } else {
      setDisplayValue((prevDisplayValue) =>
        prevDisplayValue === '0' ? number : prevDisplayValue + number
      );
    }
  };

  const handleOperatorClick = (operator) => {
    if (buffer) {
      evaluate();
    }
    setBuffer(displayValue);
    setOperator(operator);
    setDisplayValue('0');
  };

  const evaluate = () => {
    const current = parseFloat(displayValue);
    const previous = parseFloat(buffer);

    let result;
    switch (operator) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '*':
        result = previous * current;
        break;
      case '/':
        result = previous / current;
        break;
      default:
        break;
    }

    setDisplayValue(`${previous} ${operator} ${current} = ${result}`);
    setBuffer('');
    setOperator(null);
    setIsResult(true);
  };

  const clear = () => {
    setDisplayValue('0');
    setBuffer('');
    setOperator(null);
    setIsResult(false);
  };

  return (
      
    <div className="calculator">
        <div className="container">
      <div className="display">
        <div className="previous-value">
          {isResult ? buffer : ''}
        </div>
        {displayValue}
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('+')} className="btn_operators">+</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('-')} className="btn_operators">-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('*')} className="btn_operators">*</button>
        </div>
        <div className="row">
          <button onClick={() => clear()} className="btn_buffer" >C</button>
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={() => evaluate()}>=</button>
          <button onClick={() => handleOperatorClick('/')} className="btn_operators">/</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
